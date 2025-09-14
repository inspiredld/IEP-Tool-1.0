// Transition Main Entry Point
import { createTransitionEducationForm } from '../Inputs/educationTraining.js';
import { createTransitionEmploymentForm } from '../Inputs/employment.js';
import { createTransitionIndependentLivingForm } from '../Inputs/independentLiving.js';
import { createTransitionAgencyForm } from '../Inputs/agencyInvolvement.js';
import { generateTransitionEducationReport } from '../Reports/reportEducationTraining.js';
import { generateTransitionEmploymentReport } from '../Reports/reportEmployment.js';
import { generateTransitionIndependentLivingReport } from '../Reports/reportIndependentLiving.js';
import { generateAgencyInvolvementReport } from '../Reports/reportAgencyInvolvement.js';

document.addEventListener('DOMContentLoaded', () => {
  // Wire student bar custom pronouns for Transition
  try {
    const proSel = document.getElementById('transition-pronouns-select');
    const custom = document.getElementById('transition-student-custom');
    if (proSel && custom) proSel.addEventListener('change', () => { custom.hidden = proSel.value !== 'other'; });
  } catch (_) {}
  const edu = document.getElementById('transition-education');
  if (edu) {
    createTransitionEducationForm(edu);
    // Inject Education & Training section editor
    try {
      if (!edu.querySelector('#transition-edu-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'transition-edu-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';
        const actions = document.createElement('div');
        actions.id = 'transition-edu-actions';
        actions.setAttribute('aria-label', 'Education & Training Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-transition-edu-btn">Generate Education & Training</button>';
        wrap.appendChild(actions);
        wrap.innerHTML += '<textarea id="transition-edu-editor" style="height: 300px;"></textarea>';
        const footer = document.createElement('div');
        footer.id = 'transition-edu-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-transition-edu">Copy</button>';
        wrap.appendChild(footer);
        edu.appendChild(wrap);
      }
    } catch (_) {}
  }

  const emp = document.getElementById('transition-employment');
  if (emp) {
    createTransitionEmploymentForm(emp);
    try {
      if (!emp.querySelector('#transition-emp-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'transition-emp-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';
        const actions = document.createElement('div');
        actions.id = 'transition-emp-actions';
        actions.setAttribute('aria-label', 'Employment Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-transition-emp-btn">Generate Employment</button>';
        wrap.appendChild(actions);
        wrap.innerHTML += '<textarea id="transition-emp-editor" style="height: 300px;"></textarea>';
        const footer = document.createElement('div');
        footer.id = 'transition-emp-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-transition-emp">Copy</button>';
        wrap.appendChild(footer);
        emp.appendChild(wrap);
      }
    } catch (_) {}
  }

  const ind = document.getElementById('transition-independent-living');
  if (ind) {
    createTransitionIndependentLivingForm(ind);
    try {
      if (!ind.querySelector('#transition-il-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'transition-il-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';
        const actions = document.createElement('div');
        actions.id = 'transition-il-actions';
        actions.setAttribute('aria-label', 'Independent Living Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-transition-il-btn">Generate Independent Living</button>';
        wrap.appendChild(actions);
        wrap.innerHTML += '<textarea id="transition-il-editor" style="height: 300px;"></textarea>';
        const footer = document.createElement('div');
        footer.id = 'transition-il-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-transition-il">Copy</button>';
        wrap.appendChild(footer);
        ind.appendChild(wrap);
      }
    } catch (_) {}
  }

  // Agency Involvement
  const agency = document.getElementById('transition-agency-involvement');
  if (agency) {
    createTransitionAgencyForm(agency);
    try {
      if (!agency.querySelector('#transition-agency-editor')) {
        const wrap = document.createElement('div');
        wrap.id = 'transition-agency-editor-container';
        wrap.className = 'rte-box-outer centered-output';
        wrap.style.marginTop = '32px';
        const actions = document.createElement('div');
        actions.id = 'transition-agency-actions';
        actions.setAttribute('aria-label', 'Agency Involvement Output actions');
        actions.innerHTML = '<button type="button" class="generate-report-btn" id="generate-transition-agency-btn">Generate Agency Involvement</button>';
        wrap.appendChild(actions);
        wrap.innerHTML += '<textarea id="transition-agency-editor" style="height: 300px;"></textarea>';
        const footer = document.createElement('div');
        footer.id = 'transition-agency-footer';
        footer.innerHTML = '<button type="button" class="copy-btn" id="copy-transition-agency">Copy</button>';
        wrap.appendChild(footer);
        agency.appendChild(wrap);
      }
    } catch (_) {}
  }

  // Initialize TinyMCE for Transition editor (full RTE)
  if (window.tinymce && document.getElementById('transition-editor')) {
    tinymce.init({
      selector: '#transition-editor',
      license_key: 'gpl',
      menubar: 'file edit view insert format tools table help',
      height: 400,
      plugins: 'lists link table code preview searchreplace visualblocks visualchars wordcount autoresize insertdatetime charmap pagebreak nonbreaking anchor advlist quickbars',
      toolbar: 'undo redo | styles | bold italic underline strikethrough | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | link | table | removeformat | searchreplace | preview code',
      toolbar_mode: 'sliding',
      table_default_attributes: { border: '1' },
      table_default_styles: { 'border-collapse': 'collapse' },
      base_url: 'JS/libs/tinymce',
      content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; padding: 1.25rem 1.5rem; box-sizing: border-box; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } h2 { font-size:12pt; font-weight:bold; } h3 { font-size:10pt; font-weight:bold; } h4 { font-size:10pt; font-weight:bold; font-style: italic; margin: 0 0 0.15rem 0; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
      setup(editor) {
        window.transitionEditorInstance = editor;
      }
    });
  }

  // Initialize TinyMCE for Transition section editors with autoresize (300-600px)
  function initSectionEditor(selector, instanceProp) {
    if (!window.tinymce) return;
    const el = document.querySelector(selector);
    if (!el) return;
    tinymce.init({
      selector,
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
      setup(editor) { window[instanceProp] = editor; }
    });
  }
  initSectionEditor('#transition-edu-editor', 'transitionEduEditorInstance');
  initSectionEditor('#transition-emp-editor', 'transitionEmpEditorInstance');
  initSectionEditor('#transition-il-editor', 'transitionIlEditorInstance');
  initSectionEditor('#transition-agency-editor', 'transitionAgencyEditorInstance');

  const genBtn = document.getElementById('generate-transition-report-btn');
  const outDiv = document.getElementById('transition-editor');
  if (genBtn && outDiv) {
    genBtn.addEventListener('click', () => {
      // Prefer Transition section-level student/pronouns, then PLAA
      const firstName = document.getElementById('transition-student-name')?.value?.trim()
        || document.getElementById('firstName')?.value?.trim()
        || '[Name]';
      const pronouns = document.getElementById('transition-pronouns-select')?.value
        || document.getElementById('pronouns')?.value
        || '';
      const pronounPossessive =
        pronouns === 'Custom'
          ? (document.getElementById('transition-pro-poss')?.value?.trim() || document.getElementById('pronoun-possessive')?.value?.trim() || '[pronoun]')
          : (pronouns.split('/')?.[2] || '[pronoun]');

      const intro = '<h1>Transition Goals and Activities</h1>' +
        `<p>During previous IEP meetings, the IEP team identified goals and activities related to ${firstName}'s post-secondary education & training, employment, and independent living needs. ${firstName}'s progress towards these goals and information from ${pronounPossessive} most recent transition assessment are described below.</p>` +
        '<p><br></p><p><br></p>';

      let educationHtml = '';
      let employmentHtml = '';
      let independentHtml = '';
      let agencyHtml = '';
      try { educationHtml = generateTransitionEducationReport(true) || ''; } catch (e) { console.error('Education report error', e); }
      try { employmentHtml = generateTransitionEmploymentReport(true) || ''; } catch (e) { console.error('Employment report error', e); }
      try { independentHtml = generateTransitionIndependentLivingReport(true) || ''; } catch (e) { console.error('Independent Living report error', e); independentHtml = '<h2>Independent Living</h2>'; }
      try { agencyHtml = generateAgencyInvolvementReport(true) || ''; } catch (e) { console.error('Agency report error', e); }
      const fourBlanks = '<p><br></p><p><br></p><p><br></p><p><br></p>';
      const reportHtml = intro + educationHtml + fourBlanks + employmentHtml + fourBlanks + independentHtml + (agencyHtml ? (fourBlanks + agencyHtml) : '');
      if (window.transitionEditorInstance) {
        window.transitionEditorInstance.setContent(reportHtml);
      } else {
        outDiv.innerHTML = reportHtml;
      }
    });
  }

  // Section-only Generate wiring
  const genEduBtn = document.getElementById('generate-transition-edu-btn');
  if (genEduBtn) {
    genEduBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let html = '';
      try { html = generateTransitionEducationReport(true) || ''; } catch (e) { html = '<h1>Post-Secondary Education & Training</h1>'; }
      // Prepend original Transition heading and intro paragraph to the first (Education) section
      const firstName = document.getElementById('transition-student-name')?.value?.trim()
        || document.getElementById('firstName')?.value?.trim()
        || '[Name]';
      const pronouns = document.getElementById('transition-pronouns-select')?.value
        || document.getElementById('pronouns')?.value
        || '';
      const pronounPossessive =
        pronouns === 'Custom'
          ? (document.getElementById('transition-pro-poss')?.value?.trim() || document.getElementById('pronoun-possessive')?.value?.trim() || '[pronoun]')
          : (pronouns.split('/')?.[2] || '[pronoun]');
      const intro = '<h1>Transition Goals and Activities</h1>' +
        `<p>During previous IEP meetings, the IEP team identified goals and activities related to ${firstName}'s post-secondary education & training, employment, and independent living needs. ${firstName}'s progress towards these goals and information from ${pronounPossessive} most recent transition assessment are described below.</p>` +
        '<p><br></p><p><br></p>';
      html = intro + html;
      if (window.transitionEduEditorInstance) window.transitionEduEditorInstance.setContent(html);
      else document.getElementById('transition-edu-editor').value = html;
    });
  }
  const genEmpBtn = document.getElementById('generate-transition-emp-btn');
  if (genEmpBtn) {
    genEmpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let html = '';
      try { html = generateTransitionEmploymentReport(true) || ''; } catch (e) { html = '<h1>Post-Secondary Employment</h1>'; }
      if (window.transitionEmpEditorInstance) window.transitionEmpEditorInstance.setContent(html);
      else document.getElementById('transition-emp-editor').value = html;
    });
  }
  const genIlBtn = document.getElementById('generate-transition-il-btn');
  if (genIlBtn) {
    genIlBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let html = '';
      try { html = generateTransitionIndependentLivingReport(true) || ''; } catch (e) { html = '<h1>Independent Living</h1>'; }
      if (window.transitionIlEditorInstance) window.transitionIlEditorInstance.setContent(html);
      else document.getElementById('transition-il-editor').value = html;
    });
  }
  const genAgencyBtn = document.getElementById('generate-transition-agency-btn');
  if (genAgencyBtn) {
    genAgencyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let html = '';
      try { html = generateAgencyInvolvementReport(true) || ''; } catch (e) { html = '<h1>Agency Involvement</h1>'; }
      if (window.transitionAgencyEditorInstance) window.transitionAgencyEditorInstance.setContent(html);
      else document.getElementById('transition-agency-editor').value = html;
    });
  }

  // Copy buttons wiring
  function wireCopy(btnId, instance, fallbackId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      let html = '';
      let text = '';
      if (instance) {
        html = instance.getContent();
        text = instance.getContent({ format: 'text' });
      } else {
        const el = document.getElementById(fallbackId);
        html = el?.value || el?.innerHTML || '';
        text = el?.value || el?.innerText || '';
      }
      if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([text], { type: 'text/plain' }) });
        navigator.clipboard.write([item]).catch(() => navigator.clipboard.writeText(text));
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.left = '-9999px';
        document.body.appendChild(ta); ta.focus(); ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(ta);
      }
    });
  }
  wireCopy('copy-transition-edu', window.transitionEduEditorInstance, 'transition-edu-editor');
  wireCopy('copy-transition-emp', window.transitionEmpEditorInstance, 'transition-emp-editor');
  wireCopy('copy-transition-il', window.transitionIlEditorInstance, 'transition-il-editor');
  wireCopy('copy-transition-agency', window.transitionAgencyEditorInstance, 'transition-agency-editor');
});


