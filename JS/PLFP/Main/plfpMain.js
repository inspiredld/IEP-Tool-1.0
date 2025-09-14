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
    // Inject Attendance Summary section editor + controls if not present
    try {
      if (!attendanceSection.querySelector('#plfp-attendance-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'plfp-attendance-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';

        const actions = document.createElement('div');
        actions.id = 'plfp-attendance-actions';
        actions.setAttribute('aria-label', 'Attendance Summary Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-plfp-attendance-btn">Generate Attendance Summary</button>';
        wrap.appendChild(actions);

        wrap.innerHTML += '<textarea id="plfp-attendance-editor" style="height: 300px;"></textarea>';

        const footer = document.createElement('div');
        footer.id = 'plfp-attendance-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-plfp-attendance">Copy</button>';
        wrap.appendChild(footer);

        attendanceSection.appendChild(wrap);
      }
    } catch (_) {}
  }

  // Example: Initialize Stakeholder Input section
  const stakeholderSection = document.getElementById('stakeholder-input-content');
  if (stakeholderSection) {
    createStakeholderInputForm(stakeholderSection);
    // Inject Stakeholder Input section editor + controls if not present
    try {
      if (!stakeholderSection.querySelector('#plfp-stakeholder-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'plfp-stakeholder-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';

        const actions = document.createElement('div');
        actions.id = 'plfp-stakeholder-actions';
        actions.setAttribute('aria-label', 'Stakeholder Input Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-plfp-stakeholder-btn">Generate Stakeholder Input</button>';
        wrap.appendChild(actions);

        wrap.innerHTML += '<textarea id="plfp-stakeholder-editor" style="height: 600px;"></textarea>';

        const footer = document.createElement('div');
        footer.id = 'plfp-stakeholder-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-plfp-stakeholder">Copy</button>';
        wrap.appendChild(footer);

        stakeholderSection.appendChild(wrap);
      }
    } catch (_) {}
  }

  // Functional Skills Assessment inputs removed per requirement
  // Still provide a section-level editor container for optional inclusion notes
  const functionalSection = document.getElementById('functional-skills-content');
  if (functionalSection) {
    try {
      if (!functionalSection.querySelector('#plfp-functional-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'plfp-functional-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';

        const actions = document.createElement('div');
        actions.id = 'plfp-functional-actions';
        actions.setAttribute('aria-label', 'Functional Skills Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-plfp-functional-btn">Generate Functional Skills Summary</button>';
        wrap.appendChild(actions);

        wrap.innerHTML += '<textarea id="plfp-functional-editor" style="height: 600px;"></textarea>';

        const footer = document.createElement('div');
        footer.id = 'plfp-functional-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-plfp-functional">Copy</button>';
        wrap.appendChild(footer);

        functionalSection.appendChild(wrap);
      }
    } catch (_) {}
  }

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

  // Initialize TinyMCE for PLFP section editors (Attendance, Stakeholder, Functional)
  if (window.tinymce && document.getElementById('plfp-attendance-editor')) {
    tinymce.init({
      selector: '#plfp-attendance-editor',
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
      setup(editor) { window.plfpAttendanceEditorInstance = editor; }
    });
  }
  if (window.tinymce && document.getElementById('plfp-stakeholder-editor')) {
    tinymce.init({
      selector: '#plfp-stakeholder-editor',
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
      setup(editor) { window.plfpStakeholderEditorInstance = editor; }
    });
  }
  if (window.tinymce && document.getElementById('plfp-functional-editor')) {
    tinymce.init({
      selector: '#plfp-functional-editor',
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
      setup(editor) { window.plfpFunctionalEditorInstance = editor; }
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

  // Wire up Attendance Summary section-only generator
  const genAttendanceBtn = document.getElementById('generate-plfp-attendance-btn');
  if (genAttendanceBtn) {
    genAttendanceBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const html = generateAttendanceSummaryReport();
      if (window.plfpAttendanceEditorInstance) {
        window.plfpAttendanceEditorInstance.setContent(html);
      } else {
        const out = document.getElementById('plfp-attendance-editor');
        if (out) out.value = html;
      }
    });
  }
  // Wire up Stakeholder Input section-only generator
  const genStakeholderBtn = document.getElementById('generate-plfp-stakeholder-btn');
  if (genStakeholderBtn) {
    genStakeholderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const html = generateStakeholderInputReport();
      if (window.plfpStakeholderEditorInstance) {
        window.plfpStakeholderEditorInstance.setContent(html);
      } else {
        const out = document.getElementById('plfp-stakeholder-editor');
        if (out) out.value = html;
      }
    });
  }
  // Wire up Functional Skills section-only generator (placeholder content, controlled by include/exclude)
  const genFunctionalBtn = document.getElementById('generate-plfp-functional-btn');
  if (genFunctionalBtn) {
    genFunctionalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const includeF = document.getElementById('include-functional-assessments')?.checked;
      const excludeF = document.getElementById('exclude-functional-assessments')?.checked;
      let html = '';
      if (includeF && !excludeF) {
        html = '<h1>Summary of Evaluation/Re-Evaluation (Functional/Behavioral/Adaptive Skills Assessments)</h1>' +
               '<p>[Insert Assessment Information Here]</p>';
      } else {
        html = '<p><em>Functional/Behavioral/Adaptive Skills Assessments not included.</em></p>';
      }
      if (window.plfpFunctionalEditorInstance) {
        window.plfpFunctionalEditorInstance.setContent(html);
      } else {
        const out = document.getElementById('plfp-functional-editor');
        if (out) out.value = html;
      }
    });
  }

  // Copy buttons for PLFP section editors
  function wireCopy(btnId, editorInstance, fallbackId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      let html = '';
      let text = '';
      if (editorInstance) {
        html = editorInstance.getContent();
        text = editorInstance.getContent({ format: 'text' });
      } else {
        const el = document.getElementById(fallbackId);
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
  wireCopy('copy-plfp-attendance', window.plfpAttendanceEditorInstance, 'plfp-attendance-editor');
  wireCopy('copy-plfp-stakeholder', window.plfpStakeholderEditorInstance, 'plfp-stakeholder-editor');
  wireCopy('copy-plfp-functional', window.plfpFunctionalEditorInstance, 'plfp-functional-editor');

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