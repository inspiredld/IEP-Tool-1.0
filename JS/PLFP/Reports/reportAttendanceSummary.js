// Attendance Summary Report (PLFP)
// Placeholder - match PLAA Reports style

export function generateAttendanceSummaryReport(data) {
  // Helper: fetch student name and pronouns with precedence: PLFP bar → PLAA → placeholders
  function getPlfpStudentInfo() {
    const namePlfp = document.getElementById('plfp-student-name')?.value?.trim();
    const proSel = document.getElementById('plfp-pronouns-select')?.value || '';
    let subjPlfp = '', objPlfp = '', possPlfp = '';
    if (proSel === 'he-him') { subjPlfp = 'he'; objPlfp = 'him'; possPlfp = 'his'; }
    else if (proSel === 'she-her') { subjPlfp = 'she'; objPlfp = 'her'; possPlfp = 'her'; }
    else if (proSel === 'they-them') { subjPlfp = 'they'; objPlfp = 'them'; possPlfp = 'their'; }
    else if (proSel === 'other') {
      subjPlfp = document.getElementById('plfp-pro-subj')?.value?.trim() || '';
      objPlfp = document.getElementById('plfp-pro-obj')?.value?.trim() || '';
      possPlfp = document.getElementById('plfp-pro-poss')?.value?.trim() || '';
    }
    // If PLFP not provided, fall back to PLAA
    const namePlaa = document.getElementById('firstName')?.value?.trim();
    const pronPlaa = document.getElementById('pronouns')?.value || '';
    let subjPlaa = '', objPlaa = '', possPlaa = '';
    if (pronPlaa === 'Custom') {
      subjPlaa = document.getElementById('pronoun-subject')?.value?.trim() || '';
      objPlaa = document.getElementById('pronoun-object')?.value?.trim() || '';
      possPlaa = document.getElementById('pronoun-possessive')?.value?.trim() || '';
    } else if (pronPlaa) {
      const parts = pronPlaa.split('/');
      subjPlaa = parts[0] || '';
      objPlaa = parts[1] || '';
      possPlaa = parts[2] || '';
    }
    const name = namePlfp || namePlaa || '[Name]';
    const subj = (subjPlfp || subjPlaa || 'They');
    const obj = (objPlfp || objPlaa || 'them');
    const poss = (possPlfp || possPlaa || '[pronoun]');
    return { name, pronounSubject: subj, pronounObject: obj, pronounPossessive: poss };
  }

  const student = getPlfpStudentInfo();
  // Get date reviewed
  const dateRaw = document.getElementById('attendance-date-reviewed')?.value;
  let formattedDate = '[DATE]';
  if (dateRaw) {
    const [year, month, day] = dateRaw.split('-');
    if (year && month && day) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      formattedDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
    } else {
      formattedDate = dateRaw;
    }
  }
  // Student name/pronouns with precedence
  const firstName = student.name;
  const pronounPossessive = student.pronounPossessive;

  // Build the Attendance Summary Output
  const attendanceSummary = `As of ${formattedDate}, a review of ${firstName}’s attendance history included the following information about ${pronounPossessive} absences, tardies, and early dismissals:`;

  // Build the Attendance Table
  let tableHtml = '<table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; font-family:Arial; font-size:10pt; margin:1rem 0 0.5rem 0; width:auto;">';
  tableHtml += '<tr>' +
    '<th style="text-align:center; font-weight:bold; width:160px;">School Year</th>' +
    '<th style="text-align:center; font-weight:bold; width:160px;">Total # Absences</th>' +
    '<th style="text-align:center; font-weight:bold; width:180px;"># Excused Absences</th>' +
    '<th style="text-align:center; font-weight:bold; width:190px;"># Unexcused Absences</th>' +
    '<th style="text-align:center; font-weight:bold; width:130px;"># Tardies</th>' +
    '<th style="text-align:center; font-weight:bold; width:160px;"># Early Dismissals</th>' +
    '</tr>';
  // Find all attendance rows
  const attendanceRows = document.querySelectorAll('.attendance-row');
  attendanceRows.forEach(row => {
    const year = row.querySelector('.attendance-year')?.value || '';
    const total = row.querySelector('.attendance-total')?.value || '';
    const excused = row.querySelector('.attendance-excused')?.value || '';
    const unexcused = row.querySelector('.attendance-unexcused')?.value || '';
    const tardies = row.querySelector('.attendance-tardies')?.value || '';
    const dismissals = row.querySelector('.attendance-dismissals')?.value || '';
    if (year || total || excused || unexcused || tardies || dismissals) {
      tableHtml += '<tr>' +
        `<td style=\"text-align:center; width:160px;\">${year}</td>` +
        `<td style=\"text-align:center; width:160px;\">${total}</td>` +
        `<td style=\"text-align:center; width:180px;\">${excused}</td>` +
        `<td style=\"text-align:center; width:190px;\">${unexcused}</td>` +
        `<td style=\"text-align:center; width:130px;\">${tardies}</td>` +
        `<td style=\"text-align:center; width:160px;\">${dismissals}</td>` +
        '</tr>';
    }
  });
  tableHtml += '</table>';

  // District policy text
  let policyText = 'South Middleton School Districts allows a maximum of 10 days per school year of “cumulative lawful absences” verified by parental notification. Absences beyond the 10 days require an excuse from a “license practitioner of the healing arts.” ';

  // Attendance checkbox-dependent text
  const meets = document.getElementById('attendance-desc-meets')?.checked;
  const approaching = document.getElementById('attendance-desc-approaching')?.checked;
  const exceeds = document.getElementById('attendance-desc-exceeds')?.checked;
  const other = document.getElementById('attendance-desc-other')?.checked;
  const otherText = document.getElementById('attendance-desc-other-input')?.value?.trim();
  let templateText = '';
  if (meets) templateText += `${firstName}'s attendance falls within the limits as permitted by district policy.`;
  if (approaching) templateText += `${templateText ? ' ' : ''}${firstName}'s attendance is approaching the limits as permitted by district policy.`;
  if (exceeds) templateText += `${templateText ? ' ' : ''}${firstName}'s attendance exceeds the limits permitted by district policy.`;
  let details = templateText;
  if (other && otherText) {
    details += `<br>${otherText}`;
  }

  return `
    <h1>Attendance Summary</h1>
    <p>${attendanceSummary}</p>
    ${tableHtml}
    <p style="margin-top: 0.5rem;">${policyText} ${templateText}</p>
    ${other && otherText ? `<p style="margin-top: 0.5rem;">${otherText}</p>` : ''}
    <div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div><br></div>
  `;
} 