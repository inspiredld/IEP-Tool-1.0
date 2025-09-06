// Generates and inserts the Academic Progress output into the output RTE
export function generateAcademicProgressOutput(returnOnly = false) {
  // Helper function to format school year
  function formatSchoolYear(year) {
    return year || '';
  }

  // Helper function to format marking period
  function formatMarkingPeriod(mp) {
    return mp || '';
  }

  // Helper function to format goal area with optional specification
  function formatGoalArea(area, specify) {
    if (!area) return '';
    if (area === 'other' && specify) return specify;
    return area.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  // Get student name and pronouns from General Statement section
  const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';
  const pronouns = document.getElementById('pronouns')?.value || '';
  const pronounPossessive = pronouns === 'Custom' 
    ? document.getElementById('pronoun-possessive')?.value?.trim() || 'their'
    : pronouns.split('/')[2] || 'their';

  // Start building the output HTML
  let output = '';

  // Add style block for consistent sizing
  output += '<style>\n';
  output += 'h1 { font-family: Arial; font-size: 14pt !important; font-weight: bold; text-decoration: underline; }\n';
  output += 'h2 { font-family: Arial; font-size: 12pt !important; font-weight: bold; }\n';
  output += 'p { font-family: Arial; font-size: 10pt !important; }\n';
  output += '</style>\n';

  // Add the main heading
  output += '<h1 class="ql-size-large" style="font-family: Arial !important; font-size: 14pt !important; font-weight: bold !important; text-decoration: underline !important;">Summary of Current Academic Progress</h1>';
  output += '<p><br></p>\n';  // Add space after h1

  // Add Progress Towards Current Goals heading
  output += '<h2 class="ql-size-medium" style="font-family: Arial !important; font-size: 12pt !important; font-weight: bold !important;">Progress Towards Current Goals</h2>\n';

  // Add introduction paragraph
  output += `<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">${firstName}'s progress towards current IEP goals was assessed during the IEP year. A summary of ${pronounPossessive} progress is described below.</span></p>\n`;
  output += '<p><br></p>\n';

  // Process each goal
  let goalIndex = 1;
  while (true) {
    const goalSection = document.getElementById(`goalSection${goalIndex}`);
    if (!goalSection) break;

    // Add two blank lines between goals if not first goal
    if (goalIndex > 1) {
      output += '<p><br></p><p><br></p>';
    }

    // Get goal details
    const goalArea = document.getElementById(`goalArea${goalIndex}`)?.value || '';
    const goalAreaSpecify = document.getElementById(`goalArea${goalIndex}Specify`)?.value || '';
    const goalText = document.getElementById(`goalText${goalIndex}`)?.value || '';

    // Add goal details with labels on same line as content
    output += `<p><strong>Goal Area:</strong> ${formatGoalArea(goalArea, goalAreaSpecify)}</p>\n`;
    output += `<p><strong>Goal:</strong> ${goalText}</p>\n`;
    output += `<p><strong>Progress:</strong></p>\n`;

    // Process progress periods for this goal
    let periodIndex = 1;
    while (true) {
      const periodSection = document.getElementById(`goal${goalIndex}ProgressPeriod${periodIndex}`);
      if (!periodSection) break;

      const schoolYear = document.getElementById(`goal${goalIndex}SchoolYear${periodIndex}`)?.value;
      const markingPeriod = document.getElementById(`goal${goalIndex}MarkingPeriod${periodIndex}`)?.value;
      const summary = document.getElementById(`goal${goalIndex}Summary${periodIndex}`)?.value;

      if (schoolYear && markingPeriod) {
        // Use 8 non-breaking spaces for one tab equivalent
        const indent = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        output += `<p>${indent}<em>School Year:</em> ${formatSchoolYear(schoolYear)}</p>\n`;
        output += `<p>${indent}<em>Marking Period:</em> ${formatMarkingPeriod(markingPeriod)}</p>\n`;
        
        // Use nested lists with white/transparent bullets for summary indentation
        output += `<ul class="ql-indent-1" style="list-style: none; margin: 0;">`;
        output += `<ul class="ql-indent-2" style="list-style: none; margin: 0;">`;
        output += `<li style="list-style: none !important; color: white;"><span style="color: black;"><em><strong>Summary:</strong></em> ${summary || ''}</span></li>`;
        output += '</ul>';
        output += '</ul>\n';

        // Add one blank line between progress periods if not the last period
        const nextPeriod = document.getElementById(`goal${goalIndex}ProgressPeriod${periodIndex + 1}`);
        if (nextPeriod) {
          output += '<p><br></p>\n';
        }
      }

      periodIndex++;
    }

    goalIndex++;
  }

  // Add four blank rows before Current SDIs section
  output += '<p><br></p><p><br></p><p><br></p><p><br></p>';

  // Add Current SDIs heading
  output += '<h2 class="ql-size-medium" style="font-family: Arial !important; font-size: 12pt !important; font-weight: bold !important;">Current SDIs, Modifications, and Accommodations</h2>\n';

  // Get SDI checkbox states
  const sdiRemove = document.getElementById('sdiRemove')?.checked;
  const sdiModify = document.getElementById('sdiModify')?.checked;
  const sdiAdd = document.getElementById('sdiAdd')?.checked;
  const sdiNoChange = document.getElementById('sdiNoChange')?.checked;

  // Process SDI content based on checkbox states
  if (sdiNoChange) {
    output += '<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">There are no recommended changes to SDIs, Modifications, and/or Accommodations at this time.</span></p>\n';
  } else {
    if (sdiRemove) {
      const sdiRemoveContainer = document.querySelector('#sdiRemoveInputs .sdi-input-container');
      if (sdiRemoveContainer) {
        output += '<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">It is recommended that the following SDIs, Modifications, and/or Accommodations be removed from the IEP:</span></p>\n';
        const sdiRows = sdiRemoveContainer.querySelectorAll('.sdi-input-row');
        output += '<ul style="list-style-type: disc; margin-left: 40px; font-family: Arial; font-size: 10pt;">\n';
        sdiRows.forEach(row => {
          const sdiText = row.querySelector('.sdi-textarea')?.value;
          if (sdiText) {
            output += `<li style="font-family: Arial; font-size: 10pt;">${sdiText}</li>\n`;
          }
        });
        output += '</ul>\n';
        
        // Add description for checkbox 1 immediately after its bullets
        const description = document.querySelector('#sdiRemoveInputs .description-section .sdi-textarea')?.value;
        if (description) {
          output += `<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">${description}</span></p>\n`;
          output += '<p><br></p>\n';
        }
      }
    }

    if (sdiModify) {
      const sdiModifyContainer = document.querySelector('#sdiModifyInputs .sdi-input-container');
      if (sdiModifyContainer) {
        // Add extra blank row only if checkbox 1 was also checked
        if (sdiRemove) {
          output += '<p><br></p>\n';
        }
        
        output += '<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">It is recommended that the following SDIs, Modifications, and/or Accommodations be updated in the IEP:</span></p>\n';
        const sdiRows = sdiModifyContainer.querySelectorAll('.sdi-input-row');
        output += '<ul style="list-style-type: disc; margin-left: 40px; font-family: Arial; font-size: 10pt;">\n';
        sdiRows.forEach(row => {
          const sdiText = row.querySelector('.sdi-textarea')?.value;
          if (sdiText) {
            output += `<li style="font-family: Arial; font-size: 10pt;">${sdiText}</li>\n`;
          }
        });
        output += '</ul>\n';
        
        // Add description for checkbox 2 immediately after its bullets
        const description = document.querySelector('#sdiModifyInputs .description-section .sdi-textarea')?.value;
        if (description) {
          output += `<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">${description}</span></p>\n`;
          output += '<p><br></p>\n';
        }
      }
    }

    if (sdiAdd) {
      const sdiAddContainer = document.querySelector('#sdiAddInputs .sdi-input-container');
      if (sdiAddContainer) {
        // Add extra blank row if either checkbox 1 or 2 was checked
        if (sdiRemove || sdiModify) {
          output += '<p><br></p>\n';
        }
        
        output += '<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">It is recommended that the following SDIs, Modifications, and/or Accommodations be added to the IEP:</span></p>\n';
        const sdiRows = sdiAddContainer.querySelectorAll('.sdi-input-row');
        output += '<ul style="list-style-type: disc; margin-left: 40px; font-family: Arial; font-size: 10pt;">\n';
        sdiRows.forEach(row => {
          const sdiText = row.querySelector('.sdi-textarea')?.value;
          if (sdiText) {
            output += `<li style="font-family: Arial; font-size: 10pt;">${sdiText}</li>\n`;
          }
        });
        output += '</ul>\n';
        
        // Add description for checkbox 3 immediately after its bullets
        const description = document.querySelector('#sdiAddInputs .description-section .sdi-textarea')?.value;
        if (description) {
          output += `<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">${description}</span></p>\n`;
          output += '<p><br></p>\n';
        }
      }
    }
  }

  // Add Grades section with four blank lines above
  output += '<p><br></p><p><br></p><p><br></p><p><br></p>';
  output += '<h2 class="ql-size-medium" style="font-family: Arial !important; font-size: 12pt !important; font-weight: bold !important;">Grades</h2>\n';
  
  // Get grades date and description
  const gradesDate = document.getElementById('gradesDate')?.value;
  const gradesDescription = document.getElementById('gradesDescriptionBox')?.value;
  
  // Format date as MM/DD/YYYY if present
  let gradesDateFormatted = gradesDate ? new Date(gradesDate).toLocaleDateString() : '[date]';
  output += `<p>${firstName}'s grades were reviewed as of ${gradesDateFormatted}. A summary is described below.</p>\n`;
  output += '<p><br></p>';

  // Helpers to read either the new compact grid or the legacy hidden table
  const getGridSemesterRows = (semesterNum) => {
    const grid = document.querySelector(`.grades-sem-grid[data-semester="${semesterNum}"]`);
    if (!grid) return null;
    const rowIds = Array.from(new Set(Array.from(grid.querySelectorAll('[data-row]')).map(el => el.getAttribute('data-row')))).filter(Boolean);
    if (!rowIds.length) return [];
    if (semesterNum === 1) {
      return rowIds.map(id => ({
        className: document.getElementById(`sem1-class-${id}`)?.value || '',
        mpA: document.getElementById(`sem1-mp1-${id}`)?.value || '',
        mpB: document.getElementById(`sem1-mp2-${id}`)?.value || ''
      })).filter(r => r.className || r.mpA || r.mpB);
    }
    return rowIds.map(id => ({
      className: document.getElementById(`sem2-class-${id}`)?.value || '',
      mpA: document.getElementById(`sem2-mp3-${id}`)?.value || '',
      mpB: document.getElementById(`sem2-mp4-${id}`)?.value || ''
    })).filter(r => r.className || r.mpA || r.mpB);
  };

  const getLegacySemesterRows = (semesterNum) => {
    const rows = Array.from(document.querySelectorAll(`#gradesSemester${semesterNum}Body .grades-table-row`));
    if (!rows.length) return [];
    if (semesterNum === 1) {
      return rows.map(row => ({
        className: row.querySelector('.grades-class-input')?.value || '',
        mpA: row.querySelector('.grades-mp1')?.value || '',
        mpB: row.querySelector('.grades-mp2')?.value || ''
      })).filter(r => r.className || r.mpA || r.mpB);
    }
    return rows.map(row => ({
      className: row.querySelector('.grades-class-input')?.value || '',
      mpA: row.querySelector('.grades-mp3')?.value || '',
      mpB: row.querySelector('.grades-mp4')?.value || ''
    })).filter(r => r.className || r.mpA || r.mpB);
  };

  const hasSemesterData = (semesterNum) => {
    const gridRows = getGridSemesterRows(semesterNum);
    if (gridRows && gridRows.length) return true;
    const legacyRows = getLegacySemesterRows(semesterNum);
    return legacyRows.length > 0;
  };

  // Only show Semester 1 if it has data
  if (hasSemesterData(1)) {
    output += '<p><strong>Semester 1</strong></p>';
    output += '<table style="border-collapse: collapse; font-family: Arial; font-size: 10pt;">';
    output += '<tr><th style="border: 1px solid #000; padding: 4px; white-space: nowrap;">Course Name</th><th style="border: 1px solid #000; padding: 4px; width: 80px;">MP1</th><th style="border: 1px solid #000; padding: 4px; width: 80px;">MP2</th></tr>';
    const gridRows1 = getGridSemesterRows(1);
    const rows1 = (gridRows1 && gridRows1.length) ? gridRows1 : getLegacySemesterRows(1);
    rows1.forEach(r => {
      output += `<tr><td style=\"border: 1px solid #000; padding: 4px; white-space: nowrap;\">${r.className}</td><td style=\"border: 1px solid #000; padding: 4px; width: 80px; text-align: center;\">${r.mpA}</td><td style=\"border: 1px solid #000; padding: 4px; width: 80px; text-align: center;\">${r.mpB}</td></tr>`;
    });
    output += '</table>';
    output += '<p><br></p>';
  }

  // Only show Semester 2 if it has data
  if (hasSemesterData(2)) {
    output += '<p><strong>Semester 2</strong></p>';
    output += '<table style="border-collapse: collapse; font-family: Arial; font-size: 10pt;">';
    output += '<tr><th style="border: 1px solid #000; padding: 4px; white-space: nowrap;">Course Name</th><th style="border: 1px solid #000; padding: 4px; width: 80px;">MP3</th><th style="border: 1px solid #000; padding: 4px; width: 80px;">MP4</th></tr>';
    const gridRows2 = getGridSemesterRows(2);
    const rows2 = (gridRows2 && gridRows2.length) ? gridRows2 : getLegacySemesterRows(2);
    rows2.forEach(r => {
      output += `<tr><td style=\"border: 1px solid #000; padding: 4px; white-space: nowrap;\">${r.className}</td><td style=\"border: 1px solid #000; padding: 4px; width: 80px; text-align: center;\">${r.mpA}</td><td style=\"border: 1px solid #000; padding: 4px; width: 80px; text-align: center;\">${r.mpB}</td></tr>`;
    });
    output += '</table>';
    output += '<p><br></p>';
  }

  // Add description if present
  if (gradesDescription) {
    output += `<p class="ql-size-small" style="font-size: 10pt !important;"><span style="font-family: Arial;">${gradesDescription}</span></p>\n`;
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
