export function generateTransitionIndependentLivingReport(returnOnly = false) {
  function getTransStudentInfo() {
    const transName = document.getElementById('transition-student-name')?.value?.trim();
    const plaaName = document.getElementById('firstName')?.value?.trim();
    const name = transName || plaaName || '[Name]';
    const transPron = document.getElementById('transition-pronouns-select')?.value || '';
    let subj = '', poss = '';
    if (transPron === 'he-him') { subj = 'he'; poss = 'his'; }
    else if (transPron === 'she-her') { subj = 'she'; poss = 'her'; }
    else if (transPron === 'they-them') { subj = 'they'; poss = 'their'; }
    else if (transPron === 'other') {
      subj = (document.getElementById('transition-pro-subj')?.value?.trim() || 'they');
      poss = (document.getElementById('transition-pro-poss')?.value?.trim() || 'their');
    }
    if (!subj || !poss) {
      const plaaPron = document.getElementById('pronouns')?.value || '';
      if (plaaPron === 'Custom') {
        subj = subj || (document.getElementById('pronoun-subject')?.value?.trim() || 'they');
        poss = poss || (document.getElementById('pronoun-possessive')?.value?.trim() || 'their');
      } else if (plaaPron.includes('/')) {
        const parts = plaaPron.split('/');
        subj = subj || (parts[0] || 'they');
        poss = poss || (parts[2] || 'their');
      }
    }
    return { name, pronounSubjectLower: (subj || 'they'), pronounPossessiveLower: (poss || 'their') };
  }
  const student = getTransStudentInfo();
  const firstName = student.name;
  const namePossessive = firstName ? (firstName.endsWith('s') ? `${firstName}'` : `${firstName}'s`) : "[Name]'s";

  // Always start with section heading
  let html = '<h2>Independent Living</h2>';
  html += '<p><br></p>';

  const recYes = document.getElementById('transition-ind-recommend-yes')?.checked || false;
  const recNo = document.getElementById('transition-ind-recommend-no')?.checked || false;

  // Gather progress inputs
  const goalText = document.getElementById('transition-ind-previous-goal')?.value?.trim() || '';
  const progressItems = Array.from(document.querySelectorAll('#transition-ind-progress-list .transition-progress-row textarea'))
    .map(t => t.value?.trim()).filter(Boolean);
  const otherHtmlRaw = document.querySelector('#transition-ind-other-input-quill .ql-editor')?.innerHTML?.trim();
  const otherHtml = otherHtmlRaw && otherHtmlRaw !== '<p><br></p>' ? otherHtmlRaw : '';
  const hasProgressContent = !!goalText || progressItems.length > 0 || !!otherHtml;

  // Updated info selections
  const basicChecked = document.querySelector('input.ind-updated-toggle[data-target="indBasicSurvivalCard"]')?.checked;
  const ansellChecked = document.querySelector('input.ind-updated-toggle[data-target="indAnsellCard"]')?.checked;
  const tpiLifeChecked = document.querySelector('input.ind-updated-toggle[data-target="indTpiLifeCard"]')?.checked;
  const bshsChecked = document.querySelector('input.ind-updated-toggle[data-target="indBshsCard"]')?.checked;
  const otherAssessChecked = document.querySelector('input.ind-updated-toggle[data-target="indOtherAssessmentCard"]')?.checked;
  const anyUpdatedSelected = !!(basicChecked || ansellChecked || tpiLifeChecked || bshsChecked || otherAssessChecked);

  if (recYes) {
    // Progress Towards Previous Goal
    html += '<h3>Progress Towards Previous Goal</h3>';
    html += `<p>In the previous IEP, ${firstName} had a goal to ${goalText || '[insert goal]'}. ${firstName} worked towards this goal by:</p>`;
    html += progressItems.length ? ('<ul>' + progressItems.map(i => `<li>${i}</li>`).join('') + '</ul>') : '<ul></ul>';
    if (otherHtml) html += otherHtml;

    // Updated Information
    html += '<p><br></p><p><br></p>';
    html += '<h3>Updated Information</h3>';
    let addedUpdatedSection = false;
    // Basic Survival Skills Assessment
    if (basicChecked) {
      const dateRaw = document.getElementById('ind-basic-date')?.value || '';
      const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
      const summaryHtmlRaw = document.querySelector('#ind-basic-summary-quill .ql-editor')?.innerHTML?.trim();
      const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
      html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
      html += '<h4>Basic Survival Skills Assessment</h4>';
      html += `<p>${firstName} completed the Basic Survival Skills Checklist on ${dateFormatted}. This assessment asks students to identify their skills across several functional areas, including health care, daily living, social and recreational skills, and time management. The information gathered provides insight into the student’s current level of independence and highlights areas where additional support or instruction may be beneficial. The results are as follows:</p>`;
      if (summaryHtml) html += summaryHtml;
      addedUpdatedSection = true;
    }
    // Ansell-Casey
    if (ansellChecked) {
      const dateRaw = document.getElementById('ind-ansell-date')?.value || '';
      const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
      const summaryHtmlRaw = document.querySelector('#ind-ansell-summary-quill .ql-editor')?.innerHTML?.trim();
      const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
      html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
      html += '<h4>Ansell-Casey Life Skills Assessment</h4>';
      html += `<p>${firstName} completed the Ansell-Casey Life Skills Assessment on ${dateFormatted}. This assessment provides information related to independent living skills, with a focus on areas such as daily living, self-care, relationships, work and study habits, and money management. The information gathered offers insight into the student’s readiness for increased independence and highlights areas where further support or instruction may be beneficial. The results are as follows:</p>`;
      if (summaryHtml) html += summaryHtml;
      addedUpdatedSection = true;
    }
    // TPI Life Skills
    if (tpiLifeChecked) {
      const dateRaw = document.getElementById('ind-tpi-life-date')?.value || '';
      const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
      const summaryHtmlRaw = document.querySelector('#ind-tpi-life-summary-quill .ql-editor')?.innerHTML?.trim();
      const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
      html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
      html += '<h4>Transition Planning Inventory (Life Skills)</h4>';
      html += `<p>${firstName} completed the Transition Planning Inventory (TPI) on ${dateFormatted}. This assessment included questions that are used to address students' current skills and needs in daily living, leisure activities, community participation, health, self-determination, communication, and interpersonal relationships. The information gathered from these sections provides insight into readiness for adult living and highlights areas where instruction, practice, or support may be needed to increase independence. The results are as follows:</p>`;
      if (summaryHtml) html += summaryHtml;
      addedUpdatedSection = true;
    }
    // BSHS
    if (bshsChecked) {
      const dateRaw = document.getElementById('ind-bshs-date')?.value || '';
      const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
      const summaryHtmlRaw = document.querySelector('#ind-bshs-summary-quill .ql-editor')?.innerHTML?.trim();
      const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
      html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
      html += '<h4>BSHS Independent Living Assessment</h4>';
      html += `<p>${firstName} completed the Independent Living Assessment on ${dateFormatted}. This assessment is designed to evaluate a student’s skills and competencies across a variety of daily living domains, including personal appearance and hygiene, housing and home care, kitchen and food management, health and safety, money management, transportation, and use of community resources. The information gathered provides insight into the student’s current level of independence, as well as areas where additional instruction, practice, or support may be needed to promote successful adult living. The results are as follows:</p>`;
      if (summaryHtml) html += summaryHtml;
      addedUpdatedSection = true;
    }
    // Other Assessment (dynamic)
    if (otherAssessChecked) {
      const assessName = (document.getElementById('ind-other-assessment-name')?.value || '').trim() || 'Other Assessment';
      const dateRaw = document.getElementById('ind-other-assessment-date')?.value || '';
      const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
      const descHtmlRaw = document.querySelector('#ind-other-assessment-desc-quill .ql-editor')?.innerHTML?.trim();
      const descHtml = descHtmlRaw && descHtmlRaw !== '<p><br></p>' ? descHtmlRaw : '';
      const summaryHtmlRaw = document.querySelector('#ind-other-assessment-summary-quill .ql-editor')?.innerHTML?.trim();
      const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
      html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
      html += `<h4>${assessName}</h4>`;
      html += `<p>${firstName} completed the ${assessName} on ${dateFormatted}. ${descHtml ? descHtml : ''} A summary of ${namePossessive} results are as follows:</p>`;
      if (summaryHtml) html += summaryHtml;
      addedUpdatedSection = true;
    }

    // Summary of Past and Present Goals
    const indSame = document.getElementById('transition-ind-goal-same')?.checked || false;
    const indChanged = document.getElementById('transition-ind-goal-changed')?.checked || false;
    html += '<p><br></p><p><br></p>';
    html += '<h3>Summary of Past and Present Goals</h3>';
    if (indSame) {
      html += `<p>The results of assessments and conversations with the student this year indicate that ${student.pronounPossessiveLower} post-secondary goals and plans remain the same as last year.</p>`;
    } else if (indChanged) {
      const prev = (document.getElementById('transition-ind-goal-change-prev')?.value || '').trim() || '[previous goal/plans]';
      const now = (document.getElementById('transition-ind-goal-change-new')?.value || '').trim() || '[new goal/plans]';
      html += `<p>While ${firstName} indicated interest in ${prev} last year, assessments and conversations with the student this year indicate that ${student.pronounSubjectLower} are now interested in ${now}.</p>`;
    }

  } else if (recNo) {
    // Methods sentence
    const methods = [];
    if (document.getElementById('ind-assess-transition')?.checked) methods.push('transition assessments');
    if (document.getElementById('ind-assess-teacher')?.checked) methods.push('teacher observation');
    if (document.getElementById('ind-assess-student')?.checked) methods.push('student input');
    if (document.getElementById('ind-assess-parent')?.checked) methods.push('parent input');
    if (document.getElementById('ind-assess-other')?.checked) {
      const otherText = (document.getElementById('ind-assess-other-desc')?.value || '').trim();
      methods.push(otherText || 'other data');
    }
    const methodsText = formatListEnglish(methods) || '[methods]';
    html += `<p>The IEP Team reviewed ${namePossessive} independent living skills through ${methodsText}.</p>`;

    // Optional transition assessment summary and concluding sentence placement
    const transSelected = !!document.getElementById('ind-assess-transition')?.checked;
    const transDescHtmlRaw = document.querySelector('#ind-assess-transition-desc-quill .ql-editor')?.innerHTML?.trim();
    const transDescHtml = transDescHtmlRaw && transDescHtmlRaw !== '<p><br></p>' ? transDescHtmlRaw : '';
    if (transSelected && transDescHtml) {
      html += '<p>A summary of the transition assessment(s) is described below:</p>';
      html += transDescHtml;
      html += `<p>This information indicates that ${firstName} demonstrates age-appropriate daily living and community participation skills. Based on this review, the team determined that an independent living goal is not required at this time.</p>`;
    } else {
      html += `<p>This information indicates that ${firstName} demonstrates age-appropriate daily living and community participation skills. Based on this review, the team determined that an independent living goal is not required at this time.</p>`;
    }

    // Conditionally include Progress
    if (hasProgressContent) {
      html += '<p><br></p><p><br></p>';
      html += '<h3>Progress Towards Previous Goal</h3>';
      html += `<p>In the previous IEP, ${firstName} had a goal to ${goalText || '[insert goal]'}. ${firstName} worked towards this goal by:</p>`;
      html += progressItems.length ? ('<ul>' + progressItems.map(i => `<li>${i}</li>`).join('') + '</ul>') : '<ul></ul>';
      if (otherHtml) html += otherHtml;
    }

    // Conditionally include Updated Information
    if (anyUpdatedSelected) {
      html += '<p><br></p><p><br></p>';
      html += '<h3>Updated Information</h3>';
      let addedUpdatedSection = false;
      if (basicChecked) {
        const dateRaw = document.getElementById('ind-basic-date')?.value || '';
        const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
        const summaryHtmlRaw = document.querySelector('#ind-basic-summary-quill .ql-editor')?.innerHTML?.trim();
        const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
        html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
        html += '<h4>Basic Survival Skills Assessment</h4>';
        html += `<p>${firstName} completed the Basic Survival Skills Checklist on ${dateFormatted}. This assessment asks students to identify their skills across several functional areas, including health care, daily living, social and recreational skills, and time management. The information gathered provides insight into the student’s current level of independence and highlights areas where additional support or instruction may be beneficial. The results are as follows:</p>`;
        if (summaryHtml) html += summaryHtml;
        addedUpdatedSection = true;
      }
      if (ansellChecked) {
        const dateRaw = document.getElementById('ind-ansell-date')?.value || '';
        const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
        const summaryHtmlRaw = document.querySelector('#ind-ansell-summary-quill .ql-editor')?.innerHTML?.trim();
        const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
        html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
        html += '<h4>Ansell-Casey Life Skills Assessment</h4>';
        html += `<p>${firstName} completed the Ansell-Casey Life Skills Assessment on ${dateFormatted}. This assessment provides information related to independent living skills, with a focus on areas such as daily living, self-care, relationships, work and study habits, and money management. The information gathered offers insight into the student’s readiness for increased independence and highlights areas where further support or instruction may be beneficial. The results are as follows:</p>`;
        if (summaryHtml) html += summaryHtml;
        addedUpdatedSection = true;
      }
      if (tpiLifeChecked) {
        const dateRaw = document.getElementById('ind-tpi-life-date')?.value || '';
        const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
        const summaryHtmlRaw = document.querySelector('#ind-tpi-life-summary-quill .ql-editor')?.innerHTML?.trim();
        const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
        html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
        html += '<h4>Transition Planning Inventory (Life Skills)</h4>';
        html += `<p>${firstName} completed the Transition Planning Inventory (TPI) on ${dateFormatted}. This assessment included questions that are used to address students' current skills and needs in daily living, leisure activities, community participation, health, self-determination, communication, and interpersonal relationships. The information gathered from these sections provides insight into readiness for adult living and highlights areas where instruction, practice, or support may be needed to increase independence. The results are as follows:</p>`;
        if (summaryHtml) html += summaryHtml;
        addedUpdatedSection = true;
      }
      if (bshsChecked) {
        const dateRaw = document.getElementById('ind-bshs-date')?.value || '';
        const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
        const summaryHtmlRaw = document.querySelector('#ind-bshs-summary-quill .ql-editor')?.innerHTML?.trim();
        const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
        html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
        html += '<h4>BSHS Independent Living Assessment</h4>';
        html += `<p>${firstName} completed the Independent Living Assessment on ${dateFormatted}. This assessment is designed to evaluate a student’s skills and competencies across a variety of daily living domains, including personal appearance and hygiene, housing and home care, kitchen and food management, health and safety, money management, transportation, and use of community resources. The information gathered provides insight into the student’s current level of independence, as well as areas where additional instruction, practice, or support may be needed to promote successful adult living. The results are as follows:</p>`;
        if (summaryHtml) html += summaryHtml;
        addedUpdatedSection = true;
      }
      if (otherAssessChecked) {
        const assessName = (document.getElementById('ind-other-assessment-name')?.value || '').trim() || 'Other Assessment';
        const dateRaw = document.getElementById('ind-other-assessment-date')?.value || '';
        const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
        const descHtmlRaw = document.querySelector('#ind-other-assessment-desc-quill .ql-editor')?.innerHTML?.trim();
        const descHtml = descHtmlRaw && descHtmlRaw !== '<p><br></p>' ? descHtmlRaw : '';
        const summaryHtmlRaw = document.querySelector('#ind-other-assessment-summary-quill .ql-editor')?.innerHTML?.trim();
        const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
        html += addedUpdatedSection ? '<p><br></p><p><br></p>' : '<p><br></p>';
        html += `<h4>${assessName}</h4>`;
        html += `<p>${firstName} completed the ${assessName} on ${dateFormatted}. ${descHtml ? descHtml : ''} A summary of ${namePossessive} results are as follows:</p>`;
        if (summaryHtml) html += summaryHtml;
        addedUpdatedSection = true;
      }
    }

    // Conditionally include Summary
    const indSame2 = document.getElementById('transition-ind-goal-same')?.checked || false;
    const indChanged2 = document.getElementById('transition-ind-goal-changed')?.checked || false;
    if (indSame2 || indChanged2) {
      html += '<p><br></p><p><br></p>';
      html += '<h3>Summary of Past and Present Goals</h3>';
      if (indSame2) {
        html += '<p>The results of assessments and conversations with the student this year indicate that their post-secondary goals and plans remain the same as last year.</p>';
      } else if (indChanged2) {
        const prev = (document.getElementById('transition-ind-goal-change-prev')?.value || '').trim() || '[previous goal/plans]';
        const now = (document.getElementById('transition-ind-goal-change-new')?.value || '').trim() || '[new goal/plans]';
        html += `<p>While ${firstName} indicated interest in ${prev} last year, assessments and conversations with the student this year indicate that they are now interested in ${now}.</p>`;
      }
    }
  }

  if (returnOnly) return html;
  const out = document.getElementById('transition-editor');
  if (out) out.innerHTML += html;
  return html;
}

function formatListEnglish(items) {
  if (!items || !items.length) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return items.slice(0, -1).join(', ') + ', and ' + items[items.length - 1];
}

function formatDateMDY(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const mi = parseInt(m, 10);
  const di = parseInt(d, 10);
  if (!isNaN(mi) && !isNaN(di)) return `${monthNames[mi - 1]} ${di}, ${y}`;
  return dateStr;
}


