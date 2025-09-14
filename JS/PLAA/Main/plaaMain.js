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
    // Inject General Statement section editor + button if not already present
    try {
      if (!generalSection.querySelector('#plaa-gs-editor')) {
        const editorWrap = document.createElement('div');
        editorWrap.id = 'plaa-gs-editor-container';
        editorWrap.className = 'rte-box-outer centered-output';
        editorWrap.style.marginTop = '16px';
        const actions = document.createElement('div');
        actions.id = 'plaa-gs-actions';
        actions.setAttribute('aria-label', 'General Statement Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-plaa-gs-report-btn">Generate General Statement</button>';
        editorWrap.appendChild(actions);
        editorWrap.innerHTML += '<textarea id="plaa-gs-editor" style="height: 300px;"></textarea>';
        // Footer with Copy button (bottom-right)
        const footer = document.createElement('div');
        footer.id = 'plaa-gs-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-plaa-gs">Copy</button>';
        editorWrap.appendChild(footer);
        generalSection.appendChild(editorWrap);
      }
    } catch (_) {}
  } else {
    console.warn('General Academic section not found in DOM.');
  }

  // Initialize Academic Progress section
  const progressSection = document.getElementById('current-progress');
  if (progressSection) {
    createAcademicProgressForm(progressSection);
    // Inject Current Academic Progress section editor + controls
    try {
      if (!progressSection.querySelector('#plaa-cap-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'plaa-cap-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';

        const actions = document.createElement('div');
        actions.id = 'plaa-cap-actions';
        actions.setAttribute('aria-label', 'Current Academic Progress Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-plaa-cap-report-btn">Generate Current Academic Progress</button>';
        wrap.appendChild(actions);

        wrap.innerHTML += '<textarea id="plaa-cap-editor" style="height: 300px;"></textarea>';
        const footer = document.createElement('div');
        footer.id = 'plaa-cap-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-plaa-cap">Copy</button>';
        wrap.appendChild(footer);
        progressSection.appendChild(wrap);
      }
    } catch (_) {}
  } else {
    console.warn('Current Progress section not found in DOM.');
  }

  // Initialize State/Local Assessment section
  const assessmentSection = document.getElementById('previous-achievement');
  if (assessmentSection) {
    createStateLocalAssessmentForm(assessmentSection);
    // Inject Summary of State & Local Assessments section editor + controls
    try {
      if (!assessmentSection.querySelector('#plaa-sla-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'plaa-sla-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';

        const actions = document.createElement('div');
        actions.id = 'plaa-sla-actions';
        actions.setAttribute('aria-label', 'Summary of State & Local Assessments Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-plaa-sla-report-btn">Generate State & Local Assessments</button>';
        wrap.appendChild(actions);

        wrap.innerHTML += '<textarea id="plaa-sla-editor" style="height: 300px;"></textarea>';
        const footer = document.createElement('div');
        footer.id = 'plaa-sla-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-plaa-sla">Copy</button>';
        wrap.appendChild(footer);
        assessmentSection.appendChild(wrap);
      }
    } catch (_) {}
  } else {
    console.warn('State/Local Assessment section not found in DOM.');
  }

  // Academic Evaluation section removed per requirement

  // Initialize TinyMCE for PLAA editor (full RTE)
  if (window.tinymce && document.getElementById('plaa-editor')) {
    tinymce.init({
      selector: '#plaa-editor',
      license_key: 'gpl',
      menubar: 'file edit view insert format tools table help',
      height: 400,
      plugins: 'lists link table code preview searchreplace visualblocks visualchars wordcount autoresize insertdatetime charmap pagebreak nonbreaking anchor advlist quickbars',
      toolbar: 'undo redo | styles | bold italic underline strikethrough | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | link | table | removeformat | searchreplace | preview code',
      toolbar_mode: 'sliding',
      table_default_attributes: { border: '1' },
      table_default_styles: { 'border-collapse': 'collapse' },
      base_url: 'JS/libs/tinymce',
      content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; padding: 1.25rem 1.5rem; box-sizing: border-box; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
      setup(editor) {
        window.plaaEditorInstance = editor;
      }
    });
  }

  // Initialize TinyMCE for General Statement section editor (lazy, when present)
  if (window.tinymce && document.getElementById('plaa-gs-editor')) {
    tinymce.init({
      selector: '#plaa-gs-editor',
      license_key: 'gpl',
      menubar: 'file edit view insert format tools table help',
      height: 300,
      min_height: 300,
      max_height: 600,
      plugins: 'lists link table code preview searchreplace visualblocks visualchars wordcount autoresize insertdatetime charmap pagebreak nonbreaking anchor advlist quickbars',
      autoresize_bottom_margin: 20,
      toolbar: 'undo redo | styles | bold italic underline strikethrough | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | link | table | removeformat | searchreplace | preview code',
      toolbar_mode: 'sliding',
      table_default_attributes: { border: '1' },
      table_default_styles: { 'border-collapse': 'collapse' },
      base_url: 'JS/libs/tinymce',
      content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; padding: 1.25rem 1.5rem; box-sizing: border-box; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
      setup(editor) {
        window.plaaGsEditorInstance = editor;
      }
    });
  }
  // Initialize TinyMCE for Current Academic Progress section editor
  if (window.tinymce && document.getElementById('plaa-cap-editor')) {
    tinymce.init({
      selector: '#plaa-cap-editor',
      license_key: 'gpl',
      menubar: 'file edit view insert format tools table help',
      height: 300,
      min_height: 300,
      max_height: 600,
      plugins: 'lists link table code preview searchreplace visualblocks visualchars wordcount autoresize insertdatetime charmap pagebreak nonbreaking anchor advlist quickbars',
      autoresize_bottom_margin: 20,
      toolbar: 'undo redo | styles | bold italic underline strikethrough | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | link | table | removeformat | searchreplace | preview code',
      toolbar_mode: 'sliding',
      table_default_attributes: { border: '1' },
      table_default_styles: { 'border-collapse': 'collapse' },
      base_url: 'JS/libs/tinymce',
      content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; padding: 1.25rem 1.5rem; box-sizing: border-box; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
      setup(editor) {
        window.plaaCapEditorInstance = editor;
      }
    });
  }
  // Initialize TinyMCE for State & Local Assessments section editor
  if (window.tinymce && document.getElementById('plaa-sla-editor')) {
    tinymce.init({
      selector: '#plaa-sla-editor',
      license_key: 'gpl',
      menubar: 'file edit view insert format tools table help',
      height: 300,
      min_height: 300,
      max_height: 600,
      plugins: 'lists link table code preview searchreplace visualblocks visualchars wordcount autoresize insertdatetime charmap pagebreak nonbreaking anchor advlist quickbars',
      autoresize_bottom_margin: 20,
      toolbar: 'undo redo | styles | bold italic underline strikethrough | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | link | table | removeformat | searchreplace | preview code',
      toolbar_mode: 'sliding',
      table_default_attributes: { border: '1' },
      table_default_styles: { 'border-collapse': 'collapse' },
      base_url: 'JS/libs/tinymce',
      content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; padding: 1.25rem 1.5rem; box-sizing: border-box; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
      setup(editor) { window.plaaSlaEditorInstance = editor; }
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

  // Wire up General Statement section-only generator
  const genGsBtn = document.getElementById('generate-plaa-gs-report-btn');
  if (genGsBtn) {
    genGsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const generalContent = generateGeneralStatementOutput(true);
      if (window.plaaGsEditorInstance) {
        window.plaaGsEditorInstance.setContent(generalContent);
      } else {
        const outDiv = document.getElementById('plaa-gs-editor');
        if (outDiv) {
          // If TinyMCE failed to initialize, write into textarea
          outDiv.value = generalContent;
        }
      }
    });
  }

  // Wire up Current Academic Progress section-only generator
  const genCapBtn = document.getElementById('generate-plaa-cap-report-btn');
  if (genCapBtn) {
    genCapBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const capContent = generateAcademicProgressOutput(true);
      if (window.plaaCapEditorInstance) {
        window.plaaCapEditorInstance.setContent(capContent);
      } else {
        const outDiv = document.getElementById('plaa-cap-editor');
        if (outDiv) outDiv.value = capContent;
      }
    });
  }

  // Copy button wiring for CAP editor
  const copyCap = document.getElementById('copy-plaa-cap');
  if (copyCap) {
    copyCap.addEventListener('click', () => {
      let html = '';
      let text = '';
      if (window.plaaCapEditorInstance) {
        html = window.plaaCapEditorInstance.getContent();
        text = window.plaaCapEditorInstance.getContent({ format: 'text' });
      } else {
        const el = document.getElementById('plaa-cap-editor');
        html = el?.value || el?.innerHTML || '';
        text = el?.value || el?.innerText || '';
      }
      if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' })
        });
        navigator.clipboard.write([item]).catch(() => navigator.clipboard.writeText(text));
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(ta);
      }
    });
  }

  // Wire up State & Local Assessments section-only generator
  const genSlaBtn = document.getElementById('generate-plaa-sla-report-btn');
  if (genSlaBtn) {
    genSlaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const slaContent = generateStateLocalAssessmentOutput(true);
      if (window.plaaSlaEditorInstance) {
        window.plaaSlaEditorInstance.setContent(slaContent);
      } else {
        const outDiv = document.getElementById('plaa-sla-editor');
        if (outDiv) outDiv.value = slaContent;
      }
    });
  }

  // Copy button wiring for SLA editor
  const copySla = document.getElementById('copy-plaa-sla');
  if (copySla) {
    copySla.addEventListener('click', () => {
      let html = '';
      let text = '';
      if (window.plaaSlaEditorInstance) {
        html = window.plaaSlaEditorInstance.getContent();
        text = window.plaaSlaEditorInstance.getContent({ format: 'text' });
      } else {
        const el = document.getElementById('plaa-sla-editor');
        html = el?.value || el?.innerHTML || '';
        text = el?.value || el?.innerText || '';
      }
      if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' })
        });
        navigator.clipboard.write([item]).catch(() => navigator.clipboard.writeText(text));
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(ta);
      }
    });
  }

  // Copy button wiring for GS editor
  const copyGs = document.getElementById('copy-plaa-gs');
  if (copyGs) {
    copyGs.addEventListener('click', () => {
      let html = '';
      let text = '';
      if (window.plaaGsEditorInstance) {
        html = window.plaaGsEditorInstance.getContent();
        text = window.plaaGsEditorInstance.getContent({ format: 'text' });
      } else {
        const el = document.getElementById('plaa-gs-editor');
        html = el?.value || el?.innerHTML || '';
        text = el?.value || el?.innerText || '';
      }
      if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' })
        });
        navigator.clipboard.write([item]).catch(() => navigator.clipboard.writeText(text));
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(ta);
      }
    });
  }
});