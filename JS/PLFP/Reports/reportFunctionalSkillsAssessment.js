// Functional Skills Assessments Report Output (PLFP)
// This file generates the output HTML for the Functional Skills Assessments section.

export function generateFunctionalSkillsAssessmentReport() {
  const root = document.getElementById('functional-skills-content');
  if (!root) return '';

  // Check which assessment groups have selections (scoped to PLFP Functional Skills)
  const ivaChecked = root.querySelector('.fsa-attention-iva')?.checked;
  const connorsChecked = root.querySelector('.fsa-attention-connors')?.checked;
  const attOtherChecked = root.querySelector('.fsa-attention-other')?.checked;

  const bascChecked = root.querySelector('.fsa-behavior-basc')?.checked;
  const byiChecked = root.querySelector('.fsa-behavior-byi')?.checked;
  const behOtherChecked = root.querySelector('.fsa-behavior-other')?.checked;

  const bascAdChecked = root.querySelector('.fsa-adaptive-basc-adaptive')?.checked;
  const vinabasChecked = root.querySelector('.fsa-adaptive-vineland-abas')?.checked;
  const adOtherChecked = root.querySelector('.fsa-adaptive-other')?.checked;

  const anySelected = (
    ivaChecked || connorsChecked || attOtherChecked ||
    bascChecked || byiChecked || behOtherChecked ||
    bascAdChecked || vinabasChecked || adOtherChecked
  );

  if (!anySelected) return '';

  const br = (n = 1) => Array.from({ length: n }).map(() => '<div><br></div>').join('');

  // Student name and pronouns with precedence: PLFP bar → PLAA → placeholders
  function getPlfpStudentInfo() {
    const namePlfp = document.getElementById('plfp-student-name')?.value?.trim();
    const proSel = document.getElementById('plfp-pronouns-select')?.value || '';
    let possPlfp = '';
    if (proSel === 'he-him') possPlfp = 'his';
    else if (proSel === 'she-her') possPlfp = 'her';
    else if (proSel === 'they-them') possPlfp = 'their';
    else if (proSel === 'other') possPlfp = document.getElementById('plfp-pro-poss')?.value?.trim() || '';
    const namePlaa = document.getElementById('firstName')?.value?.trim();
    const pronPlaa = document.getElementById('pronouns')?.value || '';
    let possPlaa = '';
    if (pronPlaa === 'Custom') possPlaa = document.getElementById('pronoun-possessive')?.value?.trim() || '';
    else if (pronPlaa) possPlaa = pronPlaa.split('/')?.[2] || '';
    const name = namePlfp || namePlaa || '[Name]';
    const poss = possPlfp || possPlaa || '[pronoun]';
    return { name, pronounPossessive: poss };
  }
  const student = getPlfpStudentInfo();
  const studentName = student.name;
  const pronounPossessive = student.pronounPossessive;

  // Date helpers
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const formatDate = (val) => {
    if (!val) return '';
    const parts = val.split('-');
    if (parts.length === 3) {
      const [y,m,d] = parts;
      const mi = parseInt(m, 10);
      const di = parseInt(d, 10);
      if (!isNaN(mi) && !isNaN(di)) return `${monthNames[mi - 1]} ${di}, ${y}`;
    }
    return val;
  };

  // Style helpers for row formatting based on index selection
  function getRowStyleForIndex(assessmentKey, indexCode) {
    // Default regular
    let isBold = false;
    let isItalic = false;
    if (!indexCode) return { isBold, isItalic };
    switch (assessmentKey) {
      case 'iva': {
        // Bold+Italic
        if (indexCode === 'faq' || indexCode === 'frcq') { isBold = true; isItalic = true; break; }
        // Italic
        if (['aaq','vaq','arcq','vrcq'].includes(indexCode)) { isItalic = true; break; }
        // Bold
        if (['saaq','svaq','fmh'].includes(indexCode)) { isBold = true; break; }
        // Regular for others (prudence, consistency, stamina, other)
        break;
      }
      case 'connors': {
        // Bold groups
        if (['content-scales','dsm-symptom-scales','global-index','adhd-index','validity-scales'].includes(indexCode)) { isBold = true; break; }
        // Italic subscales
        if (['learning-problems-subscale','executive-functioning-subscale'].includes(indexCode)) { isItalic = true; break; }
        // Regular otherwise
        break;
      }
      case 'byi2': {
        // All specified as bold, and per your note "Other" bold as well
        isBold = true; break;
      }
      case 'vinabas': {
        // Bold GAC
        if (indexCode === 'gac') { isBold = true; break; }
        // Italic for subdomains
        if (['communication','functional-academics','self-direction','leisure','social','community-use','home-living','home-and-safety','self-care'].includes(indexCode)) { isItalic = true; break; }
        // Regular for composites and motor-skills/other
        break;
      }
      default: {
        // Other assessments: treat as regular
        break;
      }
    }
    return { isBold, isItalic };
  }

  // Extend styles for BASC-3 and BASC-3 Adaptive
  (function extendBascStyles(){
    const original = getRowStyleForIndex;
    getRowStyleForIndex = function(assessmentKey, indexCode) {
      if (assessmentKey === 'basc3') {
        // Bold composites
        if (['bsi','externalizing-composite','internalizing-composite','school-composite'].includes(indexCode)) {
          return { isBold: true, isItalic: false };
        }
        return { isBold: false, isItalic: false };
      }
      if (assessmentKey === 'bascad') {
        // Bold composite; italic noted subdomains
        if (indexCode === 'adaptive-composite') return { isBold: true, isItalic: false };
        if (['study-skills','functional-communication','adl'].includes(indexCode)) return { isBold: false, isItalic: true };
        return { isBold: false, isItalic: false };
      }
      return original(assessmentKey, indexCode);
    }
  })();

  function buildBascTableHtml(kind /* 'BASC-3' | 'BASC-3 Adaptive Skills' */) {
    const isAdaptive = (kind === 'BASC-3 Adaptive Skills');
    // Build column definitions for all parent, teacher, and student forms
    const formSelector = isAdaptive ? '.bascad-form-card' : '.basc3-form-card';
    const parentContainerId = isAdaptive ? '#bascad-parent-index-cards-container' : '#basc3-parent-index-cards-container';
    const teacherContainerId = isAdaptive ? '#bascad-teacher-index-cards-container' : '#basc3-teacher-index-cards-container';
    const studentContainerId = isAdaptive ? '' : '#basc3-student-index-cards-container';
    const parentNameClass = isAdaptive ? '.bascad-parent-name' : '.basc3-parent-name';
    const teacherNameClass = isAdaptive ? '.bascad-teacher-name' : '.basc3-teacher-name';
    const studentNameClass = isAdaptive ? '' : '.basc3-student-name';

    const allForms = Array.from(root.querySelectorAll(formSelector));
    const colDefs = [];
    // First add all parent forms, then teacher forms, then student forms for consistent ordering
    allForms.forEach(f => {
      const cont = f.querySelector(parentContainerId);
      if (cont) {
        const nm = (f.querySelector(parentNameClass)?.value || '').trim();
        colDefs.push({ type: 'parent', name: nm, container: cont });
      }
    });
    allForms.forEach(f => {
      const cont = f.querySelector(teacherContainerId);
      if (cont) {
        const nm = (f.querySelector(teacherNameClass)?.value || '').trim();
        colDefs.push({ type: 'teacher', name: nm, container: cont });
      }
    });
    if (!isAdaptive) {
      allForms.forEach(f => {
        const cont = f.querySelector(studentContainerId);
        if (cont) {
          const nm = (f.querySelector(studentNameClass)?.value || '').trim();
          colDefs.push({ type: 'student', name: nm, container: cont });
        }
      });
    }

    if (colDefs.length === 0) return '';

    // Collect indexes and values per column
    const rowMap = new Map(); // key: indexDisplay -> { style, values: string[] }
    const ensureRow = (indexDisplay, style) => {
      if (!rowMap.has(indexDisplay)) {
        rowMap.set(indexDisplay, { style, values: Array(colDefs.length).fill('') });
      }
      return rowMap.get(indexDisplay);
    };

    colDefs.forEach((col, colIdx) => {
      const selCard = col.container.querySelectorAll(isAdaptive ? '.bascad-index-card' : '.basc3-index-card');
      selCard.forEach(card => {
        const codeSel = card.querySelector(isAdaptive ? '.bascad-index-select' : '.basc3-index-select');
        const code = codeSel?.value || '';
        const otherInput = card.querySelector(isAdaptive ? '.bascad-index-other-input' : '.basc3-index-other-input');
        const dropdownTextSel = card.querySelector(isAdaptive ? '.bascad-index-dropdown .custom-dropdown-selected' : '.basc3-index-dropdown .custom-dropdown-selected');
        const indexDisplay = (code === 'other' ? (otherInput?.value?.trim() || 'Other') : (dropdownTextSel?.textContent || '').trim());

        const score = (card.querySelector(isAdaptive ? '.bascad-score' : '.basc3-score')?.value || '').trim();
        const qdSel = card.querySelector(isAdaptive ? '.bascad-qual-desc' : '.basc3-qual-desc');
        let qd = (qdSel?.value || '').trim();
        if (qd === 'Other') {
          const qdOther = card.querySelector(isAdaptive ? '.bascad-qual-desc-other' : '.basc3-qual-desc-other');
          qd = (qdOther?.value || '').trim();
        }
        const cellVal = [score, qd].filter(Boolean).join('<br/>');
        const style = getRowStyleForIndex(isAdaptive ? 'bascad' : 'basc3', code);
        const row = ensureRow(indexDisplay, style);
        row.values[colIdx] = cellVal;
      });
    });

    if (rowMap.size === 0) return '';

    // Build table
    let html = '<table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; margin:0.5rem 0 0 0; width:auto;">';
    html += '<tr>';
    html += '<th style="text-align:center; font-weight:bold; font-size:12pt;">Index</th>';
    colDefs.forEach(col => {
      const who = col.type === 'parent' ? 'Parent Rating' : (col.type === 'teacher' ? 'Teacher Rating' : 'Student Rating');
      html += `<th style="text-align:center; font-weight:bold; font-size:12pt;">${who}${col.name ? '<br/>(' + col.name + ')' : ''}</th>`;
    });
    html += '</tr>';

    // Preserve order by walking cards in column order
    const orderedKeys = [];
    const pushUnique = (key) => { if (!orderedKeys.includes(key)) orderedKeys.push(key); };
    colDefs.forEach(col => {
      const cards = col.container.querySelectorAll(isAdaptive ? '.bascad-index-card' : '.basc3-index-card');
      cards.forEach(card => {
        const code = card.querySelector(isAdaptive ? '.bascad-index-select' : '.basc3-index-select')?.value || '';
        const otherInput = card.querySelector(isAdaptive ? '.bascad-index-other-input' : '.basc3-index-other-input');
        const dropdownTextSel = card.querySelector(isAdaptive ? '.bascad-index-dropdown .custom-dropdown-selected' : '.basc3-index-dropdown .custom-dropdown-selected');
        const indexDisplay = (code === 'other' ? (otherInput?.value?.trim() || 'Other') : (dropdownTextSel?.textContent || '').trim());
        if (rowMap.has(indexDisplay)) pushUnique(indexDisplay);
      });
    });

    orderedKeys.forEach(key => {
      const row = rowMap.get(key);
      const styleBits = [];
      if (row.style?.isBold) styleBits.push('font-weight:bold');
      if (row.style?.isItalic) styleBits.push('font-style:italic');
      const rowStyle = styleBits.join(';');
      html += '<tr>';
      html += `<td style="text-align:center; ${rowStyle}">${key}</td>`;
      row.values.forEach(val => {
        html += `<td style="text-align:center; ${rowStyle}">${val || ''}</td>`;
      });
      html += '</tr>';
    });

    html += '</table>';
    return html;
  }

  function buildTableHeadersFor(item) {
    // Returns array of 5 headers
    if (item === 'IVA-2' || item === 'Vineland/ABAS-3') {
      return ['Index', 'Standard Score', 'Confidence Interval', 'Percentile', 'Qualitative Description'];
    }
    if (item === 'Connors-3' || item === 'BYI-II') {
      return ['Index', 'T-Score', 'Confidence Interval', 'Percentile', 'Qualitative Description'];
    }
    // Other assessments
    return ['Index', 'Score', 'Confidence Interval', 'Percentile Rank', 'Qualitative Description'];
  }

  function getSelectedIndexTextFromCard(card, key) {
    if (!card) return '';
    if (key === 'iva') return (card.querySelector('.iva-index-dropdown .custom-dropdown-selected')?.textContent || '').trim();
    if (key === 'connors') return (card.querySelector('.connors-index-dropdown .custom-dropdown-selected')?.textContent || '').trim();
    if (key === 'byi2') return (card.querySelector('.byi2-index-dropdown .custom-dropdown-selected')?.textContent || '').trim();
    if (key === 'vinabas') return (card.querySelector('.vinabas-index-dropdown .custom-dropdown-selected')?.textContent || '').trim();
    return '';
  }

  function buildRowsFor(item) {
    // Build data rows based on assessment item name; returns array of row objects: {cells:[...], style:{isBold,isItalic}}
    const rows = [];
    if (item === 'IVA-2') {
      const cards = root.querySelectorAll('#iva-index-cards-container .iva-index-card');
      cards.forEach(card => {
        const code = card.querySelector('.iva-index-select')?.value || '';
        const indexText = code === 'other' ? (card.querySelector('.iva-index-other-input')?.value?.trim() || 'Other') : getSelectedIndexTextFromCard(card, 'iva');
        const std = card.querySelector('.iva-std-score')?.value?.trim() || '';
        const ci = card.querySelector('.iva-conf-int')?.value?.trim() || '';
        const pct = card.querySelector('.iva-percentile')?.value?.trim() || '';
        const qdSel = card.querySelector('.iva-qual-desc')?.value || '';
        const qd = qdSel === 'Other' ? (card.querySelector('.iva-qual-desc-other')?.value?.trim() || 'Other') : qdSel;
        rows.push({ cells: [indexText, std, ci, pct, qd], style: getRowStyleForIndex('iva', code) });
      });
      return rows;
    }
    if (item === 'Connors-3') {
      const cards = root.querySelectorAll('#connors-index-cards-container .connors-index-card');
      cards.forEach(card => {
        const code = card.querySelector('.connors-index-select')?.value || '';
        const indexText = code === 'other' ? (card.querySelector('.connors-index-other-input')?.value?.trim() || 'Other') : getSelectedIndexTextFromCard(card, 'connors');
        const t = card.querySelector('.connors-t-score')?.value?.trim() || '';
        const ci = card.querySelector('.connors-conf-int')?.value?.trim() || '';
        const pct = card.querySelector('.connors-percentile')?.value?.trim() || '';
        const qdSel = card.querySelector('.connors-qual-desc')?.value || '';
        const qd = qdSel === 'Other' ? (card.querySelector('.connors-qual-desc-other')?.value?.trim() || 'Other') : qdSel;
        rows.push({ cells: [indexText, t, ci, pct, qd], style: getRowStyleForIndex('connors', code) });
      });
      return rows;
    }
    if (item === 'BYI-II') {
      const cards = root.querySelectorAll('#byi2-index-cards-container .byi2-index-card');
      cards.forEach(card => {
        const code = card.querySelector('.byi2-index-select')?.value || '';
        const indexText = code === 'other' ? (card.querySelector('.byi2-index-other-input')?.value?.trim() || 'Other') : getSelectedIndexTextFromCard(card, 'byi2');
        const t = card.querySelector('.byi2-t-score')?.value?.trim() || '';
        const ci = card.querySelector('.byi2-conf-int')?.value?.trim() || '';
        const pct = card.querySelector('.byi2-percentile')?.value?.trim() || '';
        const qdSel = card.querySelector('.byi2-qual-desc')?.value || '';
        const qd = qdSel === 'Other' ? (card.querySelector('.byi2-qual-desc-other')?.value?.trim() || 'Other') : qdSel;
        rows.push({ cells: [indexText, t, ci, pct, qd], style: getRowStyleForIndex('byi2', code) });
      });
      return rows;
    }
    if (item === 'ABAS-3') {
      const cards = root.querySelectorAll('#vinabas-index-cards-container .vinabas-index-card');
      cards.forEach(card => {
        const code = card.querySelector('.vinabas-index-select')?.value || '';
        const indexText = code === 'other' ? (card.querySelector('.vinabas-index-other-input')?.value?.trim() || 'Other') : getSelectedIndexTextFromCard(card, 'vinabas');
        const std = card.querySelector('.vinabas-std-score')?.value?.trim() || '';
        const ci = card.querySelector('.vinabas-conf-int')?.value?.trim() || '';
        const pct = card.querySelector('.vinabas-percentile')?.value?.trim() || '';
        const qdSel = card.querySelector('.vinabas-qual-desc')?.value || '';
        const qd = qdSel === 'Other' ? (card.querySelector('.vinabas-qual-desc-other')?.value?.trim() || 'Other') : qdSel;
        rows.push({ cells: [indexText, std, ci, pct, qd], style: getRowStyleForIndex('vinabas', code) });
      });
      return rows;
    }
    // Other assessments: need to locate the specific card by its assessment name (the h3 label)
    // Try Attention Other
    const otherAttCards = root.querySelectorAll('#other-attention-assessments-container .other-attention-assessment-card');
    for (const card of otherAttCards) {
      const name = card.querySelector('.other-attention-assessment-name')?.value?.trim();
      if (name === item) {
        const idxCards = card.querySelectorAll('.other-attention-index-card');
        idxCards.forEach(ic => {
          const idx = ic.querySelector('.other-attention-index-input')?.value?.trim() || '';
          const s = ic.querySelector('.other-attention-score')?.value?.trim() || '';
          const ci = ic.querySelector('.other-attention-conf-int')?.value?.trim() || '';
          const pct = ic.querySelector('.other-attention-percentile')?.value?.trim() || '';
          const qd = ic.querySelector('.other-attention-qual-desc')?.value?.trim() || '';
          rows.push({ cells: [idx, s, ci, pct, qd], style: { isBold: false, isItalic: false } });
        });
        return rows;
      }
    }
    // Try Behavior Other
    const otherBehCards = root.querySelectorAll('#other-behavior-assessments-container .other-behavior-assessment-card');
    for (const card of otherBehCards) {
      const name = card.querySelector('.other-behavior-assessment-name')?.value?.trim();
      if (name === item) {
        const idxCards = card.querySelectorAll('.other-behavior-index-card');
        idxCards.forEach(ic => {
          const idx = ic.querySelector('.other-behavior-index-input')?.value?.trim() || '';
          const s = ic.querySelector('.other-behavior-score')?.value?.trim() || '';
          const ci = ic.querySelector('.other-behavior-conf-int')?.value?.trim() || '';
          const pct = ic.querySelector('.other-behavior-percentile')?.value?.trim() || '';
          const qd = ic.querySelector('.other-behavior-qual-desc')?.value?.trim() || '';
          rows.push({ cells: [idx, s, ci, pct, qd], style: { isBold: false, isItalic: false } });
        });
        return rows;
      }
    }
    // Try Adaptive Other
    const otherAdCards = root.querySelectorAll('#other-adaptive-assessments-container .other-adaptive-assessment-card');
    for (const card of otherAdCards) {
      const name = card.querySelector('.other-adaptive-assessment-name')?.value?.trim();
      if (name === item) {
        const idxCards = card.querySelectorAll('.other-adaptive-index-card');
        idxCards.forEach(ic => {
          const idx = ic.querySelector('.other-adaptive-index-input')?.value?.trim() || '';
          const s = ic.querySelector('.other-adaptive-score')?.value?.trim() || '';
          const ci = ic.querySelector('.other-adaptive-conf-int')?.value?.trim() || '';
          const pct = ic.querySelector('.other-adaptive-percentile')?.value?.trim() || '';
          const qd = ic.querySelector('.other-adaptive-qual-desc')?.value?.trim() || '';
          rows.push({ cells: [idx, s, ci, pct, qd], style: { isBold: false, isItalic: false } });
        });
        return rows;
      }
    }
    return rows;
  }

  function buildResultsTableHtml(item) {
    if (item === 'BASC-3' || item === 'BASC-3 Adaptive Skills') return '';
    const headers = buildTableHeadersFor(item);
    const rows = buildRowsFor(item);
    if (!rows.length) return '';
    let html = '<table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; margin:0.5rem 0 0 0; width:auto;">';
    // Header row 12pt bold centered
    html += '<tr>' + headers.map(h => `<th style="text-align:center; font-weight:bold; font-size:12pt;">${h}</th>`).join('') + '</tr>';
    // Data rows
    rows.forEach(r => {
      const styleBits = [];
      if (r.style?.isBold) styleBits.push('font-weight:bold');
      if (r.style?.isItalic) styleBits.push('font-style:italic');
      const rowStyle = styleBits.join(';');
      html += '<tr>' + r.cells.map(c => `<td style="text-align:center; ${rowStyle}">${c || ''}</td>`).join('') + '</tr>';
    });
    html += '</table>';
    return html;
  }

  // Build section items in order
  const attentionItems = [];
  if (ivaChecked) attentionItems.push('IVA-2');
  if (connorsChecked) attentionItems.push('Connors-3');
  if (attOtherChecked) {
    const otherCards = root.querySelectorAll('#other-attention-assessments-container .other-attention-assessment-card');
    otherCards.forEach(card => {
      const name = card.querySelector('.other-attention-assessment-name')?.value?.trim();
      attentionItems.push(name || 'Other Attention & Executive Functioning Assessment');
    });
  }

  const behaviorItems = [];
  if (bascChecked) {
    behaviorItems.push('BASC-3');
  }
  if (byiChecked) behaviorItems.push('BYI-II');
  if (behOtherChecked) {
    const otherCards = root.querySelectorAll('#other-behavior-assessments-container .other-behavior-assessment-card');
    otherCards.forEach(card => {
      const name = card.querySelector('.other-behavior-assessment-name')?.value?.trim();
      behaviorItems.push(name || 'Other Behavioral & Emotional Functioning Assessment');
    });
  }

  const adaptiveItems = [];
  if (bascAdChecked) {
    adaptiveItems.push('BASC-3 Adaptive Skills');
  }
  if (vinabasChecked) adaptiveItems.push('ABAS-3');
  if (adOtherChecked) {
    const otherCards = root.querySelectorAll('#other-adaptive-assessments-container .other-adaptive-assessment-card');
    otherCards.forEach(card => {
      const name = card.querySelector('.other-adaptive-assessment-name')?.value?.trim();
      adaptiveItems.push(name || 'Other Adaptive & Functional Skills Assessment');
    });
  }

  // Compose output
  let output = br(6) + '<h1>Functional Skills Assessments</h1>';
  // Intro paragraph directly below the h1 (no blank line)
  output += `<p>A review of ${studentName}'s most recent report indicates that ${pronounPossessive} functional skills were assessed. A summary of this information is described below.</p>`;

  const sections = [
    { title: 'Attention & Executive Functioning Assessments', items: attentionItems },
    { title: 'Behavioral & Emotional Functioning Assessments', items: behaviorItems },
    { title: 'Adaptive & Functional Skills Assessments', items: adaptiveItems }
  ];

  let sectionCount = 0;
  sections.forEach(section => {
    if (!section.items.length) return;
    // Spacing: 2 spaces above first h2, 6 above subsequent h2
    output += sectionCount === 0 ? br(2) : br(6);
    output += `<h2>${section.title}</h2>`;

    let itemCount = 0;
    section.items.forEach(item => {
      // Spacing: 2 above first h3 in section, 4 above subsequent h3
      output += itemCount === 0 ? br(2) : br(4);
      output += `<h3>${item}</h3>`;

      // Intro paragraph beneath h3 (no extra blank)
      let dateText = '';
      if (item === 'IVA-2') {
        dateText = formatDate(root.querySelector('.iva-date-input')?.value);
      } else if (item === 'Connors-3') {
        dateText = formatDate(root.querySelector('.connors-date-input')?.value);
      } else if (item === 'BASC-3') {
        const dates = Array.from(root.querySelectorAll('.basc3-date-input')).map(i => i.value).filter(Boolean);
        if (dates.length >= 1) {
          // Use only the year
          dateText = (dates[0].split('-')[0]) || '';
        }
      } else if (item === 'BYI-II') {
        dateText = formatDate(root.querySelector('.byi2-date-input')?.value);
      } else if (item === 'BASC-3 Adaptive Skills') {
        const dates = Array.from(root.querySelectorAll('.bascad-date-input')).map(i => i.value).filter(Boolean);
        if (dates.length >= 1) {
          // Use only the year
          dateText = (dates[0].split('-')[0]) || '';
        }
      } else if (item === 'ABAS-3') {
        dateText = formatDate(root.querySelector('.vinabas-date-input')?.value);
      }

      const useIn = (item === 'BASC-3' || item === 'BASC-3 Adaptive Skills');
      const dateClause = dateText ? `${useIn ? ' in ' : ' on '}${dateText}` : '';
      const assessmentName = item;
      // For "Other" assessments, include the user-provided Assessment Description inline after the sentence
      let otherDesc = '';
      if (assessmentName && assessmentName !== 'IVA-2' && assessmentName !== 'Connors-3' && assessmentName !== 'BASC-3' && assessmentName !== 'BYI-II' && assessmentName !== 'BASC-3 Adaptive Skills' && assessmentName !== 'ABAS-3') {
        // Try Attention Other
        const otherAttCards = root.querySelectorAll('#other-attention-assessments-container .other-attention-assessment-card');
        otherAttCards.forEach(card => {
          const name = card.querySelector('.other-attention-assessment-name')?.value?.trim();
          if (name === assessmentName) {
            const html = card.querySelector('.other-attention-desc-quill .ql-editor')?.innerHTML?.trim();
            otherDesc = html || '';
          }
        });
        // Try Behavior Other
        if (!otherDesc) {
          const otherBehCards = root.querySelectorAll('#other-behavior-assessments-container .other-behavior-assessment-card');
          otherBehCards.forEach(card => {
            const name = card.querySelector('.other-behavior-assessment-name')?.value?.trim();
            if (name === assessmentName) {
              const html = card.querySelector('.other-behavior-desc-quill .ql-editor')?.innerHTML?.trim();
              otherDesc = html || '';
            }
          });
        }
        // Try Adaptive Other
        if (!otherDesc) {
          const otherAdCards = root.querySelectorAll('#other-adaptive-assessments-container .other-adaptive-assessment-card');
          otherAdCards.forEach(card => {
            const name = card.querySelector('.other-adaptive-assessment-name')?.value?.trim();
            if (name === assessmentName) {
              const html = card.querySelector('.other-adaptive-desc-quill .ql-editor')?.innerHTML?.trim();
              otherDesc = html || '';
            }
          });
        }
      }
      // Descriptions for known assessments
      const descMap = {
        'IVA-2': 'The Integrated Visual and Auditory Continuous Performance Test, 2nd Edition (IVA-2) assessment measures attention and response control across visual and auditory modalities. It provides information about focus, impulsivity, and sustained attention, helping identify patterns related to ADHD and executive functioning.',
        'Connors-3': 'The Conners-3 is a standardized rating scale completed by parents, teachers, and/or students to assess behaviors commonly associated with ADHD and related concerns. It evaluates attention, hyperactivity/impulsivity, learning problems, executive functioning, and social/behavioral difficulties.',
        'BASC-3': 'The Behavior Assessment System for Children, 3rd Edition (BASC-3) is a broad behavior rating scale that examines externalizing and internalizing behaviors, school problems, and adaptive skills. Input from parents, teachers, and/or the student provides a comprehensive picture of social, emotional, and behavioral functioning.',
        'BYI-II': 'The Beck Youth Inventory, 2nd Edition (BYI-II) assessment consists of five self-report inventories that measure a child’s or adolescent’s perceptions of self-concept, anxiety, depression, anger, and disruptive behavior. It helps identify emotional or behavioral concerns that may impact daily functioning.',
        'ABAS-3': 'The Adaptive Behavior Assessment System, 3rd Edition (ABAS-3) is a rating scale that evaluates adaptive functioning across conceptual, social, and practical domains. It identifies strengths and needs in real-life skills such as communication, self-care, and community use, which are important for independence.'
      };
      const standardDesc = descMap[assessmentName] || '';
      output += `<p>${studentName} was assessed using the ${assessmentName}${dateClause}. ${standardDesc ? standardDesc + ' ' : ''}A summary of ${studentName}'s results is described below.</p>`;
      if (otherDesc) output += otherDesc;

      // Table of Results (next line after description)
      const tableHtml = (item === 'BASC-3' || item === 'BASC-3 Adaptive Skills') ? buildBascTableHtml(item) : buildResultsTableHtml(item);
      if (tableHtml) output += tableHtml;

      // Summary of results (no heading)
      let summaryHtml = '';
      if (item === 'IVA-2') {
        summaryHtml = root.querySelector('#iva-summary-quill .ql-editor')?.innerHTML?.trim() || '';
      } else if (item === 'Connors-3') {
        summaryHtml = root.querySelector('#connors-summary-quill .ql-editor')?.innerHTML?.trim() || '';
      } else if (item === 'BASC-3') {
        summaryHtml = root.querySelector('#basc3-summary-quill .ql-editor')?.innerHTML?.trim() || '';
      } else if (item === 'BYI-II') {
        summaryHtml = root.querySelector('#byi2-summary-quill .ql-editor')?.innerHTML?.trim() || '';
      } else if (item === 'BASC-3 Adaptive Skills') {
        summaryHtml = root.querySelector('#bascad-summary-quill .ql-editor')?.innerHTML?.trim() || '';
      } else if (item === 'ABAS-3') {
        summaryHtml = root.querySelector('#vinabas-summary-quill .ql-editor')?.innerHTML?.trim() || '';
      } else {
        // Handle Other assessments: try to match by name across the three containers
        const getSummaryFromCards = (containerSel, nameSel, summarySel, fallbackItemLabel) => {
          const cards = root.querySelectorAll(containerSel);
          if (!cards.length) return '';
          // First pass: exact name match
          for (const card of cards) {
            const nm = card.querySelector(nameSel)?.value?.trim();
            if (nm && nm === item) {
              const html = card.querySelector(summarySel + ' .ql-editor')?.innerHTML?.trim();
              if (html) return html;
            }
          }
          // Fallback: if item equals the generic label and no names populated, use the first card's summary
          if (item.startsWith('Other') || item === fallbackItemLabel) {
            const first = cards[0];
            const html = first.querySelector(summarySel + ' .ql-editor')?.innerHTML?.trim();
            if (html) return html;
          }
          return '';
        };
        summaryHtml =
          getSummaryFromCards('#other-attention-assessments-container .other-attention-assessment-card', '.other-attention-assessment-name', '.other-attention-summary-quill', 'Other Attention & Executive Functioning Assessment') ||
          getSummaryFromCards('#other-behavior-assessments-container .other-behavior-assessment-card', '.other-behavior-assessment-name', '.other-behavior-summary-quill', 'Other Behavioral & Emotional Functioning Assessment') ||
          getSummaryFromCards('#other-adaptive-assessments-container .other-adaptive-assessment-card', '.other-adaptive-assessment-name', '.other-adaptive-summary-quill', 'Other Adaptive & Functional Skills Assessment');
      }
      if (summaryHtml) output += summaryHtml;

      itemCount += 1;
    });

    sectionCount += 1;
  });

  return output;
} 