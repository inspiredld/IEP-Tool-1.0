export function createStateLocalAssessmentForm(container) {
  // Helper function to generate year options
  const generateYearOptions = () => {
    let options = ['<option value="">Select</option>'];
    for (let year = 2015; year <= 2045; year++) {
      const value = `${year}-${year + 1}`;
      options.push(`<option value="${value}">${value}</option>`);
    }
    return options.join('\n');
  };

  // Initial form setup
  container.innerHTML = `
    <form class="state-local-assessment-form">
      <div class="assessment-box">
        <div class="assessment-content">
          <!-- Instructions -->
          <div class="assessment-instructions">
            <p style="text-align: center; font-weight: bold; font-style: italic; color: #333; margin: 1.5rem 0;">Please select all assessments that apply to your student.</p>
          </div>
          
          <!-- Blank row -->
          <div style="height: 1.5rem;"></div>
          
          <!-- PSSA Checkbox -->
          <div class="assessment-checkbox-row">
            <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
              <input type="checkbox" id="pssaCheckbox" style="margin-right: 8px; cursor: pointer;">
              <span style="cursor: pointer;">PSSA</span>
            </label>
          </div>
          
          <!-- PSSA Content (hidden by default) -->
          <div id="pssaContent" class="assessment-card goal-card" style="display: none;">
            <div id="pssaTestContainer">
              <div class="pssa-input-row" style="display: flex; gap: 20px; align-items: center;">
                <!-- Year Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pssaYear" style="margin-right: 8px;"><strong><em>Year:</em></strong></label>
                  <select id="pssaYear" style="padding: 4px 8px; width: 120px;">
                    ${generateYearOptions()}
                  </select>
                </div>

                <!-- Subject Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pssaSubject" style="margin-right: 8px;"><strong><em>Subject:</em></strong></label>
                  <select id="pssaSubject" style="padding: 4px 8px; width: 120px;">
                    <option value="">Select</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                  </select>
                </div>

                <!-- Score Input -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pssaScore" style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
                  <input type="text" id="pssaScore" style="padding: 4px 8px; width: 60px;">
                </div>

                <!-- Level Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pssaProficiency" style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
                  <select id="pssaProficiency" style="padding: 4px 8px; width: 120px;">
                    <option value="">Select</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Proficient">Proficient</option>
                    <option value="Basic">Basic</option>
                    <option value="Below Basic">Below Basic</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Test Buttons Row -->
            <div class="pssa-button-row">
              <button type="button" class="assessment-btn add-test-btn">+ Test</button>
              <button type="button" class="assessment-btn remove-test-btn" style="visibility: hidden;">- Test</button>
            </div>

            <!-- Description Row -->
            <div class="pssa-description-row" style="margin-top: 1rem;">
              <div style='height: 1rem;'></div>
              <label for="pssaDescriptionBox" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results:</label>
              <textarea id="pssaDescriptionBox" class="summary-textarea" rows="2" style="width: 100%; min-height: 60px;" placeholder="Describe significance"></textarea>
              <div style='height: 1rem;'></div>
            </div>
          </div>

          <!-- Keystones Checkbox -->
          <div class="assessment-checkbox-row" style="margin-top: 1rem;">
            <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
              <input type="checkbox" id="keystonesCheckbox" style="margin-right: 8px; cursor: pointer;">
              <span style="cursor: pointer;">Keystones</span>
            </label>
          </div>
          
          <!-- Keystones Content (hidden by default) -->
          <div id="keystonesContent" class="assessment-card goal-card" style="display: none;">
            <div id="keystonesTestContainer">
              <div class="keystones-input-row" style="display: flex; gap: 20px; align-items: center;">
                <!-- Year Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="keystonesYear" style="margin-right: 8px;"><strong><em>Year:</em></strong></label>
                  <select id="keystonesYear" style="padding: 4px 8px; width: 120px;">
                    ${generateYearOptions()}
                  </select>
                </div>

                <!-- Subject Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="keystonesSubject" style="margin-right: 8px;"><strong><em>Subject:</em></strong></label>
                  <select id="keystonesSubject" style="padding: 4px 8px; width: 120px;">
                    <option value="">Select</option>
                    <option value="Algebra">Algebra</option>
                    <option value="Literature">Literature</option>
                    <option value="Biology">Biology</option>
                  </select>
                </div>

                <!-- Score Input -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="keystonesScore" style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
                  <input type="text" id="keystonesScore" style="padding: 4px 8px; width: 60px;">
                </div>

                <!-- Level Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="keystonesProficiency" style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
                  <select id="keystonesProficiency" style="padding: 4px 8px; width: 120px;">
                    <option value="">Select</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Proficient">Proficient</option>
                    <option value="Basic">Basic</option>
                    <option value="Below Basic">Below Basic</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Test Buttons Row -->
            <div class="keystones-button-row">
              <button type="button" class="assessment-btn add-test-btn">+ Test</button>
              <button type="button" class="assessment-btn remove-test-btn" style="visibility: hidden;">- Test</button>
            </div>

            <!-- Description Row -->
            <div class="keystones-description-row" style="margin-top: 1rem;">
              <div style='height: 1rem;'></div>
              <label for="keystonesDescriptionBox" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results:</label>
              <textarea id="keystonesDescriptionBox" class="summary-textarea" rows="2" style="width: 100%; min-height: 60px;" placeholder="Describe significance"></textarea>
              <div style='height: 1rem;'></div>
            </div>
          </div>

          <!-- PASA Checkbox -->
          <div class="assessment-checkbox-row" style="margin-top: 1rem;">
            <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
              <input type="checkbox" id="pasaCheckbox" style="margin-right: 8px; cursor: pointer;">
              <span style="cursor: pointer;">PASA</span>
            </label>
          </div>
          
          <!-- PASA Content (hidden by default) -->
          <div id="pasaContent" class="assessment-card goal-card" style="display: none;">
            <div id="pasaTestContainer">
              <div class="pasa-input-row" style="display: flex; gap: 20px; align-items: center;">
                <!-- Year Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pasaYear" style="margin-right: 8px;"><strong><em>Year:</em></strong></label>
                  <select id="pasaYear" style="padding: 4px 8px; width: 120px;">
                    ${generateYearOptions()}
                  </select>
                </div>

                <!-- Subject Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pasaSubject" style="margin-right: 8px;"><strong><em>Subject:</em></strong></label>
                  <select id="pasaSubject" style="padding: 4px 8px; width: 120px;">
                    <option value="">Select</option>
                    <option value="ELA">ELA</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                  </select>
                </div>

                <!-- Score Input -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pasaScore" style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
                  <input type="text" id="pasaScore" style="padding: 4px 8px; width: 60px;">
                </div>

                <!-- Level Dropdown -->
                <div class="input-group" style="display: flex; align-items: center;">
                  <label for="pasaProficiency" style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
                  <select id="pasaProficiency" style="padding: 4px 8px; width: 120px;">
                    <option value="">Select</option>
                    <option value="Advanced">Advanced</option>
                    <option value="At Target">At Target</option>
                    <option value="Approaching">Approaching</option>
                    <option value="Emerging">Emerging</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Test Buttons Row -->
            <div class="pasa-button-row">
              <button type="button" class="assessment-btn add-test-btn">+ Test</button>
              <button type="button" class="assessment-btn remove-test-btn" style="visibility: hidden;">- Test</button>
            </div>

            <!-- Description Row -->
            <div class="pasa-description-row" style="margin-top: 1rem;">
              <div style='height: 1rem;'></div>
              <label for="pasaDescriptionBox" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results:</label>
              <textarea id="pasaDescriptionBox" class="summary-textarea" rows="2" style="width: 100%; min-height: 60px;" placeholder="Describe significance"></textarea>
              <div style='height: 1rem;'></div>
            </div>
          </div>

          <!-- CBMs Checkbox -->
          <div class="assessment-checkbox-row" style="margin-top: 1rem;">
            <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
              <input type="checkbox" id="cbmsCheckbox" style="margin-right: 8px; cursor: pointer;">
              <span style="cursor: pointer;">CBMs</span>
            </label>
          </div>
          
          <!-- CBMs Content (hidden by default) -->
          <div id="cbmsContent" class="assessment-card goal-card" style="display: none;">
            <div id="cbmsContainer"></div>
            <!-- Assessment Buttons Row -->
            <div class="cbms-button-row" style="display: flex; gap: 10px; margin-top: 35px; margin-bottom: 1.5rem;">
              <button type="button" class="assessment-btn add-assessment-btn" style="background-color: #6c757d; color: white; border: none; border-radius: 4px; padding: 6px 16px; cursor: pointer; font-size: 0.9rem; font-weight: bold;">+ Assessment</button>
              <button type="button" class="assessment-btn remove-assessment-btn" style="background-color: white !important; color: #6c757d !important; border: 1px solid #6c757d !important; border-radius: 4px; padding: 6px 16px; cursor: pointer; font-size: 0.9rem; font-weight: bold; visibility: hidden; display: none;">- Assessment</button>
            </div>
          </div>

          <!-- Other Assessments Checkbox -->
          <div class="assessment-checkbox-row" style="margin-top: 1rem;">
            <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
              <input type="checkbox" id="otherAssessmentsCheckbox" style="margin-right: 8px; cursor: pointer;">
              <span style="cursor: pointer;">Other Assessments</span>
            </label>
          </div>
          
          <!-- Other Assessments Content (hidden by default) -->
          <div id="otherAssessmentsContent" class="assessment-card goal-card" style="display: none;">
            <div id="otherAssessmentsContainer">
              <div class="other-assessment-row">
                <!-- Assessment Name and Description Row -->
                <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 15px;">
                  <div class="input-group" style="display: flex; flex-direction: column;">
                    <label style="margin-bottom: 5px;"><strong><em>Assessment Name:</em></strong></label>
                    <input type="text" class="other-name" style="padding: 4px 8px; width: 200px;">
                  </div>

                  <div class="input-group" style="display: flex; flex-direction: column; flex-grow: 1;">
                    <label style="margin-bottom: 5px;"><strong><em>Assessment Description:</em></strong></label>
                    <textarea class="other-description" style="padding: 4px 8px; width: 100%; min-height: 60px; resize: vertical;" placeholder="Briefly describe the assessment."></textarea>
                  </div>
                </div>

                <!-- Date Entries Container -->
                <div class="other-dates-container" style="margin-left: 40px;">
                  <!-- Initial Date Entry Row -->
                  <div class="other-date-row" style="display: flex; gap: 20px; align-items: center; margin-bottom: 10px;">
                    <div class="input-group" style="display: flex; align-items: center;">
                      <label style="margin-right: 8px;"><strong><em>Date:</em></strong></label>
                      <input type="date" style="padding: 4px 8px; width: 140px;">
                    </div>

                    <div class="input-group" style="display: flex; align-items: center;">
                      <label style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
                      <input type="text" style="padding: 4px 8px; width: 60px;">
                    </div>

                    <div class="input-group" style="display: flex; align-items: center;">
                      <label style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
                      <input type="text" placeholder="Optional" style="padding: 4px 8px; width: 120px;">
                    </div>
                  </div>
                </div>

                <!-- Date Buttons Row -->
                <div class="other-date-button-row" style="margin-left: 40px; display: flex; gap: 10px;">
                  <button type="button" class="assessment-btn add-date-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center;">+ Date</button>
                  <button type="button" class="assessment-btn remove-date-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; display: none;">- Date</button>
                </div>
                <!-- Blank row above significance description -->
                <div style='height: 1rem;'></div>
                <!-- Significance Description Row -->
                <div class="other-significance-row" style="margin-bottom: 15px;">
                  <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem; margin-left: 40px;">Summary of Results:</label>
                  <textarea class="other-significance-textarea" rows="2" style="width: calc(100% - 80px); min-height: 60px; margin-left: 40px;" placeholder="Describe significance"></textarea>
                </div>
              </div>
            </div>

            <!-- Assessment Buttons Row -->
            <div class="other-button-row" style="display: flex; gap: 10px; margin-top: 35px;">
              <button type="button" class="assessment-btn add-assessment-btn" style="background-color: #6c757d; color: white; border: none; border-radius: 4px; padding: 6px 16px; cursor: pointer; font-size: 0.9rem; font-weight: bold;">+ Assessment</button>
              <button type="button" class="assessment-btn remove-assessment-btn" style="background-color: white !important; color: #6c757d !important; border: 1px solid #6c757d !important; border-radius: 4px; padding: 6px 16px; cursor: pointer; font-size: 0.9rem; font-weight: bold; visibility: hidden; display: none;">- Assessment</button>
            </div>
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

  // Function to initialize an assessment input area
  const initializeAssessmentInputArea = (section) => {
    const container = section.querySelector('.assessment-input-container');
    const addBtn = section.querySelector('.add-assessment-btn');
    const removeBtn = section.querySelector('.remove-assessment-btn');

    if (addBtn && container) {
      addBtn.addEventListener('click', () => {
        const newRow = document.createElement('div');
        newRow.className = 'assessment-input-row';
        newRow.innerHTML = `
          <label class="assessment-label">Assessment:</label>
          <textarea class="assessment-textarea" placeholder="Enter assessment details"></textarea>
        `;
        container.insertBefore(newRow, container.querySelector('.assessment-button-row'));

        // Initialize auto-expand for the new textarea
        initializeAutoExpand(newRow.querySelector('.assessment-textarea'));

        // Show remove button after adding a row
        if (removeBtn) {
          removeBtn.style.visibility = 'visible';
        }
      });
    }

    if (removeBtn && container) {
      removeBtn.addEventListener('click', () => {
        const inputRows = container.querySelectorAll('.assessment-input-row');
        if (inputRows.length > 1) {
          inputRows[inputRows.length - 1].remove();

          // Hide remove button if we're back to one assessment
          if (inputRows.length <= 2) {
            removeBtn.style.visibility = 'hidden';
          }
        }
      });
    }

    // Initialize auto-expand for existing textareas
    const existingTextareas = container.querySelectorAll('.assessment-textarea');
    existingTextareas.forEach(textarea => {
      initializeAutoExpand(textarea);
    });
  };

  // Initialize both assessment sections
  const stateSection = container.querySelector('.state-assessment-section');
  const localSection = container.querySelector('.local-assessment-section');
  
  if (stateSection) initializeAssessmentInputArea(stateSection);
  if (localSection) initializeAssessmentInputArea(localSection);

  // Initialize the summary textarea
  const summaryTextarea = container.querySelector('#assessmentSummaryBox');
  if (summaryTextarea) {
    initializeAutoExpand(summaryTextarea);
  }

  // Initialize auto-expand for new description textareas
  const pssaDesc = container.querySelector('#pssaDescriptionBox');
  if (pssaDesc) initializeAutoExpand(pssaDesc);
  const keystonesDesc = container.querySelector('#keystonesDescriptionBox');
  if (keystonesDesc) initializeAutoExpand(keystonesDesc);
  const pasaDesc = container.querySelector('#pasaDescriptionBox');
  if (pasaDesc) initializeAutoExpand(pasaDesc);

  // Add event listener for the PSSA checkbox
  const pssaCheckbox = container.querySelector('#pssaCheckbox');
  const pssaContent = container.querySelector('#pssaContent');
  
  if (pssaCheckbox && pssaContent) {
    pssaCheckbox.addEventListener('change', (e) => {
      pssaContent.style.display = e.target.checked ? 'block' : 'none';
    });

    // Make the entire label area clickable
    const pssaLabel = pssaCheckbox.closest('.checkbox-label');
    if (pssaLabel) {
      pssaLabel.addEventListener('click', (e) => {
        // Prevent double-triggering when clicking the checkbox itself
        if (e.target !== pssaCheckbox) {
          e.preventDefault();
          pssaCheckbox.click();
        }
      });
    }
  }

  // Add event listener for the Keystones checkbox
  const keystonesCheckbox = container.querySelector('#keystonesCheckbox');
  const keystonesContent = container.querySelector('#keystonesContent');
  
  if (keystonesCheckbox && keystonesContent) {
    keystonesCheckbox.addEventListener('change', (e) => {
      keystonesContent.style.display = e.target.checked ? 'block' : 'none';
    });

    // Make the entire label area clickable
    const keystonesLabel = keystonesCheckbox.closest('.checkbox-label');
    if (keystonesLabel) {
      keystonesLabel.addEventListener('click', (e) => {
        // Prevent double-triggering when clicking the checkbox itself
        if (e.target !== keystonesCheckbox) {
          e.preventDefault();
          keystonesCheckbox.click();
        }
      });
    }
  }

  // Add event listener for the PASA checkbox
  const pasaCheckbox = container.querySelector('#pasaCheckbox');
  const pasaContent = container.querySelector('#pasaContent');
  
  if (pasaCheckbox && pasaContent) {
    pasaCheckbox.addEventListener('change', (e) => {
      pasaContent.style.display = e.target.checked ? 'block' : 'none';
    });

    // Make the entire label area clickable
    const pasaLabel = pasaCheckbox.closest('.checkbox-label');
    if (pasaLabel) {
      pasaLabel.addEventListener('click', (e) => {
        // Prevent double-triggering when clicking the checkbox itself
        if (e.target !== pasaCheckbox) {
          e.preventDefault();
          pasaCheckbox.click();
        }
      });
    }
  }

  // Track number of test rows
  let testRowCount = 1;

  // Function to create a new test row
  const createTestRow = (testType = 'pssa') => {
    const row = document.createElement('div');
    row.className = `${testType}-input-row`;
    row.style.cssText = 'display: flex; gap: 20px; align-items: center; margin-top: 15px;';

    // Determine subject options based on test type
    let subjectOptions = '';
    let levelOptions = '';

    switch(testType) {
      case 'keystones':
        subjectOptions = `
          <option value="">Select</option>
          <option value="Algebra">Algebra</option>
          <option value="Literature">Literature</option>
          <option value="Biology">Biology</option>
        `;
        levelOptions = `
          <option value="">Select</option>
          <option value="Advanced">Advanced</option>
          <option value="Proficient">Proficient</option>
          <option value="Basic">Basic</option>
          <option value="Below Basic">Below Basic</option>
        `;
        break;
      case 'pasa':
        subjectOptions = `
          <option value="">Select</option>
          <option value="ELA">ELA</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
        `;
        levelOptions = `
          <option value="">Select</option>
          <option value="Advanced">Advanced</option>
          <option value="At Target">At Target</option>
          <option value="Approaching">Approaching</option>
          <option value="Emerging">Emerging</option>
        `;
        break;
      default: // pssa
        subjectOptions = `
          <option value="">Select</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
        `;
        levelOptions = `
          <option value="">Select</option>
          <option value="Advanced">Advanced</option>
          <option value="Proficient">Proficient</option>
          <option value="Basic">Basic</option>
          <option value="Below Basic">Below Basic</option>
        `;
    }

    row.innerHTML = `
      <!-- Year Dropdown -->
      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Year:</em></strong></label>
        <select style="padding: 4px 8px; width: 120px;">
          ${generateYearOptions()}
        </select>
      </div>

      <!-- Subject Dropdown -->
      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Subject:</em></strong></label>
        <select style="padding: 4px 8px; width: 120px;">
          ${subjectOptions}
        </select>
      </div>

      <!-- Score Input -->
      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
        <input type="text" style="padding: 4px 8px; width: 60px;">
      </div>

      <!-- Level Dropdown -->
      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
        <select style="padding: 4px 8px; width: 120px;">
          ${levelOptions}
        </select>
      </div>
    `;
    return row;
  };

  // Add event listeners for test buttons
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-test-btn')) {
      const testContainer = e.target.closest('#pssaContent, #keystonesContent, #pasaContent')?.querySelector('#pssaTestContainer, #keystonesTestContainer, #pasaTestContainer');
      const buttonRow = e.target.closest('.pssa-button-row, .keystones-button-row, .pasa-button-row');
      
      if (testContainer) {
        // Determine test type from container ID
        const testType = testContainer.id.replace('TestContainer', '');
        const newRow = createTestRow(testType);
        testContainer.appendChild(newRow);
        
        // Show remove button
        const removeBtn = buttonRow.querySelector('.remove-test-btn');
        if (removeBtn) {
          removeBtn.style.visibility = 'visible';
          removeBtn.style.display = 'block';
        } else {
          // Create remove button if it doesn't exist
          const newRemoveBtn = document.createElement('button');
          newRemoveBtn.type = 'button';
          newRemoveBtn.className = 'assessment-btn remove-test-btn';
          newRemoveBtn.textContent = '- Test';
          newRemoveBtn.style.cssText = 'visibility: visible; display: block; background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); border-radius: 4px; padding: 4px 12px; cursor: pointer; font-size: 0.9rem; font-weight: bold;';
          buttonRow.appendChild(newRemoveBtn);
        }
      }
    }
    
    if (e.target.classList.contains('remove-test-btn')) {
      const testContainer = e.target.closest('#pssaContent, #keystonesContent, #pasaContent')?.querySelector('#pssaTestContainer, #keystonesTestContainer, #pasaTestContainer');
      
      if (testContainer && testContainer.children.length > 1) {
        testContainer.lastElementChild.remove();
        
        // Hide remove button if we're back to one test
        if (testContainer.children.length === 1) {
          e.target.style.visibility = 'hidden';
          e.target.style.display = 'none';
        }
      }
    }
  });

  // Add event listener for the CBMs checkbox
  const cbmsCheckbox = container.querySelector('#cbmsCheckbox');
  const cbmsContent = container.querySelector('#cbmsContent');
  
  if (cbmsCheckbox && cbmsContent) {
    cbmsCheckbox.addEventListener('change', (e) => {
      // Only show/hide the CBMs section and ensure at least one assessment input is present
      const cbmsContainer = cbmsContent.querySelector('#cbmsContainer');
      if (e.target.checked) {
        if (cbmsContainer && cbmsContainer.children.length === 0) {
          cbmsContainer.appendChild(createCBMsAssessment());
        }
      }
      cbmsContent.style.display = e.target.checked ? 'block' : 'none';
    });

    // Make the entire label area clickable
    const cbmsLabel = cbmsCheckbox.closest('.checkbox-label');
    if (cbmsLabel) {
      cbmsLabel.addEventListener('click', (e) => {
        // Prevent double-triggering when clicking the checkbox itself
        if (e.target !== cbmsCheckbox) {
          e.preventDefault();
          cbmsCheckbox.click();
        }
      });
    }
  }

  // Function to create a new date row for CBMs
  const createCBMsDateRow = () => {
    const row = document.createElement('div');
    row.className = 'cbms-date-row';
    row.style.cssText = 'display: flex; gap: 20px; align-items: center; margin-bottom: 10px;';
    row.innerHTML = `
      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Date:</em></strong></label>
        <input type="date" style="padding: 4px 8px; width: 140px;">
      </div>

      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
        <input type="text" style="padding: 4px 8px; width: 60px;">
      </div>

      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
        <input type="text" placeholder="Optional" style="padding: 4px 8px; width: 120px;">
      </div>
    `;
    return row;
  };

  // Function to create a new CBMs assessment section
  const createCBMsAssessment = () => {
    const section = document.createElement('div');
    section.className = 'cbms-assessment-row';
    section.innerHTML = `
      <!-- Assessment Name and Description Row -->
      <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 15px;">
        <div class="input-group" style="display: flex; flex-direction: column;">
          <label style="margin-bottom: 5px;"><strong><em>Assessment Name:</em></strong></label>
          <input type="text" class="cbms-name" style="padding: 4px 8px; width: 200px;">
        </div>
        <div class="input-group" style="display: flex; flex-direction: column; flex-grow: 1;">
          <label style="margin-bottom: 5px;"><strong><em>Assessment Description:</em></strong></label>
          <textarea class="cbms-description" style="padding: 4px 8px; width: 100%; min-height: 60px; resize: vertical;" placeholder="Briefly describe the assessment."></textarea>
        </div>
      </div>
      <!-- Date Entries Container -->
      <div class="cbms-dates-container" style="margin-left: 40px;">
        <!-- Initial Date Entry Row -->
        <div class="cbms-date-row" style="display: flex; gap: 20px; align-items: center; margin-bottom: 10px;">
          <div class="input-group" style="display: flex; align-items: center;">
            <label style="margin-right: 8px;"><strong><em>Date:</em></strong></label>
            <input type="date" style="padding: 4px 8px; width: 140px;">
          </div>

          <div class="input-group" style="display: flex; align-items: center;">
            <label style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
            <input type="text" style="padding: 4px 8px; width: 60px;">
          </div>

          <div class="input-group" style="display: flex; align-items: center;">
            <label style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
            <input type="text" placeholder="Optional" style="padding: 4px 8px; width: 120px;">
          </div>
        </div>
      </div>
      <!-- Date Buttons Row -->
      <div class="cbms-date-button-row" style="margin-left: 0px; display: flex; gap: 10px;">
        <button type="button" class="assessment-btn add-date-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center;">+ Date</button>
        <button type="button" class="assessment-btn remove-date-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; display: none;">- Date</button>
      </div>
      <!-- Blank row above significance description -->
      <div style='height: 1rem;'></div>
      <!-- Significance Description Row -->
      <div class="cbms-significance-row" style="margin-bottom: 15px;">
        <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem; margin-left: 40px;">Summary of Results:</label>
        <textarea class="cbms-significance-textarea" rows="2" style="width: calc(100% - 80px); min-height: 60px; margin-left: 40px;" placeholder="Describe significance"></textarea>
      </div>
    `;
    return section;
  };

  // Add event listeners for CBMs buttons
  container.addEventListener('click', (e) => {
    // Handle CBMs date buttons
    if (e.target.classList.contains('add-date-btn')) {
      const datesContainer = e.target.closest('.cbms-assessment-row').querySelector('.cbms-dates-container');
      const dateButtonRow = e.target.closest('.cbms-date-button-row');
      
      if (datesContainer) {
        const newRow = createCBMsDateRow();
        datesContainer.appendChild(newRow);
        
        // Show the existing remove button
        const removeBtn = dateButtonRow.querySelector('.remove-date-btn');
        if (removeBtn) {
          removeBtn.style.visibility = 'visible';
          removeBtn.style.display = 'block';
        }
      }
    }
    
    if (e.target.classList.contains('remove-date-btn')) {
      const datesContainer = e.target.closest('.cbms-assessment-row').querySelector('.cbms-dates-container');
      
      if (datesContainer && datesContainer.children.length > 1) {
        datesContainer.lastElementChild.remove();
        
        // Hide the remove button if we're back to one date
        if (datesContainer.children.length === 1) {
          e.target.style.visibility = 'hidden';
          e.target.style.display = 'none';
        }
      }
    }

    // Handle CBMs assessment buttons
    if (e.target.classList.contains('add-assessment-btn')) {
      const cbmsContainer = container.querySelector('#cbmsContainer');
      const assessmentButtonRow = e.target.closest('.cbms-button-row');
      
      if (cbmsContainer) {
        // Add spacing, hr, and spacing before new assessment if not the first
        if (cbmsContainer.children.length > 0) {
          const spacer1 = document.createElement('div');
          spacer1.style.height = '1.5rem';
          cbmsContainer.appendChild(spacer1);
          const hr = document.createElement('hr');
          hr.style.margin = '0 0 1.5rem 0';
          cbmsContainer.appendChild(hr);
          const spacer2 = document.createElement('div');
          spacer2.style.height = '1.5rem';
          cbmsContainer.appendChild(spacer2);
        }
        const newAssessment = createCBMsAssessment();
        cbmsContainer.appendChild(newAssessment);
        
        // Show remove button if we have more than one assessment
        if (cbmsContainer.children.length > 1) {
          const removeBtn = assessmentButtonRow.querySelector('.remove-assessment-btn');
          if (removeBtn) {
            removeBtn.style.visibility = 'visible';
            removeBtn.style.display = 'block';
          }
        }
      }
    }
    
    if (e.target.classList.contains('remove-assessment-btn')) {
      const cbmsContainer = container.querySelector('#cbmsContainer');
      
      if (cbmsContainer && cbmsContainer.children.length > 1) {
        cbmsContainer.lastElementChild.remove();
        
        // Hide remove button if we're back to one assessment
        if (cbmsContainer.children.length === 1) {
          e.target.style.visibility = 'hidden';
          e.target.style.display = 'none';
        }
      }
    }
  });

  // Add event listener for the Other Assessments checkbox
  const otherAssessmentsCheckbox = container.querySelector('#otherAssessmentsCheckbox');
  const otherAssessmentsContent = container.querySelector('#otherAssessmentsContent');
  
  if (otherAssessmentsCheckbox && otherAssessmentsContent) {
    otherAssessmentsCheckbox.addEventListener('change', (e) => {
      otherAssessmentsContent.style.display = e.target.checked ? 'block' : 'none';
    });

    // Make the entire label area clickable
    const otherAssessmentsLabel = otherAssessmentsCheckbox.closest('.checkbox-label');
    if (otherAssessmentsLabel) {
      otherAssessmentsLabel.addEventListener('click', (e) => {
        // Prevent double-triggering when clicking the checkbox itself
        if (e.target !== otherAssessmentsCheckbox) {
          e.preventDefault();
          otherAssessmentsCheckbox.click();
        }
      });
    }
  }

  // Function to create a new date row for Other Assessments
  const createOtherDateRow = () => {
    const row = document.createElement('div');
    row.className = 'other-date-row';
    row.style.cssText = 'display: flex; gap: 20px; align-items: center; margin-bottom: 10px;';
    row.innerHTML = `
      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Date:</em></strong></label>
        <input type="date" style="padding: 4px 8px; width: 140px;">
      </div>

      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
        <input type="text" style="padding: 4px 8px; width: 60px;">
      </div>

      <div class="input-group" style="display: flex; align-items: center;">
        <label style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
        <input type="text" placeholder="Optional" style="padding: 4px 8px; width: 120px;">
      </div>
    `;
    return row;
  };

  // Function to create a new Other Assessment section
  const createOtherAssessment = () => {
    const section = document.createElement('div');
    section.className = 'other-assessment-row';
    section.innerHTML = `
      <!-- Assessment Name and Description Row -->
      <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 15px;">
        <div class="input-group" style="display: flex; flex-direction: column;">
          <label style="margin-bottom: 5px;"><strong><em>Assessment Name:</em></strong></label>
          <input type="text" class="other-name" style="padding: 4px 8px; width: 200px;">
        </div>
        <div class="input-group" style="display: flex; flex-direction: column; flex-grow: 1;">
          <label style="margin-bottom: 5px;"><strong><em>Assessment Description:</em></strong></label>
          <textarea class="other-description" style="padding: 4px 8px; width: 100%; min-height: 60px; resize: vertical;" placeholder="Briefly describe the assessment."></textarea>
        </div>
      </div>
      <!-- Date Entries Container -->
      <div class="other-dates-container" style="margin-left: 40px;">
        <!-- Initial Date Entry Row -->
        <div class="other-date-row" style="display: flex; gap: 20px; align-items: center; margin-bottom: 10px;">
          <div class="input-group" style="display: flex; align-items: center;">
            <label style="margin-right: 8px;"><strong><em>Date:</em></strong></label>
            <input type="date" style="padding: 4px 8px; width: 140px;">
          </div>
          <div class="input-group" style="display: flex; align-items: center;">
            <label style="margin-right: 8px;"><strong><em>Score:</em></strong></label>
            <input type="text" style="padding: 4px 8px; width: 60px;">
          </div>
          <div class="input-group" style="display: flex; align-items: center;">
            <label style="margin-right: 8px;"><strong><em>Level:</em></strong></label>
            <input type="text" placeholder="Optional" style="padding: 4px 8px; width: 120px;">
          </div>
        </div>
      </div>
      <!-- Date Buttons Row -->
      <div class="other-date-button-row" style="margin-left: 40px; display: flex; gap: 10px;">
        <button type="button" class="assessment-btn add-date-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center;">+ Date</button>
        <button type="button" class="assessment-btn remove-date-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; display: none;">- Date</button>
      </div>
      <!-- Blank row above significance description -->
      <div style='height: 1rem;'></div>
      <!-- Significance Description Row -->
      <div class="other-significance-row" style="margin-bottom: 15px;">
        <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem; margin-left: 40px;">Summary of Results:</label>
        <textarea class="other-significance-textarea" rows="2" style="width: calc(100% - 80px); min-height: 60px; margin-left: 40px;" placeholder="Describe significance"></textarea>
      </div>
    `;
    return section;
  };

  // Add event listeners for Other Assessment buttons
  container.addEventListener('click', (e) => {
    // Handle Other Assessment date buttons
    if (e.target.closest('.other-date-button-row')) {
      if (e.target.classList.contains('add-date-btn')) {
        const datesContainer = e.target.closest('.other-assessment-row').querySelector('.other-dates-container');
        const dateButtonRow = e.target.closest('.other-date-button-row');
        
        if (datesContainer) {
          const newRow = createOtherDateRow();
          datesContainer.appendChild(newRow);
          
          // Show remove button
          const removeBtn = dateButtonRow.querySelector('.remove-date-btn');
          if (removeBtn) {
            removeBtn.style.visibility = 'visible';
            removeBtn.style.display = 'block';
          }
        }
      }
      
      if (e.target.classList.contains('remove-date-btn')) {
        const datesContainer = e.target.closest('.other-assessment-row').querySelector('.other-dates-container');
        
        if (datesContainer && datesContainer.children.length > 1) {
          datesContainer.lastElementChild.remove();
          
          // Hide remove button if we're back to one date
          if (datesContainer.children.length === 1) {
            e.target.style.visibility = 'hidden';
            e.target.style.display = 'none';
          }
        }
      }
    }

    // Handle Other Assessment buttons
    if (e.target.closest('.other-button-row')) {
      if (e.target.classList.contains('add-assessment-btn')) {
        const otherContainer = container.querySelector('#otherAssessmentsContainer');
        const assessmentButtonRow = e.target.closest('.other-button-row');
        
        if (otherContainer) {
          // Add spacing, hr, and spacing before new assessment if not the first
          if (otherContainer.children.length > 0) {
            const spacer1 = document.createElement('div');
            spacer1.style.height = '1.5rem';
            otherContainer.appendChild(spacer1);
            const hr = document.createElement('hr');
            hr.style.margin = '0 0 1.5rem 0';
            otherContainer.appendChild(hr);
            const spacer2 = document.createElement('div');
            spacer2.style.height = '1.5rem';
            otherContainer.appendChild(spacer2);
          }
          const newAssessment = createOtherAssessment();
          otherContainer.appendChild(newAssessment);
          
          // Show remove button
          const removeBtn = assessmentButtonRow.querySelector('.remove-assessment-btn');
          if (removeBtn) {
            removeBtn.style.visibility = 'visible';
            removeBtn.style.display = 'block';
          }
        }
      }
      
      if (e.target.classList.contains('remove-assessment-btn')) {
        const otherContainer = container.querySelector('#otherAssessmentsContainer');
        
        if (otherContainer && otherContainer.children.length > 1) {
          otherContainer.lastElementChild.remove();
          
          // Hide remove button if we're back to one assessment
          if (otherContainer.children.length === 1) {
            e.target.style.visibility = 'hidden';
            e.target.style.display = 'none';
          }
        }
      }
    }
  });

  // After creating a new CBM or Other Assessment, auto-expand the significance textarea
  const initializeSignificanceAutoExpand = (container) => {
    container.querySelectorAll('.cbms-significance-textarea, .other-significance-textarea').forEach(textarea => {
      textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
      });
      // Initial auto-expand if pre-filled
      textarea.style.height = 'auto';
      textarea.style.height = (textarea.scrollHeight) + 'px';
    });
  };

  // Call initializeSignificanceAutoExpand after adding new assessments
  setTimeout(() => {
    initializeSignificanceAutoExpand(document);
  }, 0);
}
