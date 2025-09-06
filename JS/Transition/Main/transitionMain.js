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
  const edu = document.getElementById('transition-education');
  if (edu) createTransitionEducationForm(edu);

  const emp = document.getElementById('transition-employment');
  if (emp) createTransitionEmploymentForm(emp);

  const ind = document.getElementById('transition-independent-living');
  if (ind) createTransitionIndependentLivingForm(ind);

  // Agency Involvement
  const agency = document.getElementById('transition-agency-involvement');
  if (agency) createTransitionAgencyForm(agency);

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

  const genBtn = document.getElementById('generate-transition-report-btn');
  const outDiv = document.getElementById('transition-editor');
  if (genBtn && outDiv) {
    genBtn.addEventListener('click', () => {
      // Pull student name and possessive pronoun from PLAA inputs
      const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';
      const pronouns = document.getElementById('pronouns')?.value || '';
      const pronounPossessive =
        pronouns === 'Custom'
          ? (document.getElementById('pronoun-possessive')?.value?.trim() || '[pronoun]')
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
});


