export function createAcademicProgressForm(container) {
  let goalCount = 1;

  // Helper function to create a progress period report HTML
  const createProgressPeriodHTML = (goalIndex, periodIndex) => `
    <div class="progress-period-report progress-period-card" id="goal${goalIndex}ProgressPeriod${periodIndex}">
      <!-- Progress Details Row -->
      <div class="progress-details-row">
        <!-- School Year Dropdown -->
        <div class="progress-details-group">
          <label for="goal${goalIndex}SchoolYear${periodIndex}">School Year:</label>
          <select id="goal${goalIndex}SchoolYear${periodIndex}" name="goal${goalIndex}SchoolYear${periodIndex}" class="progress-details-select">
            <option value="">Choose One</option>
            <option value="2025-2026">2025-2026</option>
            <option value="2026-2027">2026-2027</option>
            <option value="2027-2028">2027-2028</option>
            <option value="2028-2029">2028-2029</option>
            <option value="2029-2030">2029-2030</option>
          </select>
        </div>

        <!-- Marking Period Dropdown -->
        <div class="progress-details-group">
          <label for="goal${goalIndex}MarkingPeriod${periodIndex}">Marking Period:</label>
          <select id="goal${goalIndex}MarkingPeriod${periodIndex}" name="goal${goalIndex}MarkingPeriod${periodIndex}" class="progress-details-select">
            <option value="">Choose One</option>
            <option value="MP1">MP1</option>
            <option value="MP2">MP2</option>
            <option value="MP3">MP3</option>
            <option value="MP4">MP4</option>
          </select>
        </div>
      </div>

      <!-- Summary Row -->
      <div class="summary-row">
        <label for="goal${goalIndex}Summary${periodIndex}">Summary:</label>
        <textarea 
          id="goal${goalIndex}Summary${periodIndex}" 
          name="goal${goalIndex}Summary${periodIndex}" 
          class="summary-textarea" 
          rows="3"
        ></textarea>
      </div>
      <div class="progress-period-actions">
        ${periodIndex > 1 ? `<button type="button" class="progress-period-btn remove-progress-btn" data-goal="${goalIndex}" data-period="${periodIndex}">- Progress Period</button>` : ''}
      </div>
    </div>
  `;

  // Helper function to create a complete goal section
  const createGoalSectionHTML = (goalIndex) => `
    <div class="goal-section goal-card" id="goalSection${goalIndex}">
      <!-- Goal Subheading with Remove Button -->
      <div class="goal-header">
        <h4 class="goal-subheading">Goal ${goalIndex}</h4>
        ${goalIndex > 1 ? `<button type="button" class="remove-goal-btn" data-goal="${goalIndex}" style="background-color: #666; color: white; padding: 5px 10px; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Remove Goal</button>` : ''}
      </div>

      <!-- Goal Area Row -->
      <div class="goal-area-row">
        <label for="goalArea${goalIndex}">Goal Area:</label>
        <select id="goalArea${goalIndex}" name="goalArea${goalIndex}" class="goal-area-select">
          <option value="">Choose One</option>
          <option value="reading">Reading</option>
          <option value="reading-fluency">Reading Fluency</option>
          <option value="reading-comprehension">Reading Comprehension</option>
          <option value="math">Math</option>
          <option value="math-calculation">Math Calculation</option>
          <option value="math-problem-solving">Math Problem Solving</option>
          <option value="written-expression">Written Expression</option>
          <option value="social-skills">Social Skills</option>
          <option value="speech-language">Speech/Language</option>
          <option value="executive-functioning">Executive Functioning</option>
          <option value="other">Other</option>
        </select>
        <input 
          type="text" 
          id="goalArea${goalIndex}Specify" 
          name="goalArea${goalIndex}Specify" 
          class="goal-area-specify" 
          placeholder="Specify"
        >
      </div>

      <!-- Goal Text Row -->
      <div class="goal-text-row">
        <label for="goalText${goalIndex}">Goal:</label>
        <textarea 
          id="goalText${goalIndex}" 
          name="goalText${goalIndex}" 
          class="goal-text-input" 
          rows="3"
        ></textarea>
      </div>

      <div id="goal${goalIndex}ProgressPeriodsContainer" class="progress-periods-container">
        ${createProgressPeriodHTML(goalIndex, 1)}
      </div>

      <!-- Progress Period Buttons -->
      <div class="progress-period-buttons">
        <button type="button" class="progress-period-btn add-progress-btn" data-goal="${goalIndex}">+ Progress Period</button>
      </div>
    </div>
  `;

  // Initial form setup
  container.innerHTML = `
    <form class="academic-progress-form">
      <!-- Box 1: Progress Towards Current Goals -->
      <div class="progress-box collapsible-section">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="progressContent">
          <span class="toggle-icon">+</span>
          Progress Towards Current Goals
        </button>
        <div id="progressContent" class="section-content" style="display: none;">
          <div class="progress-content" id="goalsContainer">
            ${createGoalSectionHTML(1)}
          </div>
          <button type="button" class="add-goal-btn" id="addGoalBtn" style="background-color: #666; color: #fff;">+ Goal</button>
        </div>
      </div>

      <!-- Box 2: SDIs/Modifications/Accommodations -->
      <div class="progress-box collapsible-section">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="sdiContent">
          <span class="toggle-icon">+</span>
          SDIs/Modifications/Accommodations
        </button>
        <div id="sdiContent" class="section-content" style="display: none;">
          <div class="progress-content">
            <div class="sdi-section">
              <div class="sdi-checkbox-row">
                <label class="checkbox-label">
                  <input type="checkbox" id="sdiRemove" name="sdiRemove" />
                  <span>The IEP team plans to <strong><em>remove</em></strong> certain SDIs/Modifications/Accommodations</span>
                </label>
              </div>
              <!-- SDI Input Area for Remove (hidden by default) -->
              <div id="sdiRemoveInputs" class="sdi-input-area goal-card" style="display: none;">
                <div class="sdi-input-container">
                  <div class="sdi-input-row">
                    <label class="sdi-label">SDI:</label>
                    <textarea class="sdi-textarea" placeholder="SDI/Modification/Accommodation"></textarea>
                  </div>
                  <div class="sdi-button-row">
                    <button type="button" class="sdi-btn add-sdi-btn">+ SDI</button>
                    <button type="button" class="sdi-btn remove-sdi-btn" style="visibility: hidden; padding: 4px 12px;">- SDI</button>
                  </div>
                </div>
                <div class="description-section">
                  <div class="sdi-input-row">
                    <label class="sdi-label">Description:</label>
                    <textarea class="sdi-textarea" placeholder="Describe changes and explain why these changes are being made."></textarea>
                  </div>
                </div>
              </div>

              <div class="sdi-checkbox-row">
                <label class="checkbox-label">
                  <input type="checkbox" id="sdiModify" name="sdiModify" />
                  <span>The IEP team plans to <strong><em>modify</em></strong> certain SDIs/Modifications/Accommodations</span>
                </label>
              </div>
              <!-- SDI Input Area for Modify (hidden by default) -->
              <div id="sdiModifyInputs" class="sdi-input-area goal-card" style="display: none;">
                <div class="sdi-input-container">
                  <div class="sdi-input-row">
                    <label class="sdi-label">SDI:</label>
                    <textarea class="sdi-textarea" placeholder="SDI/Modification/Accommodation"></textarea>
                  </div>
                  <div class="sdi-button-row">
                    <button type="button" class="sdi-btn add-sdi-btn">+ SDI</button>
                    <button type="button" class="sdi-btn remove-sdi-btn" style="visibility: hidden; padding: 4px 12px;">- SDI</button>
                  </div>
                </div>
                <div class="description-section">
                  <div class="sdi-input-row">
                    <label class="sdi-label">Description:</label>
                    <textarea class="sdi-textarea" placeholder="Describe changes and explain why these changes are being made."></textarea>
                  </div>
                </div>
              </div>

              <div class="sdi-checkbox-row">
                <label class="checkbox-label">
                  <input type="checkbox" id="sdiAdd" name="sdiAdd" />
                  <span>The IEP team plans to <strong><em>add</em></strong> SDIs/Modifications/Accommodations</span>
                </label>
              </div>
              <!-- SDI Input Area for Add (hidden by default) -->
              <div id="sdiAddInputs" class="sdi-input-area goal-card" style="display: none;">
                <div class="sdi-input-container">
                  <div class="sdi-input-row">
                    <label class="sdi-label">SDI:</label>
                    <textarea class="sdi-textarea" placeholder="SDI/Modification/Accommodation"></textarea>
                  </div>
                  <div class="sdi-button-row">
                    <button type="button" class="sdi-btn add-sdi-btn">+ SDI</button>
                    <button type="button" class="sdi-btn remove-sdi-btn" style="visibility: hidden; padding: 4px 12px;">- SDI</button>
                  </div>
                </div>
                <div class="description-section">
                  <div class="sdi-input-row">
                    <label class="sdi-label">Description:</label>
                    <textarea class="sdi-textarea" placeholder="Describe changes and explain why these changes are being made."></textarea>
                  </div>
                </div>
              </div>

              <div class="sdi-checkbox-row">
                <label class="checkbox-label">
                  <input type="checkbox" id="sdiNoChange" name="sdiNoChange" />
                  <span>There are <strong><em>no changes</em></strong> to SDIs/Modifications/Accommodations</span>
                </label>
              </div>
              <!-- No Changes Message (hidden by default) -->
              <div id="sdiNoChangeMessage" class="sdi-no-change-message" style="display: none;">
                No changes to SDIs Noted
              </div>
              <!-- Error message (hidden by default) -->
              <div id="sdiError" class="sdi-error-message" style="display: none;">
                <span class="error-icon">⚠️</span> Please De-Select Checkboxes 1, 2, and 3 before selecting Checkbox 4
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Box 3: Grades -->
      <div class="progress-box collapsible-section">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="gradesContent">
          <span class="toggle-icon">+</span>
          Grades
        </button>
        <div id="gradesContent" class="section-content" style="display: none;">
          <div class="grades-section">
            <div class="grades-date-row">
              <label for="gradesDate" class="grades-label">As of:</label>
              <input type="date" id="gradesDate" class="grades-date-input" />
            </div>
            <!-- Semester 1 Card -->
            <div class="goal-card" style="margin-top: 20px; margin-bottom: 20px;">
              <div class="goal-header"><h4 class="goal-subheading">Semester 1</h4></div>
              <!-- New compact grid for initial inputs -->
              <div class="grades-sem-grid" data-semester="1" style="margin-top: 12px;">
                <div class="subtitle">Class Name</div>
                <div class="subtitle" style="text-align:center;">MP1</div>
                <div class="subtitle" style="text-align:center;">MP2</div>
                <div></div>
                <div data-row="1"><input type="text" id="sem1-class-1" placeholder="Class Name" class="grades-class-input-compact" /></div>
                <div data-row="1"><input type="text" id="sem1-mp1-1" placeholder="Grade" class="grades-mp-input-compact" /></div>
                <div data-row="1"><input type="text" id="sem1-mp2-1" placeholder="Grade" class="grades-mp-input-compact" /></div>
                <div data-row="1"></div>
              </div>
              <div class="grades-sem-actions">
                <button type="button" class="grades-add-class-btn">+ Class</button>
              </div>
              <!-- Keep legacy table container hidden to preserve output logic while we redesign -->
              <div class="grades-table-container" id="gradesSemester1" hidden>
                <div class="grades-table-header">
                  <span class="grades-col grades-class-label">Class Name</span>
                  <span class="grades-col grades-mp-label">MP1</span>
                  <span class="grades-col grades-mp-label">MP2</span>
                </div>
                <div class="grades-table-body" id="gradesSemester1Body">
                  <!-- 3 rows by default -->
                  ${[1,2,3].map((i, idx) => `
                    <div class="grades-table-row">
                      <div class="grades-class-cell">
                        <input type="text" class="grades-class-input" placeholder="Class Name" />
                        ${idx > 0 ? '<button type="button" class="grades-remove-row-btn">- Class</button>' : ''}
                      </div>
                      <input type="text" class="grades-mp-input grades-mp1" placeholder="Grade" />
                      <input type="text" class="grades-mp-input grades-mp2" placeholder="Grade" />
                    </div>
                  `).join('')}
                </div>
                <div class="grades-class-btn-row" hidden>
                  <div class="grades-add-wrap">
                    <button type="button" class="grades-add-class-btn">+ Class</button>
                  </div>
                  <div class="grades-remove-wrap">
                    <button type="button" class="grades-remove-class-btn">- Class</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- +Semester button below the Semester 1 card -->
            <div class="grades-semester-actions">
              <button type="button" class="grades-add-semester-btn">+ Semester</button>
            </div>

            <!-- Future Semester cards will insert here via +Semester -->
          </div>
          <!-- Add Description textarea below semester toggles -->
          <div class="grades-description-section" style="margin-top: 3rem;">
            <label for="gradesDescriptionBox" style="font-weight: bold; display: block; margin-bottom: 0.5rem;">Add Description</label>
            <textarea id="gradesDescriptionBox" class="summary-textarea" rows="2" style="width: 100%; min-height: 60px;" placeholder="Add description of grades/progress"></textarea>
          </div>
        </div>
      </div>
    </form>
  `;

  // Function to initialize auto-expand for a textarea
  const initializeAutoExpand = (textarea) => {
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      };

      textarea.addEventListener('input', adjustHeight);
      textarea.addEventListener('change', adjustHeight);
      
      adjustHeight();
      window.addEventListener('load', adjustHeight);
      textarea.style.minHeight = '60px';
    }
  };

  // Function to check if a semester has any data entered
  const hasSemesterData = (semesterNum) => {
    // Prefer compact grid if present
    const grid = container.querySelector(`.grades-sem-grid[data-semester="${semesterNum}"]`);
    if (grid) {
      const inputs = grid.querySelectorAll('input');
      for (const input of inputs) {
        if (input.value && input.value.trim() !== '') return true;
      }
      return false;
    }

    // Fallback to legacy hidden table
    const tableBody = container.querySelector(`#gradesSemester${semesterNum}Body`);
    if (!tableBody) return false;

    const rows = tableBody.querySelectorAll('.grades-table-row');
    for (const row of rows) {
      const inputsLegacy = row.querySelectorAll('input');
      for (const input of inputsLegacy) {
        if (input.value.trim() !== '') {
          return true;
        }
      }
    }
    return false;
  };

  // Function to get grades data for output (supports compact grid or legacy table)
  const getGradesData = () => {
    const gradesDate = container.querySelector('#gradesDate')?.value;
    const gradesDescription = container.querySelector('#gradesDescriptionBox')?.value;

    const buildFromGrid = (semesterNum) => {
      const grid = container.querySelector(`.grades-sem-grid[data-semester="${semesterNum}"]`);
      if (!grid) return null;

      const rowIds = Array.from(new Set(Array.from(grid.querySelectorAll('[data-row]')).map(el => el.getAttribute('data-row')))).filter(Boolean);

      if (semesterNum === 1) {
        const classes = rowIds.map(id => ({
          name: grid.querySelector(`#sem1-class-${id}`)?.value || '',
          mp1: grid.querySelector(`#sem1-mp1-${id}`)?.value || '',
          mp2: grid.querySelector(`#sem1-mp2-${id}`)?.value || ''
        })).filter(c => c.name || c.mp1 || c.mp2);
        return classes.length ? { classes } : null;
      } else {
        const classes = rowIds.map(id => ({
          name: grid.querySelector(`#sem2-class-${id}`)?.value || '',
          mp3: grid.querySelector(`#sem2-mp3-${id}`)?.value || '',
          mp4: grid.querySelector(`#sem2-mp4-${id}`)?.value || ''
        })).filter(c => c.name || c.mp3 || c.mp4);
        return classes.length ? { classes } : null;
      }
    };

    const buildFromLegacy = (semesterNum) => {
      const body = container.querySelector(`#gradesSemester${semesterNum}Body`);
      if (!body) return null;
      const rows = Array.from(body.querySelectorAll('.grades-table-row'));
      if (!rows.length) return null;
      if (semesterNum === 1) {
        const classes = rows.map(row => ({
          name: row.querySelector('.grades-class-input')?.value || '',
          mp1: row.querySelector('.grades-mp1')?.value || '',
          mp2: row.querySelector('.grades-mp2')?.value || ''
        })).filter(c => c.name || c.mp1 || c.mp2);
        return classes.length ? { classes } : null;
      } else {
        const classes = rows.map(row => ({
          name: row.querySelector('.grades-class-input')?.value || '',
          mp3: row.querySelector('.grades-mp3')?.value || '',
          mp4: row.querySelector('.grades-mp4')?.value || ''
        })).filter(c => c.name || c.mp3 || c.mp4);
        return classes.length ? { classes } : null;
      }
    };

    const semester1 = buildFromGrid(1) || buildFromLegacy(1);
    const semester2 = buildFromGrid(2) || buildFromLegacy(2);

    return {
      date: gradesDate,
      description: gradesDescription,
      semester1,
      semester2
    };
  };

  // Function to format grades for output
  const formatGradesOutput = () => {
    const data = getGradesData();
    let output = '';

    if (data.date || data.semester1 || data.semester2) {
      output += '<h2>Grades</h2>\n\n';
      
      if (data.date) {
        output += `As of: ${data.date}\n\n`;
      }

      if (data.semester1) {
        output += 'Semester 1:\n';
        data.semester1.classes.forEach(c => {
          output += `${c.name}: MP1: ${c.mp1 || 'N/A'}, MP2: ${c.mp2 || 'N/A'}\n`;
        });
        output += '\n';
      }

      if (data.semester2) {
        output += 'Semester 2:\n';
        data.semester2.classes.forEach(c => {
          output += `${c.name}: MP3: ${c.mp3 || 'N/A'}, MP4: ${c.mp4 || 'N/A'}\n`;
        });
        output += '\n';
      }

      if (data.description) {
        output += data.description + '\n';
      }
    }

    return output;
  };

  // Function to initialize a goal section
  const initializeGoalSection = (goalIndex) => {
    const goalAreaSelect = container.querySelector(`#goalArea${goalIndex}`);
    const goalAreaSpecify = container.querySelector(`#goalArea${goalIndex}Specify`);
    const goalTextArea = container.querySelector(`#goalText${goalIndex}`);
    const summaryTextArea = container.querySelector(`#goal${goalIndex}Summary1`);

    // Initialize Other option functionality
    if (goalAreaSelect && goalAreaSpecify) {
      goalAreaSelect.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
          goalAreaSpecify.classList.add('visible');
        } else {
          goalAreaSpecify.classList.remove('visible');
          goalAreaSpecify.value = '';
        }
      });
    }

    // Initialize auto-expand for textareas
    initializeAutoExpand(goalTextArea);
    initializeAutoExpand(summaryTextArea);
  };

  // Initialize the first goal section
  initializeGoalSection(1);

  // Add Goal functionality
  const addGoalBtn = container.querySelector('#addGoalBtn');
  const goalsContainer = container.querySelector('#goalsContainer');

  if (addGoalBtn && goalsContainer) {
    addGoalBtn.addEventListener('click', () => {
      goalCount++;
      const newGoalSection = document.createElement('div');
      newGoalSection.innerHTML = createGoalSectionHTML(goalCount);
      goalsContainer.appendChild(newGoalSection.firstElementChild);
      initializeGoalSection(goalCount);
    });
  }

  // Remove Goal functionality (delegated to the form)
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-goal-btn')) {
      const goalSection = e.target.closest('.goal-section');
      if (goalSection) {
        goalSection.remove();
      }
    }
    // Remove Semester 2 card and its actions
    if (e.target.classList.contains('grades-remove-semester-btn')) {
      const gradesSection = container.querySelector('.grades-section');
      const sem2Card = gradesSection?.querySelector('#gradesSemester2Card');
      const actions = gradesSection?.querySelector('.grades-semester-2-actions');
      if (actions) actions.remove();
      if (sem2Card) sem2Card.remove();
    }
  });

  // Add Progress Period functionality (delegated to the form)
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-progress-btn')) {
      const goalIndex = e.target.dataset.goal;
      const progressPeriodsContainer = container.querySelector(`#goal${goalIndex}ProgressPeriodsContainer`);
      const progressPeriodButtons = e.target.closest('.progress-period-buttons');
      
      if (progressPeriodsContainer) {
        const periodCount = progressPeriodsContainer.children.length + 1;
        const newProgressPeriod = document.createElement('div');
        newProgressPeriod.innerHTML = createProgressPeriodHTML(goalIndex, periodCount);
        progressPeriodsContainer.appendChild(newProgressPeriod.firstElementChild);
        
        // Initialize auto-expand for the new summary textarea
        initializeAutoExpand(container.querySelector(`#goal${goalIndex}Summary${periodCount}`));
      }
    } else if (e.target.classList.contains('remove-progress-btn')) {
      const goalIndex = e.target.dataset.goal;
      const progressPeriodsContainer = container.querySelector(`#goal${goalIndex}ProgressPeriodsContainer`);
      const periodElement = e.target.closest('.progress-period-report');
      if (progressPeriodsContainer && progressPeriodsContainer.children.length > 1 && periodElement) {
        periodElement.remove();
      }
    }
  });

  // Initialize SDI checkboxes
  const sdiCheckboxes = ['sdiRemove', 'sdiModify', 'sdiAdd', 'sdiNoChange'].map(id => 
    container.querySelector(`#${id}`)
  );
  const sdiErrorMessage = container.querySelector('#sdiError');
  const sdiNoChangeMessage = container.querySelector('#sdiNoChangeMessage');

  // Function to show error message
  const showError = () => {
    if (sdiErrorMessage) {
      // Create dynamic message based on which checkboxes are checked
      const checkedBoxes = [];
      if (sdiCheckboxes[0].checked) checkedBoxes.push('1');
      if (sdiCheckboxes[1].checked) checkedBoxes.push('2');
      if (sdiCheckboxes[2].checked) checkedBoxes.push('3');
      
      let message = '';
      if (checkedBoxes.length === 1) {
        message = `Please De-Select Checkbox ${checkedBoxes[0]} before selecting Checkbox 4`;
      } else if (checkedBoxes.length === 2) {
        message = `Please De-Select Checkboxes ${checkedBoxes[0]} and ${checkedBoxes[1]} before selecting Checkbox 4`;
      } else if (checkedBoxes.length === 3) {
        message = `Please De-Select Checkboxes ${checkedBoxes[0]}, ${checkedBoxes[1]}, and ${checkedBoxes[2]} before selecting Checkbox 4`;
      }

      sdiErrorMessage.innerHTML = `<span class="error-icon">⚠️</span> ${message}`;
      sdiErrorMessage.style.display = 'block';
      // Hide error after 3 seconds
      setTimeout(() => {
        sdiErrorMessage.style.display = 'none';
      }, 3000);
    }
  };

  // Function to toggle no change message
  const toggleNoChangeMessage = (show) => {
    if (sdiNoChangeMessage) {
      sdiNoChangeMessage.style.display = show ? 'block' : 'none';
    }
  };

  // Make the entire label clickable for SDI checkboxes
  container.querySelectorAll('.checkbox-label').forEach(label => {
    const checkbox = label.querySelector('input[type="checkbox"]');
    const span = label.querySelector('span');
    
    if (span) {
      span.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkbox) {
          // Handle the "no changes" checkbox logic
          if (checkbox.id === 'sdiNoChange') {
            // If trying to check "no changes" but other boxes are checked, show error and prevent
            if (!checkbox.checked && (sdiCheckboxes[0].checked || sdiCheckboxes[1].checked || sdiCheckboxes[2].checked)) {
              showError();
              return;
            }
            // If checking "no changes", uncheck the other boxes
            if (!checkbox.checked) {
              sdiCheckboxes[0].checked = false;
              sdiCheckboxes[1].checked = false;
              sdiCheckboxes[2].checked = false;
              // Trigger change events to hide their input areas
              sdiCheckboxes[0].dispatchEvent(new Event('change'));
              sdiCheckboxes[1].dispatchEvent(new Event('change'));
              sdiCheckboxes[2].dispatchEvent(new Event('change'));
            }
            // Toggle the no changes message based on checkbox state
            toggleNoChangeMessage(!checkbox.checked);
          } else {
            // If checking one of the first three boxes, uncheck "no changes" and hide message
            if (!checkbox.checked) {
              sdiCheckboxes[3].checked = false;
              toggleNoChangeMessage(false);
            }
          }
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change'));
        }
      });
    }
  });

  // Add change event listeners to handle the checkbox dependencies
  sdiCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', (e) => {
      if (index < 3) { // First three checkboxes
        if (e.target.checked) {
          // If checking one of the first three boxes, uncheck "no changes" and hide message
          sdiCheckboxes[3].checked = false;
          toggleNoChangeMessage(false);
        }
      } else { // "No changes" checkbox
        if (e.target.checked) {
          // If other boxes are checked, show error and prevent
          if (sdiCheckboxes[0].checked || sdiCheckboxes[1].checked || sdiCheckboxes[2].checked) {
            showError();
            e.preventDefault();
            e.target.checked = false;
            return;
          }
          // If checking "no changes", uncheck the other boxes and hide their inputs
          sdiCheckboxes[0].checked = false;
          sdiCheckboxes[1].checked = false;
          sdiCheckboxes[2].checked = false;
          sdiCheckboxes[0].dispatchEvent(new Event('change'));
          sdiCheckboxes[1].dispatchEvent(new Event('change'));
          sdiCheckboxes[2].dispatchEvent(new Event('change'));
          // Show the no changes message
          toggleNoChangeMessage(true);
        } else {
          // Hide the no changes message when unchecking
          toggleNoChangeMessage(false);
        }
      }
    });
  });

  // Handle SDI Remove checkbox and input area
  const sdiRemoveCheckbox = container.querySelector('#sdiRemove');
  const sdiRemoveInputs = container.querySelector('#sdiRemoveInputs');
  const sdiModifyCheckbox = container.querySelector('#sdiModify');
  const sdiModifyInputs = container.querySelector('#sdiModifyInputs');
  const sdiAddCheckbox = container.querySelector('#sdiAdd');
  const sdiAddInputs = container.querySelector('#sdiAddInputs');
  
  // Function to initialize SDI input area
  const initializeSdiInputArea = (checkbox, inputsArea) => {
    if (checkbox && inputsArea) {
      // Toggle visibility on checkbox change
      checkbox.addEventListener('change', (e) => {
        inputsArea.style.display = e.target.checked ? 'block' : 'none';
        if (e.target.checked) {
          // Initialize any new textareas when showing
          const textareas = inputsArea.querySelectorAll('.sdi-textarea');
          textareas.forEach(textarea => {
            initializeAutoExpand(textarea);
          });
        }
      });

      // Handle Add SDI button
      const addSdiBtn = inputsArea.querySelector('.add-sdi-btn');
      const removeSdiBtn = inputsArea.querySelector('.remove-sdi-btn');
      const sdiContainer = inputsArea.querySelector('.sdi-input-container');

      if (addSdiBtn && sdiContainer) {
        addSdiBtn.addEventListener('click', () => {
          // Create new input row with proper structure
          const newInputRow = document.createElement('div');
          newInputRow.className = 'sdi-input-row';
          newInputRow.innerHTML = `
            <label class="sdi-label">SDI:</label>
            <textarea class="sdi-textarea" placeholder="SDI/Modification/Accommodation"></textarea>
            <button type="button" class="remove-sdi-inline-btn">- SDI</button>
          `;

          // Insert before the button row
          sdiContainer.insertBefore(newInputRow, sdiContainer.querySelector('.sdi-button-row'));

          // Initialize the new textarea
          const newTextarea = newInputRow.querySelector('.sdi-textarea');
          initializeAutoExpand(newTextarea);

          // Add inline remove behavior
          const inlineRemove = newInputRow.querySelector('.remove-sdi-inline-btn');
          if (inlineRemove) {
            inlineRemove.addEventListener('click', () => {
              newInputRow.remove();
            });
          }
        });
      }

      // Handle Remove SDI button
      // Remove bottom remove button handling (inline buttons handle removal per row)
    }
  };

  // Initialize both SDI input areas
  initializeSdiInputArea(sdiRemoveCheckbox, sdiRemoveInputs);
  initializeSdiInputArea(sdiModifyCheckbox, sdiModifyInputs);
  initializeSdiInputArea(sdiAddCheckbox, sdiAddInputs);

  // Initialize the textareas in all SDI input areas
  const initializeAllTextareas = () => {
    const allTextareas = container.querySelectorAll('.sdi-textarea');
    allTextareas.forEach(textarea => {
      initializeAutoExpand(textarea);
    });
  };

  initializeAllTextareas();

  // === Grades Section: Collapsible Toggles ===
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('grades-toggle-btn')) {
      const semester = e.target.getAttribute('data-semester');
      const table = container.querySelector(`#gradesSemester${semester}`);
      const expanded = e.target.getAttribute('aria-expanded') === 'true';
      if (table) {
        table.hidden = expanded;
        e.target.setAttribute('aria-expanded', (!expanded).toString());
      }
    }
  });

  // === Grades Section: Add/Remove Class Functionality ===
  container.addEventListener('click', (e) => {
    // Add Class
    if (e.target.classList.contains('grades-add-class-btn')) {
      // First, handle the NEW compact grid UI (Semester 1)
      const goalCard = e.target.closest('.goal-card');
      const compactGrid = goalCard?.querySelector('.grades-sem-grid');
      if (compactGrid) {
        // Determine next index by counting existing class inputs in this semester grid only
        const nextIndex = compactGrid.querySelectorAll('[data-row] input.grades-class-input-compact').length + 1;

        // Append four cells (class, mp1, mp2, remove)
        const classCell = document.createElement('div');
        classCell.setAttribute('data-row', String(nextIndex));
        classCell.innerHTML = `<input type=\"text\" id=\"sem1-class-${nextIndex}\" placeholder=\"Class Name\" class=\"grades-class-input-compact\" />`;
        const mp1Cell = document.createElement('div');
        mp1Cell.setAttribute('data-row', String(nextIndex));
        mp1Cell.innerHTML = `<input type=\"text\" id=\"sem1-mp1-${nextIndex}\" placeholder=\"Grade\" class=\"grades-mp-input-compact\" />`;
        const mp2Cell = document.createElement('div');
        mp2Cell.setAttribute('data-row', String(nextIndex));
        mp2Cell.innerHTML = `<input type=\"text\" id=\"sem1-mp2-${nextIndex}\" placeholder=\"Grade\" class=\"grades-mp-input-compact\" />`;
        const removeCell = document.createElement('div');
        removeCell.setAttribute('data-row', String(nextIndex));
        removeCell.innerHTML = `<button type=\"button\" class=\"grades-remove-inline-btn\">- Class</button>`;

        compactGrid.appendChild(classCell);
        compactGrid.appendChild(mp1Cell);
        compactGrid.appendChild(mp2Cell);
        compactGrid.appendChild(removeCell);

        const newInput = classCell.querySelector('input');
        if (newInput) newInput.focus();
        return;
      }

      // Fallback: handle legacy hidden table UI (kept for output compatibility)
      const tableContainer = e.target.closest('.grades-table-container');
      const body = tableContainer?.querySelector('.grades-table-body');
      if (body && tableContainer) {
        const isSemester1 = tableContainer.id === 'gradesSemester1';
        const mp1 = isSemester1 ? 'mp1' : 'mp3';
        const mp2 = isSemester1 ? 'mp2' : 'mp4';
        const newRow = document.createElement('div');
        newRow.className = 'grades-table-row';
        newRow.innerHTML = `
          <div class="grades-class-cell">
            <input type="text" class="grades-class-input" placeholder="Class Name" />
            <button type="button" class="grades-remove-row-btn">- Class</button>
          </div>
          <input type="text" class="grades-mp-input grades-${mp1}" placeholder="Grade" />
          <input type="text" class="grades-mp-input grades-${mp2}" placeholder="Grade" />
        `;
        body.appendChild(newRow);
      }
    }
    // Remove Class (legacy table)
    if (e.target.classList.contains('grades-remove-row-btn')) {
      const row = e.target.closest('.grades-table-row');
      const body = row?.parentElement;
      if (row && body && body.children.length > 1) row.remove();
    }
    // Remove Class (compact grid)
    if (e.target.classList.contains('grades-remove-inline-btn')) {
      const cell = e.target.parentElement;
      const grid = cell?.closest('.grades-sem-grid');
      // Find the row index using data-row attribute on the remove cell
      const rowIndex = cell?.getAttribute('data-row');
      if (grid && rowIndex && rowIndex !== '1') {
        // Remove four cells belonging to this row
        grid.querySelectorAll(`[data-row="${rowIndex}"]`).forEach(el => el.remove());
      }
    }
  });

  // === Grades Section: Add Semester (creates Semester 2 with MP3/MP4) ===
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('grades-add-semester-btn')) {
      const gradesSection = container.querySelector('.grades-section');
      if (!gradesSection) return;

      // Avoid adding multiple Semester 2 cards
      if (gradesSection.querySelector('[data-semester="2"]')) return;

      const sem2Card = document.createElement('div');
      sem2Card.className = 'goal-card';
      sem2Card.id = 'gradesSemester2Card';
      sem2Card.style.marginTop = '24px';
      sem2Card.innerHTML = `
        <div class="goal-header"><h4 class="goal-subheading">Semester 2</h4></div>
        <div class="grades-sem-grid" data-semester="2" style="margin-top: 12px;">
          <div class="subtitle">Class Name</div>
          <div class="subtitle" style="text-align:center;">MP3</div>
          <div class="subtitle" style="text-align:center;">MP4</div>
          <div></div>
          <div data-row="1"><input type="text" id="sem2-class-1" placeholder="Class Name" class="grades-class-input-compact" /></div>
          <div data-row="1"><input type="text" id="sem2-mp3-1" placeholder="Grade" class="grades-mp-input-compact" /></div>
          <div data-row="1"><input type="text" id="sem2-mp4-1" placeholder="Grade" class="grades-mp-input-compact" /></div>
          <div data-row="1"></div>
        </div>
        <div class="grades-sem-actions">
          <button type="button" class="grades-add-class-btn">+ Class</button>
        </div>
      `;

      gradesSection.appendChild(sem2Card);

      // Add remove semester button directly below Semester 2 card
      const sem2Actions = document.createElement('div');
      sem2Actions.className = 'grades-semester-2-actions';
      sem2Actions.innerHTML = `<button type="button" class="grades-remove-semester-btn">- Semester</button>`;
      gradesSection.appendChild(sem2Actions);
    }
  });

  // Style the remove class buttons
  const removeClassBtns = container.querySelectorAll('.grades-remove-class-btn');
  removeClassBtns.forEach(btn => {
    btn.style.cssText = 'background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); border-radius: 4px; padding: 4px 12px; cursor: pointer; font-size: 0.9rem; font-weight: bold;';
  });

  // Initialize auto-expand for grades description textarea
  const gradesDescriptionBox = container.querySelector('#gradesDescriptionBox');
  if (gradesDescriptionBox) {
    const adjustHeight = () => {
      gradesDescriptionBox.style.height = 'auto';
      gradesDescriptionBox.style.height = gradesDescriptionBox.scrollHeight + 'px';
    };
    gradesDescriptionBox.addEventListener('input', adjustHeight);
    gradesDescriptionBox.addEventListener('change', adjustHeight);
    adjustHeight();
    window.addEventListener('load', adjustHeight);
    gradesDescriptionBox.style.minHeight = '60px';
  }

  // Initialize collapsible sections
  const initializeCollapsible = () => {
    container.querySelectorAll('.section-toggle-btn').forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        button.setAttribute('aria-expanded', !isExpanded);
        content.style.display = isExpanded ? 'none' : 'block';
        
        // Update toggle icon
        const icon = button.querySelector('.toggle-icon');
        if (icon) {
          icon.textContent = isExpanded ? '+' : '-';
        }
      });
    });
  };

  // Initialize collapsible functionality
  initializeCollapsible();
}
