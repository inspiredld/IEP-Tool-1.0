export function generateTransitionEmploymentReport(returnOnly = false) {
  const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';
  // Progress section (mirrors Education & Training but using Employment inputs)
  const goalText = document.getElementById('transition-emp-previous-goal')?.value?.trim() || '[insert goal]';
  const progressItems = Array.from(document.querySelectorAll('#transition-emp-progress-list .transition-progress-row textarea')).map(t => t.value?.trim()).filter(Boolean);
  const otherHtmlRaw = document.querySelector('#transition-emp-other-input-quill .ql-editor')?.innerHTML?.trim();
  const otherHtml = otherHtmlRaw && otherHtmlRaw !== '<p><br></p>' ? otherHtmlRaw : '';

  let html = '<h2>Post-Secondary Employment</h2>';
  html += '<p><br></p>';
  html += '<h3>Progress Towards Previous Goal</h3>';
  html += `<p>In the previous IEP, ${firstName} had a goal to ${goalText}. ${firstName} worked towards this goal by:</p>`;
  html += progressItems.length ? ('<ul>' + progressItems.map(i => `<li>${i}</li>`).join('') + '</ul>') : '<ul></ul>';
  if (otherHtml) html += otherHtml;
  html += '<p><br></p><p><br></p>';
  html += '<h3>Updated Information</h3>';

  // Updated Information: Career Clues About ME
  const careerCluesChecked = document.querySelector('input.emp-updated-toggle[data-target="empCareerCluesCard"]')?.checked;
  if (careerCluesChecked) {
    const dateRaw = document.getElementById('emp-careerclues-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#emp-careerclues-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += '<p><br></p>';
    html += '<h4>Career Clues About ME</h4>';
    html += `<p>${firstName} completed the Career Clues About Me Survey on ${dateFormatted}. This survey is designed to help students explore their career preferences, strengths, and interests. By responding to a series of questions, students gain insight into potential career paths that align with their skills and personal interests. The information gathered from this survey can be used to support transition planning and career goal development. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
  }

  // Updated Information: O*NET Interest Profiler
  const citeChecked = document.querySelector('input.emp-updated-toggle[data-target="empCiteCard"]')?.checked;
  if (citeChecked) {
    const dateRaw = document.getElementById('emp-cite-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#emp-cite-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += '<p><br></p>';
    html += '<h4>O*NET Interest Profiler</h4>';
    html += `<p>${firstName} completed the O*NET Interest Profiler on ${dateFormatted}. This assessment helps students identify their career interests by measuring preferences across six domains: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. The results provide insight into potential career pathways that align with the student’s interests and can be used to guide transition and career planning. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
  }

  // Updated Information: Transition Planning Inventory (Employment)
  const tpiChecked = document.querySelector('input.emp-updated-toggle[data-target="empTpiCard"]')?.checked;
  if (tpiChecked) {
    const dateRaw = document.getElementById('emp-tpi-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#emp-tpi-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += '<p><br></p>';
    html += '<h4>Transition Planning Inventory (Employment)</h4>';
    html += `<p>${firstName} completed the Employment section of the Transition Planning Inventory (TPI) on ${dateFormatted}. This section gathers information about the student’s awareness of jobs, ability to identify employment options that match personal interests and abilities, and knowledge of the skills and habits needed to obtain and maintain a job. The results provide insight into the student’s readiness for future employment and help identify areas where additional instruction or support may be needed. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
  }

  // Updated Information: UCanGo2
  const ucanChecked = document.querySelector('input.emp-updated-toggle[data-target="empUcanGo2Card"]')?.checked;
  if (ucanChecked) {
    const dateRaw = document.getElementById('emp-ucango2-date')?.value || '';
    const dateFormatted = formatDateMDY(dateRaw) || '[DATE]';
    const summaryHtmlRaw = document.querySelector('#emp-ucango2-summary-quill .ql-editor')?.innerHTML?.trim();
    const summaryHtml = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>' ? summaryHtmlRaw : '';
    html += '<p><br></p>';
    html += '<h4>UCanGo2 Career Interest Survey</h4>';
    html += `<p>${firstName} completed the UCanGo2 Career Interest Survey on ${dateFormatted}. This survey is designed to help students explore potential career paths by identifying activities and interests that align with specific career clusters. Students respond to a series of paired items, and their choices are tallied to highlight top areas of career interest. The information gathered from this survey can be used to guide career exploration, planning, and goal development. The results are as follows:</p>`;
    if (summaryHtml) html += summaryHtml;
  }

  // Summary of Past and Present Goals
  const empSame = document.getElementById('transition-emp-goal-same')?.checked || false;
  const empChanged = document.getElementById('transition-emp-goal-changed')?.checked || false;
  if (empSame || empChanged) {
    html += '<p><br></p><p><br></p>';
    html += '<h3>Summary of Past and Present Goals</h3>';
    if (empSame) {
      html += '<p>The results of assessments and conversations with the student this year indicate that their post-secondary goals and plans remain the same as last year.</p>';
    } else if (empChanged) {
      const prev = (document.getElementById('transition-emp-goal-change-prev')?.value || '').trim() || '[previous goal/plans]';
      const now = (document.getElementById('transition-emp-goal-change-new')?.value || '').trim() || '[new goal/plans]';
      html += `<p>While ${firstName} indicated interest in ${prev} last year, assessments and conversations with the student this year indicate that they are now interested in ${now}.</p>`;
    }
  }
  if (returnOnly) return html;
  const out = document.getElementById('transition-editor');
  if (out) out.innerHTML += html;
  return html;
}

function formatDateMDY(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const mi = parseInt(m, 10); const di = parseInt(d, 10);
  if (!isNaN(mi) && !isNaN(di)) return `${monthNames[mi - 1]} ${di}, ${y}`;
  return dateStr;
}


