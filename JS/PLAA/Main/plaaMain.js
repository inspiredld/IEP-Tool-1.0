// plaaMain.js
import { createGeneralStatementForm } from '../Inputs/generalStatement.js';
import { generateGeneralStatementOutput } from '../Reports/reportGeneralStatement.js';
import { createAcademicProgressForm } from '../Inputs/academicProgress.js';
import { generateAcademicProgressOutput } from '../Reports/reportAcademicProgress.js';
import { createStateLocalAssessmentForm } from '../Inputs/stateLocalAssessment.js';
import { generateStateLocalAssessmentOutput } from '../Reports/reportStateLocalAssessment.js';
// Removed academic evaluation imports per requirement

// Function to create Word-compatible HTML (supports TinyMCE and Quill)
function createWordFormattedHTML() {
  let content = '';
  if (window.plaaEditorInstance && typeof window.plaaEditorInstance.getContent === 'function') {
    content = window.plaaEditorInstance.getContent();
  } else if (window.plaaEditor && window.plaaEditor.root) {
    content = window.plaaEditor.root.innerHTML;
  } else {
    const outDiv = document.getElementById('plaa-editor');
    if (outDiv) content = outDiv.innerHTML;
  }

  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" 
          xmlns:w="urn:schemas-microsoft-com:office:word" 
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <style>
        h1 { font-family: Arial; font-size: 14pt; font-weight: bold; text-decoration: underline; margin: 0; }
        h2 { font-family: Arial; font-size: 12pt; font-weight: bold; margin: 0; }
        p { font-family: Arial; font-size: 10pt; margin: 0; }
        .ql-indent-1 { margin-left: 40px; }
        .ql-indent-2 { margin-left: 80px; }
        table { border-collapse: collapse; }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize General Statement section
  const generalSection = document.getElementById('general-academic');
  if (generalSection) {
    createGeneralStatementForm(generalSection);
  } else {
    console.warn('General Academic section not found in DOM.');
  }

  // Initialize Academic Progress section
  const progressSection = document.getElementById('current-progress');
  if (progressSection) {
    createAcademicProgressForm(progressSection);
  } else {
    console.warn('Current Progress section not found in DOM.');
  }

  // Initialize State/Local Assessment section
  const assessmentSection = document.getElementById('previous-achievement');
  if (assessmentSection) {
    createStateLocalAssessmentForm(assessmentSection);
  } else {
    console.warn('State/Local Assessment section not found in DOM.');
  }

  // Academic Evaluation section removed per requirement

  // Initialize TinyMCE for PLAA editor (supports tables)
  if (window.tinymce && document.getElementById('plaa-editor')) {
    tinymce.init({
      selector: '#plaa-editor',
      license_key: 'gpl',
      menubar: false,
      height: 400,
      plugins: 'lists link table code',
      toolbar: 'undo redo | bold italic underline | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright | link | table | removeformat | code',
      table_default_attributes: { border: '1' },
      table_default_styles: { 'border-collapse': 'collapse' },
      base_url: '../JS/libs/tinymce',
      content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
      setup(editor) {
        window.plaaEditorInstance = editor;
      }
    });
  }

  // Wire mutual exclusivity for Include/Do Not Include checkboxes
  const includeEvalCheckbox = document.getElementById('include-aptitude-achievement');
  const excludeEvalCheckbox = document.getElementById('exclude-aptitude-achievement');
  if (includeEvalCheckbox && excludeEvalCheckbox) {
    includeEvalCheckbox.addEventListener('change', () => {
      if (includeEvalCheckbox.checked) {
        excludeEvalCheckbox.checked = false;
      }
    });
    excludeEvalCheckbox.addEventListener('change', () => {
      if (excludeEvalCheckbox.checked) {
        includeEvalCheckbox.checked = false;
      }
    });
  }

  // Wire up Generate Report button
  const genBtn = document.getElementById('generate-plaa-report-btn');
  if (genBtn) {
    genBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Get all report contents
      const generalContent = generateGeneralStatementOutput(true);
      const academicContent = generateAcademicProgressOutput(true);
      const assessmentContent = generateStateLocalAssessmentOutput(true);
      // Check evaluation include/exclude checkboxes
      const includeEval = document.getElementById('include-aptitude-achievement')?.checked;
      const excludeEval = document.getElementById('exclude-aptitude-achievement')?.checked;
      let evalContent = '';
      if (includeEval && !excludeEval) {
        evalContent = '<p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>' +
                      '<h1>Evaluation/Re-Evaluation Summary (Aptitude & Achievement)</h1>' +
                      '<p>[Insert Assessment Information Here]</p>';
      }
      // Combine with proper spacing (2 blank rows between prior sections); no extra spacing before evalContent
      const combinedContent = generalContent + '<p><br></p><p><br></p>' + academicContent + '<p><br></p><p><br></p>' + assessmentContent + evalContent;

      if (window.plaaEditorInstance) {
        window.plaaEditorInstance.setContent(combinedContent);
      } else {
        const outDiv = document.getElementById('plaa-editor');
        if (outDiv) outDiv.innerHTML = combinedContent;
      }
    });
  }
});