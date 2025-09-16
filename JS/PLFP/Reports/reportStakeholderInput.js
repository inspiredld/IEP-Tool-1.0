// Stakeholder Input Report Output (PLFP)
// This file generates the output HTML for the Stakeholder Input section, including General Ed, Special Ed, and Related Service Provider inputs.

export function generateStakeholderInputReport() {
  // Helper: get student info with precedence (PLFP → PLAA → placeholders)
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
  const studentName = student.name;
  // Checkbox selectors
  const studentChecked = document.querySelector('.stakeholder-toggle[data-target="studentInputContent"]')?.checked;
  const nurseChecked = document.querySelector('.stakeholder-toggle[data-target="nurseInputContent"]')?.checked;
  const guidanceChecked = document.querySelector('.stakeholder-toggle[data-target="guidanceInputContent"]')?.checked;
  const caseManagerChecked = document.querySelector('.stakeholder-toggle[data-target="caseManagerInputContent"]')?.checked;
  const genEdChecked = document.querySelector('.stakeholder-toggle[data-target="genEdInputContent"]')?.checked;
  const specEdChecked = document.querySelector('.stakeholder-toggle[data-target="specEdInputContent"]')?.checked;
  const providerChecked = document.querySelector('.stakeholder-toggle[data-target="relatedServiceInputContent"]')?.checked;
  const otherStakeholderChecked = document.querySelector('.stakeholder-toggle[data-target="otherStakeholderContent"]')?.checked;

  // Initialize output string BEFORE any usage
  let output = '';

  // Build stakeholder list
  const stakeholders = [];
  if (studentChecked) {
    stakeholders.push(studentName);
  }
  if (nurseChecked) stakeholders.push('a district nurse');
  if (guidanceChecked) stakeholders.push(`${studentName}'s guidance counselor`);
  if (caseManagerChecked) stakeholders.push('case manager');
  if (genEdChecked) stakeholders.push('general education teachers');
  if (specEdChecked) stakeholders.push('special education teachers');
  if (providerChecked) stakeholders.push('Related Service Provider(s)');

  let intro = `Input about ${studentName}'s performance and progress was gathered from relevant stakeholders, including: `;
  if (stakeholders.length > 0) {
    intro += stakeholders.join(', ').replace(/, ([^,]*)$/, ', and $1') + '.';
  } else {
    intro += 'none selected.';
  }

  output += '<h1>Stakeholder Input</h1>';
  output += `<p>${intro}</p>`;
  // If Student Input is selected, add <h2>Student Input</h2> with 2 blank rows above
  if (studentChecked) {
    output += '<div><br></div><div><br></div><h2>Student Input</h2>';
    // Get the date from the student input date field
    const studentInputDate = document.querySelector('.student-input-date')?.value;
    let formattedDate = '[date]';
    if (studentInputDate) {
      const [year, month, day] = studentInputDate.split('-');
      if (year && month && day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        formattedDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
      } else {
        formattedDate = studentInputDate;
      }
    }
    output += `<p>${studentName} completed the <i>Student Input Form</i> on ${formattedDate} and reported the following:</p>`;

    // Student Input details (4 type boxes)
    const interestsText = document.querySelector('#student-interests-quill .ql-editor')?.innerText?.trim();
    const postsecondaryText = document.querySelector('#student-postsecondary-quill .ql-editor')?.innerText?.trim();
    const concernsText = document.querySelector('#student-concerns-quill .ql-editor')?.innerText?.trim();
    const otherText = document.querySelector('#student-other-quill .ql-editor')?.innerText?.trim();

    if (interestsText) {
      output += '<div><br></div><h3>Interests, Strengths, and Needs</h3>';
      output += `<p>${interestsText}</p>`;
    }
    if (postsecondaryText) {
      output += '<div><br></div><h3>Post-Secondary Plans</h3>';
      output += `<p>${postsecondaryText}</p>`;
    }
    if (concernsText) {
      output += '<div><br></div><h3>Concerns for this IEP</h3>';
      output += `<p>${concernsText}</p>`;
    }
    if (otherText) {
      output += '<div><br></div><h3>Other Information</h3>';
      output += `<p>${otherText}</p>`;
    }
  }
  // Nurse Input section
  if (nurseChecked) {
    output += '<div><br></div><div><br></div><div><br></div><div><br></div><h2>Nurse Input</h2>';
    // Get nurse's name and date
    const nurseName = document.querySelector('.nurse-input-provided-by')?.value?.trim() || '[nurse name]';
    const nurseInputDate = document.querySelector('.nurse-input-date')?.value;
    let nurseFormattedDate = '[date]';
    if (nurseInputDate) {
      const [year, month, day] = nurseInputDate.split('-');
      if (year && month && day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        nurseFormattedDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
      } else {
        nurseFormattedDate = nurseInputDate;
      }
    }
    output += `<p>${studentName}'s physical and medical history was provided by ${nurseName} on ${nurseFormattedDate}. A summary is reported below:</p>`;
    // Add a blank line and then the student summary
    // Get grade and format as 1st, 2nd, 3rd, etc
    const gradeRaw = document.getElementById('grade')?.value?.trim();
    function ordinalSuffix(n) {
      if (!n) return '';
      const s = ["th", "st", "nd", "rd"], v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }
    let grade = gradeRaw;
    if (gradeRaw && !isNaN(Number(gradeRaw))) {
      grade = ordinalSuffix(Number(gradeRaw));
    }
    // Get date of birth
    const dob = document.querySelector('.nurse-input-dob')?.value;
    let dobFormatted = '[date of birth]';
    if (dob) {
      const [year, month, day] = dob.split('-');
      if (year && month && day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        dobFormatted = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
      } else {
        dobFormatted = dob;
      }
    }
    // Hearing screening
    const hearingDate = document.querySelector('.nurse-input-hearing-date')?.value;
    let hearingDateFormatted = '[date]';
    if (hearingDate) {
      const [year, month, day] = hearingDate.split('-');
      if (year && month && day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        hearingDateFormatted = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
      } else {
        hearingDateFormatted = hearingDate;
      }
    }
    const hearingResult = document.querySelector('.nurse-input-hearing-result')?.value || '[result]';
    // Vision screening
    const visionDate = document.querySelector('.nurse-input-vision-date')?.value;
    let visionDateFormatted = '[date]';
    if (visionDate) {
      const [year, month, day] = visionDate.split('-');
      if (year && month && day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        visionDateFormatted = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
      } else {
        visionDateFormatted = visionDate;
      }
    }
    const visionResult = document.querySelector('.nurse-input-vision-result')?.value || '[result]';
    output += '<div><br></div>';
    // Determine 'a' or 'an' for grade
    function aOrAn(word) {
      return /^[aeiou]/i.test(word) ? 'an' : 'a';
    }
    let gradeArticle = grade ? aOrAn(grade) : 'a';
    output += `<p>${studentName} is ${gradeArticle} ${grade}-grade student born ${dobFormatted}. A <i>hearing screening</i> was administered on ${hearingDateFormatted} and ${hearingResult}. A <i>vision screening</i> was administered on ${visionDateFormatted} and ${visionResult}.</p>`;
    // Diagnoses, illnesses, surgeries, allergies
    const diagnosisDropdown = document.querySelector('.nurse-input-diagnosis-dropdown')?.value;
    const diagnosisDesc = document.querySelector('.nurse-input-diagnosis-desc')?.value?.trim();
    let diagnosisSentence = '';
    if (diagnosisDropdown === 'yes') {
      diagnosisSentence = `${nurseName} reports that ${studentName} has educationally relevant diagnoses, illnesses, surgeries or allergies`;
      if (diagnosisDesc) {
        diagnosisSentence += `, which include(s): ${diagnosisDesc}.`;
      } else {
        diagnosisSentence += '.';
      }
    } else if (diagnosisDropdown === 'no') {
      diagnosisSentence = `${nurseName} reports that ${studentName} does not have educationally relevant diagnoses, illnesses, surgeries or allergies.`;
    }
    if (diagnosisSentence) {
      output += `<p>${diagnosisSentence}</p>`;
    }
    // Documented medications
    const medicationDropdown = document.querySelector('.nurse-input-medication-dropdown')?.value;
    const medicationDesc = document.querySelector('.nurse-input-medication-desc')?.value?.trim();
    let medicationSentence = '';
    if (medicationDropdown === 'yes') {
      medicationSentence = `${nurseName} reports that ${studentName} has documented medication(s)`;
      if (medicationDesc) {
        medicationSentence += `, which include(s): ${medicationDesc}.`;
      } else {
        medicationSentence += '.';
      }
    } else if (medicationDropdown === 'no') {
      medicationSentence = `${nurseName} reports that ${studentName} does not have documented medication(s).`;
    }
    if (medicationSentence) {
      output += `<p>${medicationSentence}</p>`;
    }
    // Other information
    const otherInfoDropdown = document.querySelector('.nurse-input-otherinfo-dropdown')?.value;
    const otherInfoDesc = document.querySelector('.nurse-input-otherinfo-desc')?.value?.trim();
    if (otherInfoDropdown === 'yes' && otherInfoDesc) {
      output += `<p>${otherInfoDesc}</p>`;
    }
  }
  // Guidance Counselor Input section
  if (guidanceChecked) {
    // Four blank rows above heading
    output += '<div><br></div><div><br></div><div><br></div><div><br></div><h2>Guidance Counselor Input</h2>';
    // Guidance counselor name and date from inputs
    const guidanceName = document.querySelector('.guidance-input-name')?.value?.trim() || '[Guidance Counselor Name]';
    const guidanceDateRaw = document.querySelector('.guidance-input-date')?.value;
    let guidanceDate = '[Date of Input]';
    if (guidanceDateRaw) {
      const [year, month, day] = guidanceDateRaw.split('-');
      if (year && month && day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        guidanceDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
      } else {
        guidanceDate = guidanceDateRaw;
      }
    }
    // Template sentence on the next row after heading
    output += `<p>${studentName}'s Guidance Counselor, ${guidanceName}, provided input on ${guidanceDate}. A summary is provided below:</p>`;
    // One blank row before counselor input details
    output += '<div><br></div>';
    // Counselor Input content from Quill editor
    const counselorHtml = document.querySelector('#guidance-input-quill .ql-editor')?.innerHTML?.trim();
    const counselorTextOnly = document.querySelector('#guidance-input-quill .ql-editor')?.innerText?.trim();
    if (counselorHtml && counselorTextOnly && counselorTextOnly !== '') {
      output += counselorHtml;
    }
  }
  // Case Manager Input section
  if (caseManagerChecked) {
    output += '<div><br></div><div><br></div><div><br></div><div><br></div><h2>Case Manager Input</h2>';
    // Case manager name and date
    const caseManagerName = document.querySelector('.case-manager-input-name')?.value?.trim() || '[case manager name]';
    const cmDateRaw = document.querySelector('.case-manager-input-date')?.value;
    let cmDate = '[date]';
    if (cmDateRaw) {
      const [year, month, day] = cmDateRaw.split('-');
      if (year && month && day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        cmDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
      } else {
        cmDate = cmDateRaw;
      }
    }
    // Introductory sentence
    output += `<p>${studentName}'s case manager, ${caseManagerName}, provided input on ${cmDate}. A summary is described below.</p>`;

    // One blank row, then Current Programming subheading
    output += '<div><br></div><h3>Current Programming</h3>';

    // Assemble programming details line
    const supportLevel = document.querySelector('.case-manager-support-level')?.value?.trim() || '[support level]';
    let supportType = document.querySelector('.case-manager-support-type')?.value?.trim() || '[support type]';
    if (supportType === 'Other') {
      const supportTypeDesc = document.querySelector('.case-manager-support-type-desc')?.value?.trim();
      if (supportTypeDesc) supportType = supportTypeDesc;
    }
    const genEdClasses = document.querySelector('.case-manager-gened-classes')?.value?.trim() || '[list classes]';
    const spedClasses = document.querySelector('.case-manager-sped-classes')?.value?.trim() || '[list supports]';

    // Subject pronoun from PLAA pronouns select
    const pronounSubject = student.pronounSubject;

    output += `<p>${studentName} receives ${supportLevel} ${supportType} and attends the following General Education classes: ${genEdClasses}. ${pronounSubject} receives Special Education services/supports through ${spedClasses}.</p>`;

    // Optional: Additional Programming Information
    const addProgHtml = document.querySelector('#case-manager-additional-programming-quill .ql-editor')?.innerHTML?.trim();
    const addProgText = document.querySelector('#case-manager-additional-programming-quill .ql-editor')?.innerText?.trim();
    if (addProgHtml && addProgText) {
      output += addProgHtml;
    }

    // One blank row, then Current Performance subheading
    output += '<div><br></div><h3>Current Performance</h3>';

    // Strengths and Needs
    const strengths = document.querySelector('.case-manager-strengths')?.value?.trim() || '[strengths]';
    const needs = document.querySelector('.case-manager-needs')?.value?.trim() || '[needs]';

    // Possessive pronoun from PLAA pronouns select
    const pronounPossessive = student.pronounPossessive || 'Their';

    output += `<p>${studentName}'s strengths were assessed through input from teachers, caregivers, and discussions with ${studentName}. Based on the information gathered from these sources, ${studentName} demonstrates strengths in areas such as: ${strengths}. ${pronounPossessive} needs include: ${needs}.</p>`;

    // Optional: Additional Performance Information
    const addPerfHtml = document.querySelector('#case-manager-additional-performance-quill .ql-editor')?.innerHTML?.trim();
    const addPerfText = document.querySelector('#case-manager-additional-performance-quill .ql-editor')?.innerText?.trim();
    if (addPerfHtml && addPerfText) {
      output += addPerfHtml;
    }
  }
  // General Education Teacher Input section
  if (genEdChecked) {
    output += '<div><br></div><div><br></div><div><br></div><div><br></div><h2>General Education Teacher Input</h2>';
    // Names summary line directly under heading
    const genEdBlocksForNames = document.querySelectorAll('#gened-teacher-inputs-container .gened-teacher-input-block');
    const teacherItems = Array.from(genEdBlocksForNames).map(block => {
      const first = block.querySelector('.gened-teacher-input-first')?.value?.trim();
      const last = block.querySelector('.gened-teacher-input-last')?.value?.trim();
      const name = [first, last].filter(Boolean).join(' ').trim();
      const subject = block.querySelector('.gened-teacher-input-subject')?.value?.trim();
      if (!name) return null;
      return subject ? `${name} (${subject})` : `${name}`;
    }).filter(Boolean);
    function formatItemList(items) {
      if (!items || items.length === 0) return '[teacher names]';
      if (items.length === 1) return items[0];
      if (items.length === 2) return `${items[0]} and ${items[1]}`;
      const allButLast = items.slice(0, -1).join(', ');
      const last = items[items.length - 1];
      return `${allButLast}, and ${last}`;
    }
    output += `<p>Input was gathered from ${studentName}'s general education teachers, including: ${formatItemList(teacherItems)}.</p>`;
    // Per-teacher headings
    const genEdBlocks = document.querySelectorAll('#gened-teacher-inputs-container .gened-teacher-input-block');
    genEdBlocks.forEach((block, idx) => {
      const first = block.querySelector('.gened-teacher-input-first')?.value?.trim();
      const last = block.querySelector('.gened-teacher-input-last')?.value?.trim();
      const name = [first, last].filter(Boolean).join(' ').trim();
      const subject = block.querySelector('.gened-teacher-input-subject')?.value?.trim();
      if (!name) return;
      const headingText = subject ? `${name}, ${subject}` : name;
      // 2 blank rows before the first, 4 before others
      output += idx === 0
        ? '<div><br></div><div><br></div>'
        : '<div><br></div><div><br></div><div><br></div><div><br></div>';
      output += `<h3>${headingText}</h3>`;

      // Paragraph: Title LastName provided input on Date. A summary is provided below.
      const title = block.querySelector('.gened-teacher-input-title')?.value?.trim();
      const lastName = last || '[Last Name]';
      const tDateRaw = block.querySelector('.gened-teacher-input-date')?.value;
      let tDate = '[date]';
      if (tDateRaw) {
        const [year, month, day] = tDateRaw.split('-');
        if (year && month && day) {
          const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          tDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
        } else {
          tDate = tDateRaw;
        }
      }
      const titlePrefix = title ? `${title} ` : '';
      output += `<p>${titlePrefix}${lastName} provided input on ${tDate}. A summary is provided below.</p>`;

      // Immediately follow with the teacher input content (no blank row)
      const tHtml = block.querySelector('.gened-teacher-input-quill .ql-editor')?.innerHTML?.trim();
      const tText = block.querySelector('.gened-teacher-input-quill .ql-editor')?.innerText?.trim();
      if (tHtml && tText) {
        output += tHtml;
      }
    });
  }
  // Special Education Teacher Input section should appear after General Ed section (if any), otherwise immediately after previous sections
  if (specEdChecked) {
    // Four blank rows above section heading
    output += '<div><br></div><div><br></div><div><br></div><div><br></div><h2>Special Education Teacher Input</h2>';

    // Names summary with subject and optional Co-Teacher
    const specEdBlocksForNames = document.querySelectorAll('#speced-teacher-inputs-container .speced-teacher-input-block');
    const specTeacherItems = Array.from(specEdBlocksForNames).map(block => {
      const first = block.querySelector('.speced-teacher-input-first')?.value?.trim();
      const last = block.querySelector('.speced-teacher-input-last')?.value?.trim();
      const name = [first, last].filter(Boolean).join(' ').trim();
      const subject = block.querySelector('.speced-teacher-input-subject')?.value?.trim();
      const isCoTeacher = !!block.querySelector('.speced-teacher-co-teacher')?.checked;
      if (!name) return null;
      if (subject && isCoTeacher) return `${name} (${subject}, Co-Teacher)`;
      if (subject) return `${name} (${subject})`;
      if (isCoTeacher) return `${name} (Co-Teacher)`;
      return name;
    }).filter(Boolean);
    function formatSpecList(items) {
      if (!items || items.length === 0) return '[teacher names]';
      if (items.length === 1) return items[0];
      if (items.length === 2) return `${items[0]} and ${items[1]}`;
      const allButLast = items.slice(0, -1).join(', ');
      const last = items[items.length - 1];
      return `${allButLast}, and ${last}`;
    }
    output += `<p>Input was gathered from ${studentName}'s special education teachers, including: ${formatSpecList(specTeacherItems)}.</p>`;

    // Per-teacher headings and content
    const specEdBlocks = document.querySelectorAll('#speced-teacher-inputs-container .speced-teacher-input-block');
    specEdBlocks.forEach((block, idx) => {
      const first = block.querySelector('.speced-teacher-input-first')?.value?.trim();
      const last = block.querySelector('.speced-teacher-input-last')?.value?.trim();
      const fullName = [first, last].filter(Boolean).join(' ').trim();
      const subject = block.querySelector('.speced-teacher-input-subject')?.value?.trim();
      if (!fullName) return;
      const teacherHeading = subject ? `${fullName}, ${subject}` : fullName;
      output += idx === 0
        ? '<div><br></div><div><br></div>'
        : '<div><br></div><div><br></div><div><br></div><div><br></div>';
      output += `<h3>${teacherHeading}</h3>`;

      const title = block.querySelector('.speced-teacher-input-title')?.value?.trim();
      const lastName = last || '[Last Name]';
      const tDateRaw = block.querySelector('.speced-teacher-input-date')?.value;
      let tDate = '[date]';
      if (tDateRaw) {
        const [year, month, day] = tDateRaw.split('-');
        if (year && month && day) {
          const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          tDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
        } else {
          tDate = tDateRaw;
        }
      }
      const titlePrefix = title ? `${title} ` : '';
      output += `<p>${titlePrefix}${lastName} provided input on ${tDate}. A summary is provided below.</p>`;

      const tHtml = block.querySelector('.speced-teacher-input-quill .ql-editor')?.innerHTML?.trim();
      const tText = block.querySelector('.speced-teacher-input-quill .ql-editor')?.innerText?.trim();
      if (tHtml && tText) {
        output += tHtml;
      }
    });
  }
  // Related Service Provider Input section (placed after Special Ed if present, otherwise after General Ed)
  if (providerChecked) {
    output += '<div><br></div><div><br></div><div><br></div><div><br></div><h2>Related Service Provider Input</h2>';
    // Per-provider headings
    const providerBlocks = document.querySelectorAll('#provider-inputs-container .provider-input-block');
    providerBlocks.forEach((block, idx) => {
      const first = block.querySelector('.provider-input-first')?.value?.trim();
      const last = block.querySelector('.provider-input-last')?.value?.trim();
      const serviceVal = block.querySelector('.provider-input-service')?.value || '';
      const otherDesc = block.querySelector('.provider-service-desc-row .provider-input-service-desc')?.value?.trim();
      let serviceText = '';
      switch (serviceVal) {
        case 'SLP': serviceText = 'Speech/Language Pathologist'; break;
        case 'OT': serviceText = 'Occupational Therapist'; break;
        case 'PT': serviceText = 'Physical Therapist'; break;
        case 'AS': serviceText = 'Autism Support Services'; break;
        case 'ES': serviceText = 'Emotional Support Services'; break;
        case 'Other': serviceText = otherDesc || '[service]'; break;
        default: serviceText = '[service]';
      }
      const fullName = [first, last].filter(Boolean).join(' ').trim() || '[Name]';
      // Two blank rows before the first provider, four before subsequent
      output += idx === 0
        ? '<div><br></div><div><br></div>'
        : '<div><br></div><div><br></div><div><br></div><div><br></div>';
      output += `<h3>${fullName}, ${serviceText}</h3>`;

      // Paragraph: Title Lastname provided input on Date. A summary is described below.
      const title = block.querySelector('.provider-input-title')?.value?.trim();
      const lastName = last || '[Last Name]';
      const dateRaw = block.querySelector('.provider-input-date')?.value;
      let dateFormatted = '[date]';
      if (dateRaw) {
        const parts = dateRaw.split('-');
        if (parts.length === 3) {
          const [year, month, day] = parts;
          const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          dateFormatted = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
        } else {
          dateFormatted = dateRaw;
        }
      }
      const titlePrefix = title ? `${title} ` : '';
      output += `<p>${titlePrefix}${lastName} provided input on ${dateFormatted}. A summary is described below.</p>`;

      // Immediately follow with the provider input content (no extra blank row)
      const pHtml = block.querySelector('.provider-input-quill .ql-editor')?.innerHTML?.trim();
      const pText = block.querySelector('.provider-input-quill .ql-editor')?.innerText?.trim();
      if (pHtml && pText) {
        output += pHtml;
      }
    });
  }
  // Other Stakeholder Input section heading
  if (otherStakeholderChecked) {
    output += '<div><br></div><div><br></div><div><br></div><div><br></div><h2>Other Stakeholder Input</h2>';
    // Per-stakeholder headings
    const otherBlocks = document.querySelectorAll('#other-stakeholder-inputs-container .other-stakeholder-input-block');
    const otherCount = otherBlocks.length;
    if (otherCount > 1) {
      // Summary sentence listing additional stakeholders (no blank row above)
      const items = Array.from(otherBlocks).map(block => {
        const first = block.querySelector('.other-stakeholder-input-first')?.value?.trim();
        const last = block.querySelector('.other-stakeholder-input-last')?.value?.trim();
        const serviceVal = block.querySelector('.other-stakeholder-input-service')?.value?.trim();
        const fullName = [first, last].filter(Boolean).join(' ').trim() || '[Name]';
        const serviceText = serviceVal || '[service]';
        return `${fullName}, (${serviceText})`;
      }).filter(Boolean);
      function formatList(list) {
        if (list.length <= 1) return list[0] || '';
        if (list.length === 2) return `${list[0]} and ${list[1]}`;
        const allButLast = list.slice(0, -1).join(', ');
        const last = list[list.length - 1];
        return `${allButLast}, and ${last}`;
      }
      output += `<p>Additional input was provided by ${formatList(items)}.</p>`;
      // Two blank rows below the summary line
      output += '<div><br></div><div><br></div>';
    }
    otherBlocks.forEach((block, idx) => {
      const first = block.querySelector('.other-stakeholder-input-first')?.value?.trim();
      const last = block.querySelector('.other-stakeholder-input-last')?.value?.trim();
      const serviceVal = block.querySelector('.other-stakeholder-input-service')?.value?.trim();
      const fullName = [first, last].filter(Boolean).join(' ').trim() || '[Name]';
      const serviceText = serviceVal || '[service]';
      // Spacing: if only one entry, 1 blank row before first h3; if multiple, none (two rows already after summary);
      // four blank rows before subsequent entries
      output += idx === 0
        ? (otherCount === 1 ? '<div><br></div>' : '')
        : '<div><br></div><div><br></div><div><br></div><div><br></div>';
      output += `<h3>${fullName}, ${serviceText}</h3>`;
      // Paragraph: Title LastName provided input on Date. A summary is provided below.
      const title = block.querySelector('.other-stakeholder-input-title')?.value?.trim();
      const lastName = last || '[Last Name]';
      const dateRaw = block.querySelector('.other-stakeholder-input-date')?.value;
      let dateFormatted = '[date]';
      if (dateRaw) {
        const parts = dateRaw.split('-');
        if (parts.length === 3) {
          const [year, month, day] = parts;
          const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          dateFormatted = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
        } else {
          dateFormatted = dateRaw;
        }
      }
      const titlePrefix = title ? `${title} ` : '';
      output += `<p>${titlePrefix}${lastName} provided input on ${dateFormatted}. A summary is provided below.</p>`;

      // Immediately follow with the stakeholder input content (no extra blank row)
      const oHtml = block.querySelector('.other-stakeholder-input-quill .ql-editor')?.innerHTML?.trim();
      const oText = block.querySelector('.other-stakeholder-input-quill .ql-editor')?.innerText?.trim();
      if (oHtml && oText) {
        output += oHtml;
      }
    });
  }
  // Placeholder for further stakeholder input output
  return output;
} 