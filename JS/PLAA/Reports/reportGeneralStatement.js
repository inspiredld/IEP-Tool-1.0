// Generates and inserts the General Statement output into the output RTE
export function generateGeneralStatementOutput(returnOnly = false) {
  // Get form values
  const firstName = document.getElementById('firstName')?.value?.trim() || '';
  const school = document.getElementById('school')?.value?.trim() || '';
  const grade = document.getElementById('grade')?.value?.trim() || '';
  const gradYear = document.getElementById('gradYear')?.value?.trim() || '';
  const pronouns = document.getElementById('pronouns')?.value || '';
  const pronounPossessive =
    pronouns === 'Custom'
      ? document.getElementById('pronoun-possessive')?.value?.trim() || ''
      : pronouns.split('/')[2] || '';

  const primaryDisability = document.getElementById('primaryDisability')?.value?.trim() || '';
  const primaryDisabilitySpecify = document.getElementById('primaryDisabilitySpecify')?.value?.trim() || '';
  const secondaryDisability = document.getElementById('secondaryDisability')?.value?.trim() || '';
  const secondaryDisabilitySpecify = document.getElementById('secondaryDisabilitySpecify')?.value?.trim() || '';
  const addSecondary = document.getElementById('addSecondaryDisability')?.checked;

  // Helper to format disability with optional text
  function formatDisability(dis, specify) {
    if (!dis) return '';
    if (specify) return `${dis} (${specify})`;
    return dis;
  }

  // Capitalize first letter of possessive pronoun
  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Helper to format grade with hyphen
  function formatGrade(grade) {
    if (!grade) return '';
    return `${grade}-grade`;
  }

  // Compose output: include section heading
  let output = '<h1>General Statement</h1><p><br></p>';
  if (addSecondary && secondaryDisability) {
    // Template 2: Primary & Secondary Disability
    output += `<p>${firstName} is a ${formatGrade(grade)} student at ${school}. ${capitalize(pronounPossessive)} anticipated graduation year is ${gradYear}. ${firstName} qualifies for special education services due to a primary disability of ${formatDisability(primaryDisability, primaryDisabilitySpecify)} and a secondary disability of ${formatDisability(secondaryDisability, secondaryDisabilitySpecify)}.</p>`;
  } else {
    // Template 1: Primary Disability Only
    output += `<p>${firstName} is a ${formatGrade(grade)} student at ${school}. ${capitalize(pronounPossessive)} anticipated graduation year is ${gradYear}. ${firstName} qualifies for special education services due to a primary disability of ${formatDisability(primaryDisability, primaryDisabilitySpecify)}.</p>`;
  }

  // Get Additional Information from Quill RTE (if any)
  let additionalInfo = '';
  if (window.additionalInfoEditor) {
    const html = window.additionalInfoEditor.root.innerHTML.trim();
    // Only add if not empty and not just <p><br></p>
    if (html && html.replace(/<[^>]+>/g, '').trim() !== '') {
      additionalInfo = html;
    }
  }

  // Combine output
  if (additionalInfo) {
    output += additionalInfo;
  }

  if (returnOnly) {
    return output;
  }

  // Insert into Quill editor
  if (window.plaaEditor) {
    // Get current content
    const currentContent = window.plaaEditor.root.innerHTML;
    // Add the Assessment content
    window.plaaEditor.clipboard.dangerouslyPasteHTML(currentContent + output);
  } else {
    // Fallback: insert as HTML if Quill not loaded
    const outDiv = document.getElementById('plaa-editor');
    if (outDiv) outDiv.innerHTML += output;
  }
}
