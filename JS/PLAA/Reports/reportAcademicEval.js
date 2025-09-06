export function generateAcademicEvalOutput(returnOnly = false) {
  // Start building the output HTML
  let output = '';

  // Add four blank lines before the section
  output += '<p><br></p><p><br></p><p><br></p><p><br></p>';

  // Add the section heading - this will always appear
  output += '<h1 style="font-family: Arial; font-size: 14pt; font-weight: bold; text-decoration: underline;">Summary of Aptitude & Achievement Assessments</h1>';

  // Get student name and possessive pronoun (match general statement logic)
  const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';
  const pronouns = document.getElementById('pronouns')?.value || '';
  const pronounPossessive =
    pronouns === 'Custom'
      ? document.getElementById('pronoun-possessive')?.value?.trim() || '[pronoun]'
      : pronouns.split('/')[2] || '[pronoun]';

  // Get evaluation date components
  const evalMonth = document.getElementById('evalMonth')?.value;
  const evalDay = document.getElementById('evalDay')?.value;
  const evalYear = document.getElementById('evalYear')?.value;

  // Format the date based on what components are provided
  let formattedDate = '[DATE]';
  if (evalYear) {
    if (evalMonth) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                         'July', 'August', 'September', 'October', 'November', 'December'];
      const monthName = monthNames[parseInt(evalMonth) - 1];
      
      if (evalDay) {
        // Full date: Month Day, Year
        formattedDate = `${monthName} ${evalDay}, ${evalYear}`;
      } else {
        // Month and Year only
        formattedDate = `${monthName} ${evalYear}`;
      }
    } else {
      // Year only
      formattedDate = evalYear;
    }
  }

  // Add the introductory paragraph
  output += `<p style="font-family: Arial; font-size: 10pt;">${firstName}'s most recent evaluation was completed ${formattedDate}. The report included information from ${pronounPossessive} most recent aptitude and achievement assessments. A summary is provided below.</p>`;

  // Helper to check if a checkbox is checked
  const isChecked = id => document.getElementById(id)?.checked;

  // === Aptitude Tests Output ===
  const hasWisc = isChecked('wiscCheckbox');
  const hasOtherAptitude = isChecked('otherAptitudeCheckbox');
  if (hasWisc || hasOtherAptitude) {
    output += '<p><br></p><p><br></p>';
    output += '<h2 style="font-family: Arial; font-size: 12pt; font-weight: bold; margin: 0;">Aptitude Tests</h2>';
    output += '<p><br></p><p><br></p>';
  }
  // WISC-V
  if (hasWisc) {
    // Add WISC-V header and description
    const wiscDateRaw = document.getElementById('wiscDate')?.value;
    const wiscDate = formatDateMDY(wiscDateRaw);
    let wiscDateSentence = '';
    if (wiscDate) {
      wiscDateSentence = `${firstName} was assessed using the Wechsler Intelligence Scale for Children, 5th Edition (WISC-V) on ${wiscDate}. `;
    }
    output += `<p style="font-family: Arial; font-size: 10pt; margin: 0;">${wiscDateSentence}The WISC-V (Wechsler Intelligence Scale for Children, Fifth Edition) is a widely used cognitive assessment designed to measure a child's intellectual functioning. It evaluates a range of abilities through subtests grouped into areas such as Verbal Comprehension, Visual-Spatial skills, Fluid Reasoning, Working Memory, and Processing Speed. Results provide insight into a student's cognitive strengths and areas that may benefit from support.</p>`;

    // === WISC-V Table Output ===
    // Try to find WISC-V index sections in the DOM
    let wiscIndexSections = document.querySelectorAll('#wiscIndexContainer .wisc-index-section');
    if (!wiscIndexSections || wiscIndexSections.length === 0) {
      // Fallback: try all .wisc-index-section in the document
      wiscIndexSections = document.querySelectorAll('.wisc-index-section');
    }
    // Debug log
    console.log('WISC-V index sections found:', wiscIndexSections.length, wiscIndexSections);
    if (wiscIndexSections.length > 0) {
      // Start a single table for all indexes
      output += '<table style="border-collapse: collapse; margin: 1.5rem 0; font-family: Arial; font-size: 10pt; width: auto;">';
      output += '<tr>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Index</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Standard Score</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Confidence Interval</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Percentile Rank</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Qualitative Description</th>' +
        '</tr>';
      wiscIndexSections.forEach(section => {
        const indexSelect = section.querySelector('.wisc-index-select');
        const selectedValue = indexSelect?.value || '';
        let indexLabel = '';
        let indexStyle = '';
        if (selectedValue === 'other') {
          // Use the textbox value if 'Other' is selected
          const otherInput = section.querySelector('.wisc-index-other-input');
          indexLabel = otherInput?.value?.trim() || 'Other';
          indexStyle = '';
        } else {
          // Get the label and style from the visible dropdown
          const selectedDiv = section.querySelector('.custom-dropdown-selected');
          indexLabel = selectedDiv?.childNodes[0]?.textContent?.trim() || '';
          indexStyle = selectedDiv?.getAttribute('style') || '';
        }
        let rowStyle = '';
        const isBold = indexStyle.includes('font-weight: bold');
        const isItalic = indexStyle.includes('font-style: italic');
        if (isBold && isItalic) {
          rowStyle = 'font-weight: bold; font-style: italic;';
        } else if (isBold) {
          rowStyle = 'font-weight: bold;';
        } else if (isItalic) {
          rowStyle = 'font-style: italic;';
        }
        const stdScore = section.querySelector('.wisc-std-score')?.value || '';
        const confInt = section.querySelector('.wisc-conf-int')?.value || '';
        const percRank = section.querySelector('.wisc-perc-rank')?.value || '';
        const qualDescSelect = section.querySelector('.wisc-qual-desc');
        const qualDesc = qualDescSelect?.options?.[qualDescSelect.selectedIndex]?.textContent || '';
        // If rowStyle is set, apply to all cells; otherwise, only to Index cell
        const cellStyle = rowStyle ? rowStyle + ' border: 1px solid #888; padding: 4px;' : 'border: 1px solid #888; padding: 4px;';
        console.log('WISC-V row debug:', {indexLabel, stdScore, confInt, percRank, qualDesc, section});
        output += `<tr>` +
          `<td style="${cellStyle}">${indexLabel}</td>` +
          `<td style="${cellStyle}">${stdScore}</td>` +
          `<td style="${cellStyle}">${confInt}</td>` +
          `<td style="${cellStyle}">${percRank}</td>` +
          `<td style="${cellStyle}">${qualDesc}</td>` +
          `</tr>`;
      });
      output += '</table>';
      // Add Summary of Results if present
      const wiscSummary = document.querySelector('.wisc-summary-results')?.value?.trim();
      if (wiscSummary) {
        output += `<p style="font-family: Arial; font-size: 10pt; margin-top: 1.5em;">${wiscSummary}</p>`;
      }
    }
  }
  // Other Aptitude
  if (hasOtherAptitude) {
    const otherAptitudeInput = document.querySelector('.other-aptitude-input')?.value?.trim();
    const otherAptitudeDesc = document.querySelector('.other-aptitude-description')?.value?.trim();
    const otherAptitudeSections = document.querySelectorAll('.other-aptitude-section');
    otherAptitudeSections.forEach((section, idx) => {
      // Only output if section is visible (in case of dynamic add/remove)
      if (section.style.display !== 'none') {
        output += '<p><br></p><p><br></p>';
        if (otherAptitudeInput) {
          output += `<h3 style="font-family: Arial; font-size: 10pt; font-weight: bold; font-style: italic; margin: 0;">${otherAptitudeInput}</h3>`;
        }
        if (otherAptitudeDesc) {
          output += `<p style="font-family: Arial; font-size: 10pt; margin: 0;">${otherAptitudeDesc}</p>`;
        }
        // Table header
        output += '<table style="border-collapse: collapse; margin: 1.5rem 0; font-family: Arial; font-size: 10pt; width: auto;">';
        output += '<tr>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Index/Subtest</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Standard Score</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Confidence Interval</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Percentile Rank</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Qualitative Description</th>' +
          '</tr>';
        const indexSections = section.querySelectorAll('.other-aptitude-index-section');
        indexSections.forEach(idxSection => {
          const index = idxSection.querySelector('.other-aptitude-index-input')?.value || '';
          const stdScore = idxSection.querySelector('.other-aptitude-std-score')?.value || '';
          const confInt = idxSection.querySelector('.other-aptitude-conf-int')?.value || '';
          const percRank = idxSection.querySelector('.other-aptitude-perc-rank')?.value || '';
          const qualDescSelect = idxSection.querySelector('.other-aptitude-qual-desc');
          const qualDesc = qualDescSelect?.options?.[qualDescSelect.selectedIndex]?.textContent || '';
          output += `<tr>` +
            `<td style="border: 1px solid #888; padding: 4px;">${index}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${stdScore}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${confInt}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${percRank}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${qualDesc}</td>` +
            `</tr>`;
        });
        output += '</table>';
        // Summary of Results
        const summary = section.querySelector('.other-aptitude-summary-results')?.value?.trim();
        if (summary) {
          output += `<p style="font-family: Arial; font-size: 10pt; margin-top: 1.5em;">${summary}</p>`;
        }
      }
    });
  }

  // === Achievement Tests Output ===
  const hasWiat = isChecked('wiatCheckbox');
  const hasWj = isChecked('wjCheckbox');
  const hasOtherAchievement = isChecked('otherAchievementCheckbox');
  if (hasWiat || hasWj || hasOtherAchievement) {
    output += '<p><br></p><p><br></p><p><br></p><p><br></p>';
    output += '<h2 style="font-family: Arial; font-size: 12pt; font-weight: bold; margin: 0;">Achievement Tests</h2>';
  }
  // WIAT-III
  if (hasWiat) {
    output += '<p><br></p><p><br></p>';
    output += '<h3 style="font-family: Arial; font-size: 10pt; font-weight: bold; font-style: italic; margin: 0;">Wechsler Individual Achievement Test, 3rd Edition (WIAT-III)</h3>';
    const wiatDateRaw = document.getElementById('wiatDate')?.value;
    const wiatDate = formatDateMDY(wiatDateRaw);
    let wiatDateSentence = '';
    if (wiatDate) {
      wiatDateSentence = `${firstName} was assessed using the Wechsler Individual Achievement Test, 3rd Edition (WIAT-III) on ${wiatDate}. `;
    }
    output += `<p style="font-family: Arial; font-size: 10pt; margin: 0;">${wiatDateSentence}The WIAT-III is a comprehensive academic achievement test that assesses listening, speaking, reading, writing, and math skills in individuals aged 4 to 50. It includes detailed subtests that measure both foundational and applied academic skills, often used to support educational planning, diagnose learning disabilities, and monitor progress over time.</p>`;

    let wiatIndexSections = document.querySelectorAll('#wiatIndexContainer .wiat-index-section');
    if (!wiatIndexSections || wiatIndexSections.length === 0) {
      wiatIndexSections = document.querySelectorAll('.wiat-index-section');
    }
    if (wiatIndexSections.length > 0) {
      output += '<table style="border-collapse: collapse; margin: 1.5rem 0; font-family: Arial; font-size: 10pt; width: auto;">';
      output += '<tr>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Subtest</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Standard Score</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Confidence Interval</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Percentile Rank</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Qualitative Description</th>' +
        '</tr>';
      wiatIndexSections.forEach(section => {
        const indexSelect = section.querySelector('.wiat-index-select');
        const selectedValue = indexSelect?.value || '';
        let indexLabel = '';
        let indexStyle = '';
        if (selectedValue === 'other') {
          const otherInput = section.querySelector('.wiat-index-other-input');
          indexLabel = otherInput?.value?.trim() || 'Other';
          indexStyle = '';
        } else {
          const selectedDiv = section.querySelector('.custom-dropdown-selected');
          indexLabel = selectedDiv?.childNodes[0]?.textContent?.trim() || '';
          indexStyle = selectedDiv?.getAttribute('style') || '';
        }
        let rowStyle = '';
        const isBold = indexStyle.includes('font-weight: bold');
        const isItalic = indexStyle.includes('font-style: italic');
        if (isBold && isItalic) {
          rowStyle = 'font-weight: bold; font-style: italic;';
        } else if (isBold) {
          rowStyle = 'font-weight: bold;';
        } else if (isItalic) {
          rowStyle = 'font-style: italic;';
        }
        const stdScore = section.querySelector('.wiat-std-score')?.value || '';
        const confInt = section.querySelector('.wiat-conf-int')?.value || '';
        const percRank = section.querySelector('.wiat-perc-rank')?.value || '';
        const qualDescSelect = section.querySelector('.wiat-qual-desc');
        const qualDesc = qualDescSelect?.options?.[qualDescSelect.selectedIndex]?.textContent || '';
        const cellStyle = rowStyle ? rowStyle + ' border: 1px solid #888; padding: 4px;' : 'border: 1px solid #888; padding: 4px;';
        output += `<tr>` +
          `<td style="${cellStyle}">${indexLabel}</td>` +
          `<td style="${cellStyle}">${stdScore}</td>` +
          `<td style="${cellStyle}">${confInt}</td>` +
          `<td style="${cellStyle}">${percRank}</td>` +
          `<td style="${cellStyle}">${qualDesc}</td>` +
          `</tr>`;
      });
      output += '</table>';
      const wiatSummary = document.querySelector('.wiat-summary-results')?.value?.trim();
      if (wiatSummary) {
        output += `<p style="font-family: Arial; font-size: 10pt; margin-top: 1.5em;">${wiatSummary}</p>`;
      }
    }
  }
  // WJ IV Ach
  if (hasWj) {
    output += '<p><br></p><p><br></p>';
    output += '<h3 style="font-family: Arial; font-size: 10pt; font-weight: bold; font-style: italic; margin: 0;">Woodcock-Johnson Tests of Achievement, Fourth Edition (WJ-IV)</h3>';
    const wjDateRaw = document.getElementById('wjDate')?.value;
    const wjDate = formatDateMDY(wjDateRaw);
    let wjDateSentence = '';
    if (wjDate) {
      wjDateSentence = `${firstName} was assessed using the Woodcock-Johnson Tests of Achievement, Fourth Edition (WJ-IV) on ${wjDate}. `;
    }
    output += `<p style="font-family: Arial; font-size: 10pt; margin: 0;">${wjDateSentence}The WJ-IV ACH evaluates academic achievement across key domains such as reading, writing, and mathematics for individuals from age 2 through adulthood. Known for its flexibility and cluster-based scoring, it provides insight into both basic academic skills and higher-order reasoning, making it useful for identifying learning strengths and weaknesses in educational settings.</p>`;

    let wjIndexSections = document.querySelectorAll('#wjIndexContainer .wj-index-section');
    if (!wjIndexSections || wjIndexSections.length === 0) {
      wjIndexSections = document.querySelectorAll('.wj-index-section');
    }
    if (wjIndexSections.length > 0) {
      output += '<table style="border-collapse: collapse; margin: 1.5rem 0; font-family: Arial; font-size: 10pt; width: auto;">';
      output += '<tr>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Subtest</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Standard Score</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Confidence Interval</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Percentile Rank</th>' +
        '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Qualitative Description</th>' +
        '</tr>';
      wjIndexSections.forEach(section => {
        const indexSelect = section.querySelector('.wj-index-select');
        const selectedValue = indexSelect?.value || '';
        let indexLabel = '';
        let indexStyle = '';
        if (selectedValue === 'other') {
          const otherInput = section.querySelector('.wj-index-other-input');
          indexLabel = otherInput?.value?.trim() || 'Other';
          indexStyle = '';
        } else {
          const selectedDiv = section.querySelector('.custom-dropdown-selected');
          indexLabel = selectedDiv?.childNodes[0]?.textContent?.trim() || '';
          indexStyle = selectedDiv?.getAttribute('style') || '';
        }
        let rowStyle = '';
        const isBold = indexStyle.includes('font-weight: bold');
        const isItalic = indexStyle.includes('font-style: italic');
        if (isBold && isItalic) {
          rowStyle = 'font-weight: bold; font-style: italic;';
        } else if (isBold) {
          rowStyle = 'font-weight: bold;';
        } else if (isItalic) {
          rowStyle = 'font-style: italic;';
        }
        const stdScore = section.querySelector('.wj-std-score')?.value || '';
        const confInt = section.querySelector('.wj-conf-int')?.value || '';
        const percRank = section.querySelector('.wj-perc-rank')?.value || '';
        const qualDescSelect = section.querySelector('.wj-qual-desc');
        const qualDesc = qualDescSelect?.options?.[qualDescSelect.selectedIndex]?.textContent || '';
        const cellStyle = rowStyle ? rowStyle + ' border: 1px solid #888; padding: 4px;' : 'border: 1px solid #888; padding: 4px;';
        output += `<tr>` +
          `<td style="${cellStyle}">${indexLabel}</td>` +
          `<td style="${cellStyle}">${stdScore}</td>` +
          `<td style="${cellStyle}">${confInt}</td>` +
          `<td style="${cellStyle}">${percRank}</td>` +
          `<td style="${cellStyle}">${qualDesc}</td>` +
          `</tr>`;
      });
      output += '</table>';
      const wjSummary = document.querySelector('.wj-summary-results')?.value?.trim();
      if (wjSummary) {
        output += `<p style="font-family: Arial; font-size: 10pt; margin-top: 1.5em;">${wjSummary}</p>`;
      }
    }
  }
  // Other Achievement
  if (hasOtherAchievement) {
    const otherAchievementInput = document.querySelector('.other-achievement-input')?.value?.trim();
    const otherAchievementDesc = document.querySelector('.other-achievement-description')?.value?.trim();
    const otherAchievementSections = document.querySelectorAll('.other-achievement-section');
    otherAchievementSections.forEach((section, idx) => {
      if (section.style.display !== 'none') {
        output += '<p><br></p><p><br></p>';
        if (otherAchievementInput) {
          output += `<h3 style="font-family: Arial; font-size: 10pt; font-weight: bold; font-style: italic; margin: 0;">${otherAchievementInput}</h3>`;
        }
        if (otherAchievementDesc) {
          output += `<p style="font-family: Arial; font-size: 10pt; margin: 0;">${otherAchievementDesc}</p>`;
        }
        output += '<table style="border-collapse: collapse; margin: 1.5rem 0; font-family: Arial; font-size: 10pt; width: auto;">';
        output += '<tr>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Index/Subtest</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Standard Score</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Confidence Interval</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Percentile Rank</th>' +
          '<th style="font-weight: bold; border: 1px solid #888; padding: 4px;">Qualitative Description</th>' +
          '</tr>';
        const indexSections = section.querySelectorAll('.other-achievement-index-section');
        indexSections.forEach(idxSection => {
          const index = idxSection.querySelector('.other-achievement-index-input')?.value || '';
          const stdScore = idxSection.querySelector('.other-achievement-std-score')?.value || '';
          const confInt = idxSection.querySelector('.other-achievement-conf-int')?.value || '';
          const percRank = idxSection.querySelector('.other-achievement-perc-rank')?.value || '';
          const qualDescSelect = idxSection.querySelector('.other-achievement-qual-desc');
          const qualDesc = qualDescSelect?.options?.[qualDescSelect.selectedIndex]?.textContent || '';
          output += `<tr>` +
            `<td style="border: 1px solid #888; padding: 4px;">${index}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${stdScore}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${confInt}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${percRank}</td>` +
            `<td style="border: 1px solid #888; padding: 4px;">${qualDesc}</td>` +
            `</tr>`;
        });
        output += '</table>';
        const summary = section.querySelector('.other-achievement-summary-results')?.value?.trim();
        if (summary) {
          output += `<p style="font-family: Arial; font-size: 10pt; margin-top: 1.5em;">${summary}</p>`;
        }
      }
    });
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

// Helper function to format yyyy-mm-dd as 'Month Day, Year'
function formatDateMDY(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  if (!year || !month || !day) return dateStr;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
}
