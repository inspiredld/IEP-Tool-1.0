// Attendance Summary Report (PLFP)
// Placeholder - match PLAA Reports style

export function generateAttendanceSummaryReport(data) {
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
  // Get student name and pronoun from PLAA section
  const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';
  const pronouns = document.getElementById('pronouns')?.value || '';
  const pronounPossessive =
    pronouns === 'Custom'
      ? document.getElementById('pronoun-possessive')?.value?.trim() || '[pronoun]'
      : pronouns.split('/')[2] || '[pronoun]';

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