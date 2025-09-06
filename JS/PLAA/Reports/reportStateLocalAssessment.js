// Generates and inserts the State and Local Assessment output into the output RTE
export function generateStateLocalAssessmentOutput(returnOnly = false) {
  // Helper function to process assessment rows
  const processAssessmentRows = (section) => {
    const rows = section.querySelectorAll('.assessment-input-row');
    let assessments = [];
    rows.forEach(row => {
      const text = row.querySelector('.assessment-textarea')?.value?.trim();
      if (text) {
        assessments.push(text);
      }
    });
    return assessments;
  };

  // Get all assessment data
  const stateSection = document.querySelector('.state-assessment-section');
  const localSection = document.querySelector('.local-assessment-section');
  const summaryText = document.getElementById('assessmentSummaryBox')?.value?.trim();

  // Get student name and possessive pronoun (match general statement logic)
  const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';
  const pronouns = document.getElementById('pronouns')?.value || '';
  const pronounPossessive =
    pronouns === 'Custom'
      ? document.getElementById('pronoun-possessive')?.value?.trim() || '[pronoun]'
      : pronouns.split('/')[2] || '[pronoun]';

  const stateAssessments = stateSection ? processAssessmentRows(stateSection) : [];
  const localAssessments = localSection ? processAssessmentRows(localSection) : [];

  // Helper to check if a checkbox is checked
  const isChecked = id => document.getElementById(id)?.checked;

  // Section definitions in order
  const sectionDefs = [
    { id: 'pssaCheckbox', name: 'PSSA', data: stateAssessments, key: 'State Assessments:' },
    { id: 'keystonesCheckbox', name: 'Keystones', data: localAssessments, key: 'Local Assessments:' },
    { id: 'pasaCheckbox', name: 'PASA', data: [], key: 'PASA Assessments:' },
    { id: 'cbmsCheckbox', name: 'Curriculum-Based Assessments', data: [], key: 'CBMs:' },
    { id: 'otherAssessmentsCheckbox', name: 'Other Assessments', data: [], key: 'Other Assessments:' }
  ];

  // Start building the output HTML
  let output = '';

  // Add four blank lines before the section
  output += '<p><br></p><p><br></p><p><br></p><p><br></p>';

  // Add the section heading
  output += '<h1 style="font-family: Arial; font-size: 14pt; font-weight: bold; text-decoration: underline;">Summary of State and Local Assessments</h1>';

  // Add the introductory paragraph
  output += `<p style="font-family: Arial; font-size: 10pt;">A review of ${firstName}'s academic records included ${pronounPossessive} state and/or local assessment, which may be used to monitor academic progress and guide instruction.</p>`;

  // Add style block for consistent sizing if needed
  output += '<style>\n';
  output += 'h1 { font-family: Arial; font-size: 14pt !important; font-weight: bold; text-decoration: underline; }\n';
  output += 'h2 { font-family: Arial; font-size: 12pt !important; font-weight: bold; }\n';
  output += 'p { font-family: Arial; font-size: 10pt !important; }\n';
  output += '</style>\n';

  // Output each selected section in order
  sectionDefs.forEach(section => {
    if (isChecked(section.id)) {
      output += '<p><br></p><p><br></p>';
      output += `<h2 style="font-family: Arial; font-size: 12pt; font-weight: bold;">${section.name}</h2>`;
      // Add PSSA description if this is the PSSA section
      if (section.id === 'pssaCheckbox') {
        output += `<p style="font-family: Arial; font-size: 10pt;">The Pennsylvania System of School Assessment (PSSA) is a statewide standardized test administered to students in grades 3–8 to measure proficiency in English Language Arts, Mathematics, and Science. A summary of ${firstName}'s results is reported below.</p>`;
        // Add dynamic PSSA table
        const pssaRows = Array.from(document.querySelectorAll('#pssaTestContainer .pssa-input-row'));
        if (pssaRows.length > 0) {
          output += `<table style="font-family: Arial; font-size: 10pt; border-collapse: collapse; margin-top: 10px; margin-bottom: 10px; width: auto;">
            <thead>
              <tr>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Year</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Subject</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Score</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Level</th>
              </tr>
            </thead>
            <tbody>`;
          pssaRows.forEach(row => {
            const selects = row.querySelectorAll('select');
            const inputs = row.querySelectorAll('input[type="text"]');
            const year = selects[0]?.value?.trim() || '-';
            const subject = selects[1]?.value?.trim() || '-';
            const score = inputs[0]?.value?.trim() || '-';
            const level = selects[2]?.value?.trim() || '-';
            output += `<tr>`;
            [year, subject, score, level].forEach(val => {
              output += `<td style="border: 1px solid #888; padding: 4px 8px; text-align: center;">${val || '-'}</td>`;
            });
            output += `</tr>`;
          });
          output += `</tbody></table>`;
        }
        // After the PSSA table
        const pssaDescription = document.getElementById('pssaDescriptionBox')?.value?.trim();
        if (pssaDescription) {
          output += `<p style=\"font-family: Arial; font-size: 10pt; margin-top: 0.5em;\">${pssaDescription}</p>`;
        }
      }
      // Add Keystones description if this is the Keystones section
      if (section.id === 'keystonesCheckbox') {
        output += `<p style="font-family: Arial; font-size: 10pt;">The Keystone Exams are end-of-course assessments in Algebra I, Literature, and Biology that serve as one component of Pennsylvania's graduation requirements. Students can meet this requirement by scoring Proficient or Advanced on all three exams, or by earning a composite score of at least 4452 across the three exams, as long as they score at least Basic on two of them and no Below Basic scores. Additional state-approved pathways may also be available for students who do not meet these criteria.</p>`;
        output += `<p style="font-family: Arial; font-size: 10pt;">A summary of ${firstName}'s Keystone results are as follows:</p>`;
        // Add dynamic Keystones table
        const keystoneRows = Array.from(document.querySelectorAll('#keystonesTestContainer .keystones-input-row'));
        if (keystoneRows.length > 0) {
          output += `<table style="font-family: Arial; font-size: 10pt; border-collapse: collapse; margin-top: 10px; margin-bottom: 10px; width: auto;">
            <thead>
              <tr>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Year</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Subject</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Score</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Level</th>
              </tr>
            </thead>
            <tbody>`;
          keystoneRows.forEach(row => {
            const selects = row.querySelectorAll('select');
            const inputs = row.querySelectorAll('input[type="text"]');
            const year = selects[0]?.value?.trim() || '-';
            const subject = selects[1]?.value?.trim() || '-';
            const score = inputs[0]?.value?.trim() || '-';
            const level = selects[2]?.value?.trim() || '-';
            output += `<tr>`;
            [year, subject, score, level].forEach(val => {
              output += `<td style="border: 1px solid #888; padding: 4px 8px; text-align: center;">${val || '-'}</td>`;
            });
            output += `</tr>`;
          });
          output += `</tbody></table>`;
        }
        // After the Keystones table
        const keystonesDescription = document.getElementById('keystonesDescriptionBox')?.value?.trim();
        if (keystonesDescription) {
          output += `<p style=\"font-family: Arial; font-size: 10pt; margin-top: 0.5em;\">${keystonesDescription}</p>`;
        }
      }
      // Add PASA description if this is the PASA section
      if (section.id === 'pasaCheckbox') {
        output += `<p style="font-family: Arial; font-size: 10pt;">The Pennsylvania Alternate System of Assessment (PASA) is designed for students who require an alternate assessment aligned with alternate academic standards. It measures progress in English Language Arts, Math, and Science, and is administered in place of the general state assessments. Below is a summary of ${firstName}'s results.</p>`;
        // Add dynamic PASA table
        const pasaRows = Array.from(document.querySelectorAll('#pasaTestContainer .pasa-input-row'));
        if (pasaRows.length > 0) {
          output += `<table style="font-family: Arial; font-size: 10pt; border-collapse: collapse; margin-top: 10px; margin-bottom: 10px; width: auto;">
            <thead>
              <tr>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Year</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Subject</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Score</th>
                <th style="border: 1px solid #888; padding: 4px 8px; font-weight: bold;">Level</th>
              </tr>
            </thead>
            <tbody>`;
          pasaRows.forEach(row => {
            const selects = row.querySelectorAll('select');
            const inputs = row.querySelectorAll('input[type="text"]');
            const year = selects[0]?.value?.trim() || '-';
            const subject = selects[1]?.value?.trim() || '-';
            const score = inputs[0]?.value?.trim() || '-';
            const level = selects[2]?.value?.trim() || '-';
            output += `<tr>`;
            [year, subject, score, level].forEach(val => {
              output += `<td style="border: 1px solid #888; padding: 4px 8px; text-align: center;">${val || '-'}</td>`;
            });
            output += `</tr>`;
          });
          output += `</tbody></table>`;
        }
        // After the PASA table
        const pasaDescription = document.getElementById('pasaDescriptionBox')?.value?.trim();
        if (pasaDescription) {
          output += `<p style=\"font-family: Arial; font-size: 10pt; margin-top: 0.5em;\">${pasaDescription}</p>`;
        }
      }
      // CBMs section
      if (section.id === 'cbmsCheckbox') {
        const cbmsRows = Array.from(document.querySelectorAll('#cbmsContainer .cbms-assessment-row'));
        let cbmCount = 0;
        cbmsRows.forEach(row => {
          const name = row.querySelector('.cbms-name')?.value?.trim();
          const desc = row.querySelector('.cbms-description')?.value?.trim();
          const signif = row.querySelector('.cbms-significance-textarea')?.value?.trim();
          const dateRows = Array.from(row.querySelectorAll('.cbms-date-row'));
          if (name || desc || signif) {
            if (cbmCount > 0) output += '<br><br>';
            output += `<div style='margin-left: 40px; margin-bottom: 2em;'>`;
            if (name) output += `<h3 style="font-family: Arial; font-size: 10pt; font-weight: bold; margin-left: 0;">${name}</h3>`;
            if (desc) output += `<p style="font-family: Arial; font-size: 10pt; margin-left: 0;">${desc}</p>`;
            // Table for Date, Score, Level
            let tableRows = '';
            dateRows.forEach(dateRow => {
              const date = dateRow.querySelector('input[type="date"]')?.value?.trim();
              const score = dateRow.querySelectorAll('input[type="text"]')[0]?.value?.trim();
              const level = dateRow.querySelectorAll('input[type="text"]')[1]?.value?.trim();
              if (date || score || level) {
                tableRows += `<tr>`;
                tableRows += `<td style='border: 1px solid #888; padding: 4px 8px; text-align: center;'>${date || '-'}</td>`;
                tableRows += `<td style='border: 1px solid #888; padding: 4px 8px; text-align: center;'>${score || '-'}</td>`;
                tableRows += `<td style='border: 1px solid #888; padding: 4px 8px; text-align: center;'>${level || '-'}</td>`;
                tableRows += `</tr>`;
              }
            });
            if (tableRows) {
              output += `<table style='font-family: Arial; font-size: 10pt; border-collapse: collapse; margin: 10px 0; width: auto;'>`;
              output += `<thead><tr>`;
              output += `<th style='border: 1px solid #888; padding: 4px 8px; font-weight: bold;'>Date</th>`;
              output += `<th style='border: 1px solid #888; padding: 4px 8px; font-weight: bold;'>Score</th>`;
              output += `<th style='border: 1px solid #888; padding: 4px 8px; font-weight: bold;'>Level</th>`;
              output += `</tr></thead><tbody>${tableRows}</tbody></table>`;
            }
            if (signif) output += `<p style=\"font-family: Arial; font-size: 10pt; margin-left: 0; margin-top: 0.5em;\">${signif}</p>`;
            output += `</div>`;
            cbmCount++;
          }
        });
      }
      // Other Assessments section
      if (section.id === 'otherAssessmentsCheckbox') {
        const otherRows = Array.from(document.querySelectorAll('#otherAssessmentsContainer .other-assessment-row'));
        let otherCount = 0;
        otherRows.forEach(row => {
          const name = row.querySelector('.other-name')?.value?.trim();
          const desc = row.querySelector('.other-description')?.value?.trim();
          const signif = row.querySelector('.other-significance-textarea')?.value?.trim();
          const dateRows = Array.from(row.querySelectorAll('.other-date-row'));
          if (name || desc || signif) {
            if (otherCount > 0) output += '<br><br>';
            output += `<div style='margin-left: 40px; margin-bottom: 2em;'>`;
            if (name) output += `<h3 style="font-family: Arial; font-size: 10pt; font-weight: bold; margin-left: 0;">${name}</h3>`;
            if (desc) output += `<p style="font-family: Arial; font-size: 10pt; margin-left: 0;">${desc}</p>`;
            // Table for Date, Score, Level
            let tableRows = '';
            dateRows.forEach(dateRow => {
              const date = dateRow.querySelector('input[type="date"]')?.value?.trim();
              const score = dateRow.querySelectorAll('input[type="text"]')[0]?.value?.trim();
              const level = dateRow.querySelectorAll('input[type="text"]')[1]?.value?.trim();
              if (date || score || level) {
                tableRows += `<tr>`;
                tableRows += `<td style='border: 1px solid #888; padding: 4px 8px; text-align: center;'>${date || '-'}</td>`;
                tableRows += `<td style='border: 1px solid #888; padding: 4px 8px; text-align: center;'>${score || '-'}</td>`;
                tableRows += `<td style='border: 1px solid #888; padding: 4px 8px; text-align: center;'>${level || '-'}</td>`;
                tableRows += `</tr>`;
              }
            });
            if (tableRows) {
              output += `<table style='font-family: Arial; font-size: 10pt; border-collapse: collapse; margin: 10px 0; width: auto;'>`;
              output += `<thead><tr>`;
              output += `<th style='border: 1px solid #888; padding: 4px 8px; font-weight: bold;'>Date</th>`;
              output += `<th style='border: 1px solid #888; padding: 4px 8px; font-weight: bold;'>Score</th>`;
              output += `<th style='border: 1px solid #888; padding: 4px 8px; font-weight: bold;'>Level</th>`;
              output += `</tr></thead><tbody>${tableRows}</tbody></table>`;
            }
            if (signif) output += `<p style=\"font-family: Arial; font-size: 10pt; margin-left: 0; margin-top: 0.5em;\">${signif}</p>`;
            output += `</div>`;
            otherCount++;
          }
        });
      }
      // If there is data for this section, output as a list
      if (section.data && section.data.length > 0) {
        output += '<ul style="list-style-type: disc; margin-left: 40px; font-family: Arial; font-size: 10pt;">';
        section.data.forEach(assessment => {
          output += `<li style="font-family: Arial; font-size: 10pt;">${assessment}</li>`;
        });
        output += '</ul>';
      }
    }
  });

  // Add summary if provided
  if (summaryText) {
    output += `<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">${summaryText}</span></p>\\n`;
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