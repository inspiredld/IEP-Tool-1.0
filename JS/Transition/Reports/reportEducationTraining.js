export function generateTransitionEducationReport(returnOnly = false) {
  const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';
  const goalText = document.getElementById('transition-edu-previous-goal')?.value?.trim() || '[insert goal]';
  const progressItems = Array.from(document.querySelectorAll('#transition-edu-progress-list .transition-progress-row textarea'))
    .map(t => t.value?.trim())
    .filter(v => !!v);
  const otherHtmlRaw = document.querySelector('#transition-edu-other-input-quill .ql-editor')?.innerHTML?.trim();
  const otherHtml = otherHtmlRaw && otherHtmlRaw !== '<p><br></p>' ? otherHtmlRaw : '';

  let html = '<h2>Post-Secondary Education & Training</h2>';
  html += '<p><br></p>';
  html += '<h3>Progress Towards Previous Goal</h3>';
  html += `<p>In the previous IEP, ${firstName} had a goal to ${goalText}. ${firstName} worked towards this goal by:</p>`;
  if (progressItems.length) {
    html += '<ul>' + progressItems.map(item => `<li>${item}</li>`).join('') + '</ul>';
  } else {
    html += '<ul></ul>';
  }
  if (otherHtml) {
    html += otherHtml;
  }
  html += '<p><br></p><p><br></p>';
  html += '<h3>Updated Information</h3>';

  // === Updated Information: Self-Assessment of Modality Strengths ===
  let addedUpdatedSection = false;
  const selfAssessmentChecked = document.querySelector('input.edu-updated-toggle[data-target="eduSelfModalityCard"]')?.checked;
  if (selfAssessmentChecked) {
    const dateRaw = document.getElementById('edu-self-modality-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#edu-self-modality-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
    html += '<h4>Self-Assessment of Modality Strengths</h4>';
    html += `<p>${firstName} completed the Self-Assessment of Modality Strengths on ${dateFormatted}. This assessment helps students identify their preferred learning styles, including: visual, auditory, and kinesthetic. By understanding their strengths, students can tailor their study habits and environments to increase learning efficiency and retention. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
    addedUpdatedSection = true;
  }

  // === Updated Information: O*NET Interest Profiler ===
  const citeChecked = document.querySelector('input.edu-updated-toggle[data-target="eduCiteCard"]')?.checked;
  if (citeChecked) {
    const dateRaw = document.getElementById('edu-cite-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#edu-cite-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
    html += '<h4>O*NET Interest Profiler</h4>';
    html += `<p>${firstName} completed the O*NET Interest Profiler on ${dateFormatted}. This assessment helps students identify their career interests by measuring preferences across six domains: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. The results provide insight into potential career pathways that align with the student’s interests and can be used to guide transition and career planning. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
    addedUpdatedSection = true;
  }

  // === Updated Information: Transition Planning Inventory (Education & Training) ===
  const tpiChecked = document.querySelector('input.edu-updated-toggle[data-target="eduTpiCard"]')?.checked;
  if (tpiChecked) {
    const dateRaw = document.getElementById('edu-tpi-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#edu-tpi-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
    html += '<h4>Transition Planning Inventory (Education & Training)</h4>';
    html += `<p>${firstName} completed the Transition Planning Inventory (TPI) – Student Form on ${dateFormatted}. The TPI includes questions related to post-secondary education and training, and provides information about current skills, needs, and preferences in relation to future learning opportunities, including entry into community training programs, vocational/technical schools, and college or university programs. The information gathered from this assessment helps identify the student’s readiness for additional education or training after high school, as well as the supports that may assist with successful transition. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
    addedUpdatedSection = true;
  }

  // === Updated Information: High School to College Transition Questionnaire ===
  const hsCollegeChecked = document.querySelector('input.edu-updated-toggle[data-target="eduHsToCollegeCard"]')?.checked;
  if (hsCollegeChecked) {
    const dateRaw = document.getElementById('edu-hscollege-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#edu-hscollege-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
    html += '<h4>High School to College Transition Questionnaire</h4>';
    html += `<p>${firstName} completed the High School to College Transition Questionnaire on ${dateFormatted}. This assessment examines readiness for post-secondary education, with emphasis on general preparation, academic preparation, advocacy/self-determination, academic adaptations, financial considerations, and family support related to college success. It provides information about a student’s knowledge of the college application process, confidence in academic preparation, awareness of available supports, and self-advocacy skills needed to access accommodations. The information gathered from this assessment can help identify both strengths and areas where additional instruction or support may be needed to promote a successful transition to higher education. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
    addedUpdatedSection = true;
  }

  // === Updated Information: Learning Support Services and Programs ===
  const lsChecked = document.querySelector('input.edu-updated-toggle[data-target="eduLearningSupportCard"]')?.checked;
  if (lsChecked) {
    const dateRaw = document.getElementById('edu-learningsupport-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#edu-learningsupport-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
    html += '<h4>Learning Support Services and Programs</h4>';
    html += `<p>${firstName} completed the Learning Support Services and Programs Checklist on ${dateFormatted}. This tool is designed to help students and families explore the types of support services that may be available at colleges or training programs. It focuses on the availability of accommodations, tutoring, disability services staff, documentation requirements, and policies related to self-advocacy and support. The information gathered from this checklist assists in preparing students to evaluate and compare post-secondary institutions based on the accessibility of their services, and in identifying questions to ask when planning for continued education. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
    addedUpdatedSection = true;
  }

  // === Updated Information: Other Assessment (dynamic) ===
  const otherChecked = document.querySelector('input.edu-updated-toggle[data-target="eduOtherAssessmentCard"]')?.checked;
  if (otherChecked) {
    const assessName = (document.getElementById('edu-other-assessment-name')?.value || '').trim() || 'Other Assessment';
    const dateRaw = document.getElementById('edu-other-assessment-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const descHtmlRaw = document.querySelector('#edu-other-assessment-desc-quill .ql-editor')?.innerHTML?.trim();
    const descHtml = descHtmlRaw && descHtmlRaw !== '<p><br></p>' ? descHtmlRaw : '';
    const summaryHtmlRaw = document.querySelector('#edu-other-assessment-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    const namePossessive = firstName ? (firstName.endsWith('s') ? `${firstName}'` : `${firstName}'s`) : "[Name]'s";
    html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
    html += `<h4>${assessName}</h4>`;
    html += `<p>${firstName} completed the ${assessName} on ${dateFormatted}. ${descHtml ? descHtml : ''} A summary of ${namePossessive} results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
    addedUpdatedSection = true;
  }

  // === Summary of Past and Present Goals ===
  const eduSame = document.getElementById('transition-edu-goal-same')?.checked || false;
  const eduChanged = document.getElementById('transition-edu-goal-changed')?.checked || false;
  if (eduSame || eduChanged) {
    html += '<p><br></p><p><br></p>';
    html += '<h3>Summary of Past and Present Goals</h3>';
    if (eduSame) {
      html += '<p>The results of assessments and conversations with the student this year indicate that their post-secondary goals and plans remain the same as last year.</p>';
    } else if (eduChanged) {
      const prevInterest = (document.getElementById('transition-edu-goal-change-prev')?.value || '').trim() || '[previous goal/plans]';
      const newInterest = (document.getElementById('transition-edu-goal-change-new')?.value || '').trim() || '[new goal/plans]';
      html += `<p>While ${firstName} indicated interest in ${prevInterest} last year, assessments and conversations with the student this year indicate that they are now interested in ${newInterest}.</p>`;
    }
  }
  if (returnOnly) return html;
  const out = document.getElementById('transition-editor');
  if (out) out.innerHTML += html;
  return html;
}

// Helper to format yyyy-mm-dd -> Month Day, Year
function formatDateMDY(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const mi = parseInt(m, 10);
  const di = parseInt(d, 10);
  if (!isNaN(mi) && !isNaN(di)) return `${monthNames[mi - 1]} ${di}, ${y}`;
  return dateStr;
}


