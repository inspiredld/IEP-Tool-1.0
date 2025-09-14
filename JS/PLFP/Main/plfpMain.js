// PLFP Main Entry Point
// Placeholder - match PLAA Main/plaaMain.js style

import { createAttendanceSummaryForm } from '../Inputs/attendanceSummary.js';
import { createStakeholderInputForm } from '../Inputs/stakeholderInput.js';
// Removed functional skills assessment inputs/outputs per requirement
import { generateAttendanceSummaryReport } from '../Reports/reportAttendanceSummary.js';
import { generateStakeholderInputReport } from '../Reports/reportStakeholderInput.js';

// TODO: Add report imports and Quill setup as needed

document.addEventListener('DOMContentLoaded', () => {
  // Wire student bar custom pronouns for PLFP
  try {
    const proSel = document.getElementById('plfp-pronouns-select');
    const custom = document.getElementById('plfp-student-custom');
    if (proSel && custom) proSel.addEventListener('change', () => { custom.hidden = proSel.value !== 'other'; });
  } catch (_) {}
  // Example: Initialize Attendance Summary section
  const attendanceSection = document.getElementById('attendance-summary-content');
  if (attendanceSection) {
    createAttendanceSummaryForm(attendanceSection);
  }

  // Example: Initialize Stakeholder Input section
  const stakeholderSection = document.getElementById('stakeholder-input-content');
  if (stakeholderSection) {
    createStakeholderInputForm(stakeholderSection);
  }

  // Functional Skills Assessment inputs removed per requirement

  // Initialize TinyMCE for PLFP output box (full RTE)
  if (window.tinymce && document.getElementById('plfp-editor')) {
    tinymce.init({
      selector: '#plfp-editor',
      license_key: 'gpl',
      menubar: 'file edit view insert format tools table help',
      height: 400,
      plugins: 'lists link table code preview searchreplace visualblocks visualchars wordcount autoresize insertdatetime charmap pagebreak nonbreaking anchor advlist quickbars',
      toolbar: 'undo redo | styles | bold italic underline strikethrough | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | link | table | removeformat | searchreplace | preview code',
      toolbar_mode: 'sliding',
      table_default_attributes: { border: '1' },
      table_default_styles: { 'border-collapse': 'collapse' },
      base_url: 'JS/libs/tinymce',
      content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; padding: 1.25rem 1.5rem; box-sizing: border-box; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } h2 { font-size:12pt; font-weight:bold; } h3 { font-size:10pt; font-weight:bold; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
      setup(editor) {
        window.plfpEditorInstance = editor;
      }
    });
  }

  // Wire up Generate Report button for PLFP
  const generateBtn = document.getElementById('generate-plfp-report-btn');
  const plfpEditor = document.getElementById('plfp-editor');
  if (generateBtn && plfpEditor) {
    generateBtn.addEventListener('click', () => {
      // Pull section-level student name/pronouns if provided
      const sectionName = document.getElementById('plfp-student-name')?.value?.trim();
      const sectionPronouns = document.getElementById('plfp-pronouns-select')?.value || '';
      const customSubj = document.getElementById('plfp-pro-subj')?.value?.trim();
      const customObj = document.getElementById('plfp-pro-obj')?.value?.trim();
      const customPoss = document.getElementById('plfp-pro-poss')?.value?.trim();

      const attendanceHtml = generateAttendanceSummaryReport();
      const stakeholderHtml = generateStakeholderInputReport();
      // Conditional Functional Skills output
      const includeF = document.getElementById('include-functional-assessments')?.checked;
      const excludeF = document.getElementById('exclude-functional-assessments')?.checked;
      let functionalOut = '';
      if (includeF && !excludeF) {
        functionalOut = '<p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>' +
                        '<h1>Summary of Evaluation/Re-Evaluation (Functional/Behavioral/Adaptive Skills Assessments)</h1>' +
                        '<p>[Insert Assessment Information Here]</p>';
      }
      // Optionally prefix report with a small header using section-level name/pronouns
      let header = '';
      if (sectionName || sectionPronouns) {
        const poss = sectionPronouns === 'other' ? (customPoss || '[pronoun]') : (sectionPronouns.split('-')?.[0] === 'he' ? 'his' : sectionPronouns.split('-')?.[0] === 'she' ? 'her' : 'their');
        header = `<p><em>Student: ${sectionName || '[Name]'} • Pronouns: ${sectionPronouns || '—'}</em></p>`;
      }
      const reportHtml = header + attendanceHtml + stakeholderHtml + functionalOut;

      if (window.plfpEditorInstance) {
        window.plfpEditorInstance.setContent(reportHtml);
      } else {
        plfpEditor.innerHTML = reportHtml;
      }
    });
  }

  // Wire mutual exclusivity for Functional Skills include/exclude
  const includeFCheckbox = document.getElementById('include-functional-assessments');
  const excludeFCheckbox = document.getElementById('exclude-functional-assessments');
  if (includeFCheckbox && excludeFCheckbox) {
    includeFCheckbox.addEventListener('change', () => {
      if (includeFCheckbox.checked) excludeFCheckbox.checked = false;
    });
    excludeFCheckbox.addEventListener('change', () => {
      if (excludeFCheckbox.checked) includeFCheckbox.checked = false;
    });
  }
}); 