export function createAcademicEvalForm(container) {
  // Helper function to generate year options
  const generateYearOptions = () => {
    let options = ['<option value="">Select: Year</option>'];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 20; year--) {
      options.push(`<option value="${year}">${year}</option>`);
    }
    return options.join('\n');
  };

  // Initial form setup
  container.innerHTML = `
    <form class="academic-eval-form">
      <div class="assessment-box">
        <div class="assessment-content">
          <!-- Evaluation Date Input -->
          <div class="eval-date-row" style="margin-bottom: 3.5rem; text-align: center;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; font-style: italic; text-align: center; width: 100%;">
              What is the date of the most recent Evaluation or Re-Evaluation?
            </label>
            <div style="display: flex; gap: 1rem; align-items: center; justify-content: center;">
              <select id="evalMonth" name="evalMonth" style="padding: 0.5rem; width: 160px;">
                <option value="">Month (optional)</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>

              <select id="evalDay" name="evalDay" style="padding: 0.5rem; width: 150px;">
                <option value="">Day (optional)</option>
                ${Array.from({length: 31}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
              </select>

              <select id="evalYear" name="evalYear" style="padding: 0.5rem; width: 140px;">
                ${generateYearOptions()}
              </select>
            </div>
          </div>

          <!-- Aptitude Tests Section -->
          <div class="progress-box collapsible-section">
            <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="aptitudeTestsContent">
              <span class="toggle-icon">+</span>
              Aptitude Tests
            </button>
            <div id="aptitudeTestsContent" class="section-content" style="display: none;">
              <div class="sdi-checkbox-row">
                <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
                  <input type="checkbox" id="wiscCheckbox" style="margin-right: 8px; cursor: pointer;">
                  <span style="cursor: pointer;">WISC-V</span>
                </label>
              </div>
              <div id="wiscContent" style="display: none;">
                <div style="text-align: center !important; margin: 0 -24px 1.5rem -24px; width: calc(100% + 48px) !important;">
                  <h3 style="font-size: 1.35rem; font-weight: bold !important; font-style: italic !important; color: #333 !important; text-align: center !important; margin: 0 auto 1.5rem auto !important; display: block !important;">Wechsler Intelligence Scale for Children, 5th Edition (WISC-V)</h3>
                  <div style="text-align: center; margin-bottom: 1.5rem;">
                    <label for="wiscDate" style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                    <input type="date" class="wisc-date-input" id="wiscDate" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                  </div>
                </div>
                <!-- Empty row for spacing -->
                <div style="height: 1.5rem;"></div>
                <!-- WISC-V Index Selection -->
                <div id="wiscIndexContainer">
                  <div class="wisc-index-section">
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Index:</label>
                      <div class="custom-dropdown wisc-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                        <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                          Select an Index or Subtest
                          <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                        </div>
                        <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 200px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                          <div class="custom-dropdown-option" data-value="" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Select an Index or Subtest</div>
                          <div class="custom-dropdown-option" data-value="fsiq" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">WISC-V Full-Scale IQ</div>
                          <div class="custom-dropdown-option" data-value="vci" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Verbal Comprehension Index</div>
                          <div class="custom-dropdown-option" data-value="similarities" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Similarities</div>
                          <div class="custom-dropdown-option" data-value="vocabulary" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Vocabulary</div>
                          <div class="custom-dropdown-option" data-value="vsi" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Visual Spatial Index</div>
                          <div class="custom-dropdown-option" data-value="block-design" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Block Design</div>
                          <div class="custom-dropdown-option" data-value="visual-puzzles" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Visual Puzzles</div>
                          <div class="custom-dropdown-option" data-value="fri" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Fluid Reasoning Index</div>
                          <div class="custom-dropdown-option" data-value="matrix-reasoning" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Matrix Reasoning</div>
                          <div class="custom-dropdown-option" data-value="figure-weights" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Figure Weights</div>
                          <div class="custom-dropdown-option" data-value="wmi" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Working Memory Index</div>
                          <div class="custom-dropdown-option" data-value="digit-span" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Digit Span</div>
                          <div class="custom-dropdown-option" data-value="picture-span" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Picture Span</div>
                          <div class="custom-dropdown-option" data-value="immediate-symbol" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Immediate Symbol Translation</div>
                          <div class="custom-dropdown-option" data-value="psi" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Processing Speed Index</div>
                          <div class="custom-dropdown-option" data-value="coding" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Coding</div>
                          <div class="custom-dropdown-option" data-value="symbol-search" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Symbol Search</div>
                          <div class="custom-dropdown-option" data-value="naming-speed-literacy" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Naming Speed Literacy</div>
                          <div class="custom-dropdown-option" data-value="naming-speed-quantity" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Naming Speed Quantity</div>
                          <div class="custom-dropdown-option" data-value="other" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Other</div>
                        </div>
                        <input type="hidden" class="wisc-index-select" name="wiscIndex" value="" />
                      </div>
                      <input type="text" class="wisc-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add description" />
                    </div>
                    <!-- Score Inputs Row -->
                    <div style="margin-top: 1.5rem; padding-left: 88px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; margin-right: 0; padding-right: 0; gap: 2rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                          <input type="text" class="wisc-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
                          <input type="text" class="wisc-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                          <select class="wisc-perc-rank" style="width: 100px; padding: 0.5rem;">
                            <option value="">Select</option>
                            ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
                          </select>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="wisc-qual-desc" style="width: 150px; padding: 0.5rem;">
                            <option value="">Select</option>
                            <option value="very-low">Very Low</option>
                            <option value="low">Low</option>
                            <option value="below-average">Below Average</option>
                            <option value="low-average">Low Average</option>
                            <option value="average">Average</option>
                            <option value="high-average">High Average</option>
                            <option value="above-average">Above Average</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Index Buttons Row -->
                  <div class="wisc-button-row" style="margin-top: 1.5rem; display: flex; gap: 10px; padding-left: 88px;">
                    <button type="button" class="assessment-btn add-index-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center;">+ Index</button>
                    <button type="button" class="assessment-btn remove-index-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; font-weight: bold;">- Index</button>
                  </div>
                  <!-- After the index container and before the index buttons row, add the summary box -->
                  <div style="margin-top: 2.5rem; padding-left: 88px;">
                    <label for="wiscSummaryResults" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                    <textarea class="wisc-summary-results" id="wiscSummaryResults" rows="4" style="width: 90%; max-width: 700px; padding: 0.75rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;"></textarea>
                  </div>
                </div>
              </div>
              <div class="sdi-checkbox-row">
                <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
                  <input type="checkbox" id="otherAptitudeCheckbox" style="margin-right: 8px; cursor: pointer;">
                  <span style="cursor: pointer;">Other Assessment</span>
                </label>
                <input type="text" class="other-aptitude-input" style="display:none; margin-left: 2rem; width: 300px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px; margin-top: 0.5rem;" placeholder="Specify Other Assessment" />
              </div>
              <div class="other-aptitude-description-row" style="display:none; margin-left: 2rem; margin-top: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <label for="otherAptitudeDescription" style="font-weight: bold; min-width: 160px;">Assessment Description</label>
                  <textarea class="other-aptitude-description" id="otherAptitudeDescription" rows="2" style="width: 500px; min-height: 48px; max-width: 800px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px; resize: vertical; font-size: 1rem; margin-top: 0;" placeholder="Enter description"></textarea>
                </div>
              </div>
              <!-- Other Aptitude Full Input Section -->
              <div class="other-aptitude-section" style="display:none; margin-top: 2rem;">
                <div class="other-aptitude-header" style="text-align: center; margin-bottom: 1.5rem;">
                  <h3 class="other-aptitude-title" style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.5rem auto; display: block;"></h3>
                  <p class="other-aptitude-desc" style="font-size: 1rem; color: #333; text-align: center; margin: 0 auto 0.5rem auto; display: block;"></p>
                </div>
                <div id="otherAptitudeIndexContainer">
                  <div class="other-aptitude-index-section">
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Index/Subtest:</label>
                      <input type="text" class="other-aptitude-index-input" style="width: 300px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Enter Index or Subtest" />
                    </div>
                    <div style="margin-top: 1.5rem; padding-left: 88px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 2rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                          <input type="text" class="other-aptitude-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
                          <input type="text" class="other-aptitude-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                          <select class="other-aptitude-perc-rank" style="width: 100px; padding: 0.5rem;">
                            <option value="">Select</option>
                            ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
                          </select>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="other-aptitude-qual-desc" style="width: 150px; padding: 0.5rem;">
                            <option value="">Select</option>
                            <option value="very-low">Very Low</option>
                            <option value="low">Low</option>
                            <option value="below-average">Below Average</option>
                            <option value="low-average">Low Average</option>
                            <option value="average">Average</option>
                            <option value="high-average">High Average</option>
                            <option value="above-average">Above Average</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="other-aptitude-button-row" style="margin-top: 1.5rem; display: flex; gap: 10px; padding-left: 88px;">
                  <button type="button" class="assessment-btn add-other-aptitude-subtest-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: bold;">+ Subtest</button>
                  <button type="button" class="assessment-btn remove-other-aptitude-subtest-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; font-weight: bold;">- Subtest</button>
                </div>
                <div style="margin-top: 2.5rem; padding-left: 88px;">
                  <label for="otherAptitudeSummaryResults" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <textarea class="other-aptitude-summary-results" id="otherAptitudeSummaryResults" rows="4" style="width: 90%; max-width: 700px; padding: 0.75rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;"></textarea>
                </div>
                <!-- Button row for adding/removing assessments, rendered only once below all sections -->
                <div class="other-aptitude-assessment-button-row" style="margin-top: 1.5rem; display: flex; gap: 10px; padding-left: 40px;">
                  <button type="button" class="assessment-btn add-other-aptitude-assessment-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 110px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: bold;">+ Assessment</button>
                  <button type="button" class="assessment-btn remove-other-aptitude-assessment-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 110px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: bold;">- Assessment</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Achievement Tests Section -->
          <div class="progress-box collapsible-section">
            <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="achievementTestsContent">
              <span class="toggle-icon">+</span>
              Achievement Tests
            </button>
            <div id="achievementTestsContent" class="section-content" style="display: none;">
              <div class="sdi-checkbox-row">
                <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
                  <input type="checkbox" id="wiatCheckbox" style="margin-right: 8px; cursor: pointer;">
                  <span style="cursor: pointer;">WIAT-III</span>
                </label>
              </div>
              <div id="wiatContent" style="display: none;">
                <div style="text-align: center !important; margin: 0 -24px 1.5rem -24px; width: calc(100% + 48px) !important;">
                  <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 1.5rem auto; display: block;">Wechsler Individual Achievement Test, 3rd Edition (WIAT-III)</h3>
                  <div style="text-align: center; margin-bottom: 1.5rem;">
                    <label for="wiatDate" style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                    <input type="date" class="wiat-date-input" id="wiatDate" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                  </div>
                </div>
                <div style="height: 1.5rem;"></div>
                <div id="wiatIndexContainer">
                  <div class="wiat-index-section">
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Subtest:</label>
                      <div class="custom-dropdown wiat-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                        <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                          Select a Subtest
                          <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                        </div>
                        <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 200px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                          <div class="custom-dropdown-option" data-value="" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Select a Subtest</div>
                          <div class="custom-dropdown-option" data-value="total-achievement" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Total Achievement</div>
                          <div class="custom-dropdown-option" data-value="basic-reading" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Basic Reading</div>
                          <div class="custom-dropdown-option" data-value="word-reading" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Word Reading</div>
                          <div class="custom-dropdown-option" data-value="pseudoword-decoding" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Pseudoword Decoding</div>
                          <div class="custom-dropdown-option" data-value="reading-comp-fluency" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Reading Comprehension and Fluency</div>
                          <div class="custom-dropdown-option" data-value="reading-comprehension" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Reading Comprehension</div>
                          <div class="custom-dropdown-option" data-value="oral-reading-fluency" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Oral Reading Fluency</div>
                          <div class="custom-dropdown-option" data-value="oral-language" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Oral Language</div>
                          <div class="custom-dropdown-option" data-value="listening-comprehension" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Listening Comprehension</div>
                          <div class="custom-dropdown-option" data-value="receptive-vocabulary" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Receptive Vocabulary</div>
                          <div class="custom-dropdown-option" data-value="oral-discourse-comprehension" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Oral Discourse Comprehension</div>
                          <div class="custom-dropdown-option" data-value="oral-expression" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Oral Expression</div>
                          <div class="custom-dropdown-option" data-value="expressive-vocabulary" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Expressive Vocabulary</div>
                          <div class="custom-dropdown-option" data-value="oral-word-fluency" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Oral Word Fluency</div>
                          <div class="custom-dropdown-option" data-value="sentence-repetition" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Repetition</div>
                          <div class="custom-dropdown-option" data-value="written-expression" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Written Expression</div>
                          <div class="custom-dropdown-option" data-value="spelling" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Spelling</div>
                          <div class="custom-dropdown-option" data-value="sentence-composition" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Composition</div>
                          <div class="custom-dropdown-option" data-value="sentence-combining" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Combining</div>
                          <div class="custom-dropdown-option" data-value="sentence-building" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Building</div>
                          <div class="custom-dropdown-option" data-value="essay-composition" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Essay Composition</div>
                          <div class="custom-dropdown-option" data-value="theme-development" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Theme Development and Text Organization</div>
                          <div class="custom-dropdown-option" data-value="grammar-mechanics" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Grammar and Mechanics</div>
                          <div class="custom-dropdown-option" data-value="word-count" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Word Count</div>
                          <div class="custom-dropdown-option" data-value="mathematics" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Mathematics</div>
                          <div class="custom-dropdown-option" data-value="mathematics-composite" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Mathematics Composite</div>
                          <div class="custom-dropdown-option" data-value="math-problem-solving" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Problem Solving</div>
                          <div class="custom-dropdown-option" data-value="numerical-operations" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Numerical Operations</div>
                          <div class="custom-dropdown-option" data-value="math-fluency" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Fluency</div>
                          <div class="custom-dropdown-option" data-value="math-fluency-addition" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Fluency – Addition</div>
                          <div class="custom-dropdown-option" data-value="math-fluency-subtraction" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Fluency – Subtraction</div>
                          <div class="custom-dropdown-option" data-value="math-fluency-multiplication" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Fluency – Multiplication</div>
                          <div class="custom-dropdown-option" data-value="other" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Other</div>
                        </div>
                        <input type="hidden" class="wiat-index-select" name="wiatIndex" value="" />
                      </div>
                      <input type="text" class="wiat-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add description" />
                    </div>
                    <div style="margin-top: 1.5rem; padding-left: 88px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; margin-right: 0; padding-right: 0; gap: 2rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                          <input type="text" class="wiat-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
                          <input type="text" class="wiat-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                          <select class="wiat-perc-rank" style="width: 100px; padding: 0.5rem;">
                            <option value="">Select</option>
                            ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
                          </select>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="wiat-qual-desc" style="width: 150px; padding: 0.5rem;">
                            <option value="">Select</option>
                            <option value="very-low">Very Low</option>
                            <option value="low">Low</option>
                            <option value="below-average">Below Average</option>
                            <option value="low-average">Low Average</option>
                            <option value="average">Average</option>
                            <option value="high-average">High Average</option>
                            <option value="above-average">Above Average</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wiat-button-row" style="margin-top: 1.5rem; display: flex; gap: 10px; padding-left: 88px;">
                  <button type="button" class="assessment-btn add-wiat-index-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center;">+ Subtest</button>
                  <button type="button" class="assessment-btn remove-wiat-index-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; font-weight: bold;">- Subtest</button>
                </div>
                <div style="margin-top: 2.5rem; padding-left: 88px;">
                  <label for="wiatSummaryResults" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <textarea class="wiat-summary-results" id="wiatSummaryResults" rows="4" style="width: 90%; max-width: 700px; padding: 0.75rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;"></textarea>
                </div>
              </div>
              <div class="sdi-checkbox-row" style="margin-top: 2rem;">
                <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer;">
                  <input type="checkbox" id="wjCheckbox" style="margin-right: 8px; cursor: pointer;">
                  <span style="cursor: pointer;">WJ IV Ach</span>
                </label>
              </div>
              <div id="wjContent" style="display: none;">
                <div style="text-align: center !important; margin: 0 -24px 1.5rem -24px; width: calc(100% + 48px) !important;">
                  <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 1.5rem auto; display: block;">Woodcock-Johnson Tests of Achievement, Fourth Edition (WJ-IV)</h3>
                  <div style="text-align: center; margin-bottom: 1.5rem;">
                    <label for="wjDate" style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                    <input type="date" class="wj-date-input" id="wjDate" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                  </div>
                </div>
                <div style="height: 1.5rem;"></div>
                <div id="wjIndexContainer">
                  <div class="wj-index-section">
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Subtest:</label>
                      <div class="custom-dropdown wj-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                        <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                          Select a Subtest
                          <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                        </div>
                        <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 200px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                          <div class="custom-dropdown-option" data-value="" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Select a Subtest</div>
                          <div class="custom-dropdown-option" data-value="total-achievement" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Total Achievement</div>
                          <div class="custom-dropdown-option" data-value="broad-reading" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Broad Reading</div>
                          <div class="custom-dropdown-option" data-value="letter-word-identification" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Letter-Word Identification</div>
                          <div class="custom-dropdown-option" data-value="passage-comprehension" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Passage Comprehension</div>
                          <div class="custom-dropdown-option" data-value="word-attack" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Word Attack</div>
                          <div class="custom-dropdown-option" data-value="broad-mathematics" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Broad Mathematics</div>
                          <div class="custom-dropdown-option" data-value="calculation" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Calculation</div>
                          <div class="custom-dropdown-option" data-value="math-facts-fluency" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Facts Fluency</div>
                          <div class="custom-dropdown-option" data-value="applied-problems" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Applied Problems</div>
                          <div class="custom-dropdown-option" data-value="broad-written-language" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Broad Written Language</div>
                          <div class="custom-dropdown-option" data-value="spelling" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Spelling</div>
                          <div class="custom-dropdown-option" data-value="writing-samples" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Writing Samples</div>
                          <div class="custom-dropdown-option" data-value="sentence-writing-fluency" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Writing Fluency</div>
                          <div class="custom-dropdown-option" data-value="academic-skills-cluster" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Academic Skills Cluster</div>
                          <div class="custom-dropdown-option" data-value="reading-writing-math-fluency" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Reading, Writing, and Math Fluency</div>
                          <div class="custom-dropdown-option" data-value="sentence-reading-fluency" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Reading Fluency</div>
                          <div class="custom-dropdown-option" data-value="math-facts-fluency-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Facts Fluency</div>
                          <div class="custom-dropdown-option" data-value="sentence-writing-fluency-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Writing Fluency</div>
                          <div class="custom-dropdown-option" data-value="academic-applications-cluster" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Academic Applications Cluster</div>
                          <div class="custom-dropdown-option" data-value="higher-order-academic-reasoning" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Higher-Order Academic Reasoning</div>
                          <div class="custom-dropdown-option" data-value="applied-problems-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Applied Problems</div>
                          <div class="custom-dropdown-option" data-value="writing-samples-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Writing Samples</div>
                          <div class="custom-dropdown-option" data-value="passage-comprehension-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Passage Comprehension</div>
                          <div class="custom-dropdown-option" data-value="reading" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Reading</div>
                          <div class="custom-dropdown-option" data-value="reading-skills" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Reading Skills</div>
                          <div class="custom-dropdown-option" data-value="letter-word-identification-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Letter-Word Identification</div>
                          <div class="custom-dropdown-option" data-value="word-attack-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Word Attack</div>
                          <div class="custom-dropdown-option" data-value="reading-comprehension" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Reading Comprehension</div>
                          <div class="custom-dropdown-option" data-value="passage-comprehension-3" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Passage Comprehension</div>
                          <div class="custom-dropdown-option" data-value="reading-fluency" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Reading Fluency</div>
                          <div class="custom-dropdown-option" data-value="sentence-reading-fluency-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Reading Fluency</div>
                          <div class="custom-dropdown-option" data-value="mathematics" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Mathematics</div>
                          <div class="custom-dropdown-option" data-value="math-calculation-skills" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Calculation Skills</div>
                          <div class="custom-dropdown-option" data-value="calculation-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Calculation</div>
                          <div class="custom-dropdown-option" data-value="math-facts-fluency-3" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Facts Fluency</div>
                          <div class="custom-dropdown-option" data-value="math-problem-solving" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Math Problem Solving</div>
                          <div class="custom-dropdown-option" data-value="applied-problems-3" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Applied Problems</div>
                          <div class="custom-dropdown-option" data-value="written-language" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Written Language</div>
                          <div class="custom-dropdown-option" data-value="spelling-bold-italic" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Spelling</div>
                          <div class="custom-dropdown-option" data-value="spelling-2" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Spelling</div>
                          <div class="custom-dropdown-option" data-value="writing-fluency" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Writing Fluency</div>
                          <div class="custom-dropdown-option" data-value="sentence-writing-fluency-3" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sentence Writing Fluency</div>
                          <div class="custom-dropdown-option" data-value="writing-quality" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Writing Quality</div>
                          <div class="custom-dropdown-option" data-value="writing-samples-3" style="font-weight: normal; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Writing Samples</div>
                          <div class="custom-dropdown-option" data-value="other" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Other</div>
                        </div>
                        <input type="hidden" class="wj-index-select" name="wjIndex" value="" />
                      </div>
                      <input type="text" class="wj-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add description" />
                    </div>
                    <div style="margin-top: 1.5rem; padding-left: 88px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; margin-right: 0; padding-right: 0; gap: 2rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                          <input type="text" class="wj-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
                          <input type="text" class="wj-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                          <select class="wj-perc-rank" style="width: 100px; padding: 0.5rem;">
                            <option value="">Select</option>
                            ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
                          </select>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="wj-qual-desc" style="width: 150px; padding: 0.5rem;">
                            <option value="">Select</option>
                            <option value="very-low">Very Low</option>
                            <option value="low">Low</option>
                            <option value="below-average">Below Average</option>
                            <option value="low-average">Low Average</option>
                            <option value="average">Average</option>
                            <option value="high-average">High Average</option>
                            <option value="above-average">Above Average</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wj-button-row" style="margin-top: 1.5rem; display: flex; gap: 10px; padding-left: 88px;">
                  <button type="button" class="assessment-btn add-wj-index-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center;">+ Subtest</button>
                  <button type="button" class="assessment-btn remove-wj-index-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; font-weight: bold;">- Subtest</button>
                </div>
                <div style="margin-top: 2.5rem; padding-left: 88px;">
                  <label for="wjSummaryResults" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <textarea class="wj-summary-results" id="wjSummaryResults" rows="4" style="width: 90%; max-width: 700px; padding: 0.75rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;"></textarea>
                </div>
              </div>
              <div class="sdi-checkbox-row" style="margin-top: 2rem;">
                <label class="checkbox-label" style="display: flex; align-items: center; cursor: pointer; margin-top: 0.5rem;">
                  <input type="checkbox" id="otherAchievementCheckbox" style="margin-right: 8px; cursor: pointer;">
                  <span style="cursor: pointer;">Other Assessment</span>
                </label>
                <input type="text" class="other-achievement-input" style="display:none; margin-left: 2rem; width: 300px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px; margin-top: 0.5rem;" placeholder="Specify Other Assessment" />
              </div>
              <div class="other-achievement-description-row" style="display:none; margin-left: 2rem; margin-top: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <label for="otherAchievementDescription" style="font-weight: bold; min-width: 160px;">Assessment Description</label>
                  <textarea class="other-achievement-description" id="otherAchievementDescription" rows="2" style="width: 500px; min-height: 48px; max-width: 800px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px; resize: vertical; font-size: 1rem; margin-top: 0;" placeholder="Enter description"></textarea>
                </div>
              </div>
              <!-- Other Achievement Full Input Section -->
              <div class="other-achievement-section" style="display:none; margin-top: 2rem;">
                <div class="other-achievement-header" style="text-align: center; margin-bottom: 1.5rem;">
                  <h3 class="other-achievement-title" style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.5rem auto; display: block;"></h3>
                  <p class="other-achievement-desc" style="font-size: 1rem; color: #333; text-align: center; margin: 0 auto 0.5rem auto; display: block;"></p>
                </div>
                <div id="otherAchievementIndexContainer">
                  <div class="other-achievement-index-section">
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Index/Subtest:</label>
                      <input type="text" class="other-achievement-index-input" style="width: 300px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Enter Index or Subtest" />
                    </div>
                    <div style="margin-top: 1.5rem; padding-left: 88px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 2rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                          <input type="text" class="other-achievement-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
                          <input type="text" class="other-achievement-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                          <select class="other-achievement-perc-rank" style="width: 100px; padding: 0.5rem;">
                            <option value="">Select</option>
                            ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
                          </select>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="other-achievement-qual-desc" style="width: 150px; padding: 0.5rem;">
                            <option value="">Select</option>
                            <option value="very-low">Very Low</option>
                            <option value="low">Low</option>
                            <option value="below-average">Below Average</option>
                            <option value="low-average">Low Average</option>
                            <option value="average">Average</option>
                            <option value="high-average">High Average</option>
                            <option value="above-average">Above Average</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="other-achievement-button-row" style="margin-top: 1.5rem; display: flex; gap: 10px; padding-left: 88px;">
                  <button type="button" class="assessment-btn add-other-achievement-subtest-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: bold;">+ Subtest</button>
                  <button type="button" class="assessment-btn remove-other-achievement-subtest-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 70px; height: 28px; display: flex; align-items: center; justify-content: center; visibility: hidden; font-weight: bold;">- Subtest</button>
                </div>
                <div style="margin-top: 2.5rem; padding-left: 88px;">
                  <label for="otherAchievementSummaryResults" style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <textarea class="other-achievement-summary-results" id="otherAchievementSummaryResults" rows="4" style="width: 90%; max-width: 700px; padding: 0.75rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;"></textarea>
                </div>
                <!-- Button row for adding/removing assessments, rendered only once below all sections -->
                <div class="other-achievement-assessment-button-row" style="margin-top: 1.5rem; display: flex; gap: 10px; padding-left: 40px;">
                  <button type="button" class="assessment-btn add-other-achievement-assessment-btn" style="background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 110px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: bold;">+ Assessment</button>
                  <button type="button" class="assessment-btn remove-other-achievement-assessment-btn" style="background-color: white; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 110px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: bold;">- Assessment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  `;

  // Initialize collapsible sections
  const initializeCollapsible = () => {
    const toggleButtons = container.querySelectorAll('.section-toggle-btn');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const content = container.querySelector('#' + button.getAttribute('aria-controls'));
        const icon = button.querySelector('.toggle-icon');
        
        // Toggle the expanded state
        button.setAttribute('aria-expanded', !isExpanded);
        content.style.display = isExpanded ? 'none' : 'block';
        
        // Update the icon
        icon.textContent = isExpanded ? '+' : '-';
      });
    });
  };

  // Function to create a new WISC-V index section
  const createWiscIndexSection = () => {
    const section = document.createElement('div');
    section.className = 'wisc-index-section';
    section.innerHTML = `
      <!-- Double spacing between indexes -->
      <div style="height: 3rem;"></div>

      <!-- Index content -->
      <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
        <label style="font-weight: bold;">Index:</label>
        <div class="custom-dropdown wisc-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
          <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
            Select an Index or Subtest
            <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
          </div>
          <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 200px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
            <div class="custom-dropdown-option" data-value="" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Select an Index or Subtest</div>
            <div class="custom-dropdown-option" data-value="fsiq" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">WISC-V Full-Scale IQ</div>
            <div class="custom-dropdown-option" data-value="vci" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Verbal Comprehension Index</div>
            <div class="custom-dropdown-option" data-value="similarities" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Similarities</div>
            <div class="custom-dropdown-option" data-value="vocabulary" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Vocabulary</div>
            <div class="custom-dropdown-option" data-value="vsi" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Visual Spatial Index</div>
            <div class="custom-dropdown-option" data-value="block-design" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Block Design</div>
            <div class="custom-dropdown-option" data-value="visual-puzzles" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Visual Puzzles</div>
            <div class="custom-dropdown-option" data-value="fri" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Fluid Reasoning Index</div>
            <div class="custom-dropdown-option" data-value="matrix-reasoning" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Matrix Reasoning</div>
            <div class="custom-dropdown-option" data-value="figure-weights" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Figure Weights</div>
            <div class="custom-dropdown-option" data-value="wmi" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Working Memory Index</div>
            <div class="custom-dropdown-option" data-value="digit-span" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Digit Span</div>
            <div class="custom-dropdown-option" data-value="picture-span" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Picture Span</div>
            <div class="custom-dropdown-option" data-value="immediate-symbol" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Immediate Symbol Translation</div>
            <div class="custom-dropdown-option" data-value="psi" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Processing Speed Index</div>
            <div class="custom-dropdown-option" data-value="coding" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Coding</div>
            <div class="custom-dropdown-option" data-value="symbol-search" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Symbol Search</div>
            <div class="custom-dropdown-option" data-value="naming-speed-literacy" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Naming Speed Literacy</div>
            <div class="custom-dropdown-option" data-value="naming-speed-quantity" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Naming Speed Quantity</div>
            <div class="custom-dropdown-option" data-value="other" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Other</div>
          </div>
          <input type="hidden" class="wisc-index-select" name="wiscIndex" value="" />
        </div>
        <input type="text" class="wisc-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add description" />
      </div>
      <div style="margin-top: 1.5rem; padding-left: 88px;">
        <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; margin-right: 0; padding-right: 0; gap: 2rem;">
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
            <input type="text" class="wisc-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
            <input type="text" class="wisc-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
            <select class="wisc-perc-rank" style="width: 100px; padding: 0.5rem;">
              <option value="">Select</option>
              ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
            </select>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
            <select class="wisc-qual-desc" style="width: 150px; padding: 0.5rem;">
              <option value="">Select</option>
              <option value="very-low">Very Low</option>
              <option value="low">Low</option>
              <option value="below-average">Below Average</option>
              <option value="low-average">Low Average</option>
              <option value="average">Average</option>
              <option value="high-average">High Average</option>
              <option value="above-average">Above Average</option>
            </select>
          </div>
        </div>
      </div>
    `;
    return section;
  };

  // Initialize checkbox functionality
  const wiscCheckbox = container.querySelector('#wiscCheckbox');
  const wiscContent = container.querySelector('#wiscContent');
  const wiscLabel = wiscCheckbox?.closest('.checkbox-label');
  
  if (wiscCheckbox && wiscContent && wiscLabel) {
    // Make the entire label area clickable
    wiscLabel.addEventListener('click', (e) => {
      // Prevent double-triggering when clicking the checkbox itself
      if (e.target !== wiscCheckbox) {
        e.preventDefault();
        wiscCheckbox.click();
      }
    });

    // Handle checkbox state change
    wiscCheckbox.addEventListener('change', (e) => {
      wiscContent.style.display = e.target.checked ? 'block' : 'none';
      
      // Initialize Index buttons when content is shown
      if (e.target.checked) {
        const addIndexBtn = wiscContent.querySelector('.add-index-btn');
        const removeIndexBtn = wiscContent.querySelector('.remove-index-btn');
        const indexContainer = wiscContent.querySelector('#wiscIndexContainer');

        if (addIndexBtn && indexContainer) {
          addIndexBtn.addEventListener('click', () => {
            const indexSections = indexContainer.querySelectorAll('.wisc-index-section');
            const newSection = createWiscIndexSection();
            indexContainer.appendChild(newSection);
            // Add targeted event listener for the new WISC dropdown
            const dropdown = newSection.querySelector('.wisc-index-dropdown');
            const selected = dropdown.querySelector('.custom-dropdown-selected');
            const options = dropdown.querySelector('.custom-dropdown-options');
            const optionDivs = dropdown.querySelectorAll('.custom-dropdown-option');
            const hiddenInput = dropdown.querySelector('input[type="hidden"]');
            const otherInput = newSection.querySelector('.wisc-index-other-input');
            selected.addEventListener('click', () => {
              options.style.display = options.style.display === 'block' ? 'none' : 'block';
              selected.style.borderColor = options.style.display === 'block' ? '#888' : '#000';
            });
            optionDivs.forEach(opt => {
              opt.addEventListener('mouseenter', () => { opt.style.background = '#f0f4fa'; });
              opt.addEventListener('mouseleave', () => { opt.style.background = ''; });
              opt.addEventListener('click', () => {
                while (selected.firstChild) selected.removeChild(selected.firstChild);
                selected.appendChild(document.createTextNode(opt.textContent));
                const arrow = document.createElement('span');
                arrow.className = 'custom-dropdown-arrow';
                arrow.style.cssText = 'position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;';
                selected.appendChild(arrow);
                selected.style.fontWeight = opt.style.fontWeight;
                selected.style.fontStyle = opt.style.fontStyle;
                hiddenInput.value = opt.getAttribute('data-value');
                options.style.display = 'none';
                selected.style.borderColor = '#000';
                if (opt.getAttribute('data-value') === 'other') {
                  if (otherInput) otherInput.style.display = 'inline-block';
                } else {
                  if (otherInput) otherInput.style.display = 'none';
                }
              });
            });
            // Show remove button if we have more than one section
            if (indexSections.length >= 1 && removeIndexBtn) {
              removeIndexBtn.style.visibility = 'visible';
            }
          });
        }

        if (removeIndexBtn && indexContainer) {
          removeIndexBtn.addEventListener('click', () => {
            const indexSections = indexContainer.querySelectorAll('.wisc-index-section');
            if (indexSections.length > 1) {
              indexSections[indexSections.length - 1].remove();

              // Hide remove button if we're back to one section
              if (indexSections.length <= 2) {
                removeIndexBtn.style.visibility = 'hidden';
              }
            }
          });
        }
      }
    });
  }

  // Initialize the collapsible sections
  initializeCollapsible();

  // === WISC-V Data Serialization ===
  window.getWiscVData = function() {
    const data = [];
    const wiscIndexSections = document.querySelectorAll('.wisc-index-section');
    wiscIndexSections.forEach(section => {
      const indexSelect = section.querySelector('.wisc-index-select');
      const selectedOption = indexSelect?.selectedOptions[0];
      const indexLabel = selectedOption?.textContent || '';
      const indexStyle = selectedOption?.getAttribute('style') || '';
      const stdScore = section.querySelector('.wisc-std-score')?.value || '';
      const confInt = section.querySelector('.wisc-conf-int')?.value || '';
      const percRank = section.querySelector('.wisc-perc-rank')?.value || '';
      const qualDescSelect = section.querySelector('.wisc-qual-desc');
      const qualDesc = qualDescSelect?.options?.[qualDescSelect.selectedIndex]?.textContent || '';
      data.push({ indexLabel, indexStyle, stdScore, confInt, percRank, qualDesc });
    });
    return data;
  };

  // After initializing WISC-V section, set up event listeners to update window.wiscVData
  if (wiscContent) {
    wiscContent.addEventListener('input', () => {
      window.wiscVData = window.getWiscVData();
    });
    wiscContent.addEventListener('change', () => {
      window.wiscVData = window.getWiscVData();
    });
  }

  // Refactor dropdown event listener setup into a function
  function setupWiscDropdownListeners() {
    // Support all custom dropdowns for WISC-V, WIAT-III, and WJ IV Ach
    document.querySelectorAll('.wisc-index-dropdown, .wiat-index-dropdown, .wj-index-dropdown').forEach(dropdown => {
      const selected = dropdown.querySelector('.custom-dropdown-selected');
      const options = dropdown.querySelector('.custom-dropdown-options');
      const optionDivs = dropdown.querySelectorAll('.custom-dropdown-option');
      const hiddenInput = dropdown.querySelector('input[type="hidden"]');
      // Find the correct 'other' input for each section
      let otherInput = null;
      if (dropdown.classList.contains('wisc-index-dropdown')) {
        otherInput = dropdown.parentElement.querySelector('.wisc-index-other-input');
      } else if (dropdown.classList.contains('wiat-index-dropdown')) {
        otherInput = dropdown.parentElement.querySelector('.wiat-index-other-input');
      } else if (dropdown.classList.contains('wj-index-dropdown')) {
        otherInput = dropdown.parentElement.querySelector('.wj-index-other-input');
      }
      // Remove previous click listeners to avoid duplicates
      const newSelected = selected.cloneNode(true);
      selected.parentNode.replaceChild(newSelected, selected);
      // Open/close dropdown
      newSelected.addEventListener('click', () => {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
        newSelected.style.borderColor = options.style.display === 'block' ? '#888' : '#000';
      });
      // Option click
      optionDivs.forEach(opt => {
        opt.addEventListener('mouseenter', () => {
          opt.style.background = '#f0f4fa';
        });
        opt.addEventListener('mouseleave', () => {
          opt.style.background = '';
        });
        opt.addEventListener('click', () => {
          // Remove all children
          while (newSelected.firstChild) newSelected.removeChild(newSelected.firstChild);
          // Add the selected text
          newSelected.appendChild(document.createTextNode(opt.textContent));
          // Re-add the arrow
          const arrow = document.createElement('span');
          arrow.className = 'custom-dropdown-arrow';
          arrow.style.cssText = 'position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;';
          newSelected.appendChild(arrow);
          newSelected.style.fontWeight = opt.style.fontWeight;
          newSelected.style.fontStyle = opt.style.fontStyle;
          hiddenInput.value = opt.getAttribute('data-value');
          options.style.display = 'none';
          newSelected.style.borderColor = '#000';
          // Show/hide 'Other' input if needed
          if (opt.getAttribute('data-value') === 'other') {
            if (otherInput) otherInput.style.display = 'inline-block';
          } else {
            if (otherInput) otherInput.style.display = 'none';
          }
        });
      });
      // Close on blur
      dropdown.addEventListener('blur', () => {
        options.style.display = 'none';
        newSelected.style.borderColor = '#000';
      });
      // Keyboard navigation
      dropdown.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          options.style.display = options.style.display === 'block' ? 'none' : 'block';
          newSelected.style.borderColor = options.style.display === 'block' ? '#888' : '#000';
          e.preventDefault();
        }
        if (e.key === 'Escape') {
          options.style.display = 'none';
          newSelected.style.borderColor = '#000';
        }
      });
    });
  }

  // After form setup, call the setup function
  setTimeout(() => {
    setupWiscDropdownListeners();
  }, 0);

  // Initialize checkbox functionality for WIAT-III
  const wiatCheckbox = container.querySelector('#wiatCheckbox');
  const wiatLabel = wiatCheckbox?.closest('.checkbox-label');
  if (wiatCheckbox && wiatLabel) {
    wiatLabel.addEventListener('click', (e) => {
      if (e.target !== wiatCheckbox) {
        e.preventDefault();
        wiatCheckbox.click();
      }
    });
    wiatCheckbox.addEventListener('change', (e) => {
      wiatContent.style.display = e.target.checked ? 'block' : 'none';
    });
  }
  // Initialize checkbox functionality for WJ IV Ach
  const wjCheckbox = container.querySelector('#wjCheckbox');
  const wjLabel = wjCheckbox?.closest('.checkbox-label');
  if (wjCheckbox && wjLabel) {
    wjLabel.addEventListener('click', (e) => {
      if (e.target !== wjCheckbox) {
        e.preventDefault();
        wjCheckbox.click();
      }
    });
    wjCheckbox.addEventListener('change', (e) => {
      wjContent.style.display = e.target.checked ? 'block' : 'none';
    });
  }

  // Function to create a new WIAT-III subtest section
  const createWiatIndexSection = () => {
    const section = document.createElement('div');
    section.className = 'wiat-index-section';
    section.innerHTML = `
      <div style="height: 3rem;"></div>
      <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
        <label style="font-weight: bold;">Subtest:</label>
        <div class="custom-dropdown wiat-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
          <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
            Select a Subtest
            <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
          </div>
          <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 200px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
            ${document.querySelector('.wiat-index-dropdown .custom-dropdown-options').innerHTML}
          </div>
          <input type="hidden" class="wiat-index-select" name="wiatIndex" value="" />
        </div>
        <input type="text" class="wiat-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add description" />
      </div>
      <div style="margin-top: 1.5rem; padding-left: 88px;">
        <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; margin-right: 0; padding-right: 0; gap: 2rem;">
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
            <input type="text" class="wiat-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
            <input type="text" class="wiat-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
            <select class="wiat-perc-rank" style="width: 100px; padding: 0.5rem;">
              <option value="">Select</option>
              ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
            </select>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
            <select class="wiat-qual-desc" style="width: 150px; padding: 0.5rem;">
              <option value="">Select</option>
              <option value="very-low">Very Low</option>
              <option value="low">Low</option>
              <option value="below-average">Below Average</option>
              <option value="low-average">Low Average</option>
              <option value="average">Average</option>
              <option value="high-average">High Average</option>
              <option value="above-average">Above Average</option>
            </select>
          </div>
        </div>
      </div>
    `;
    return section;
  };

  // Function to create a new WJ IV Ach subtest section
  const createWjIndexSection = () => {
    const section = document.createElement('div');
    section.className = 'wj-index-section';
    section.innerHTML = `
      <div style="height: 3rem;"></div>
      <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
        <label style="font-weight: bold;">Subtest:</label>
        <div class="custom-dropdown wj-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
          <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
            Select a Subtest
            <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
          </div>
          <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 200px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
            ${document.querySelector('.wj-index-dropdown .custom-dropdown-options').innerHTML}
          </div>
          <input type="hidden" class="wj-index-select" name="wjIndex" value="" />
        </div>
        <input type="text" class="wj-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add description" />
      </div>
      <div style="margin-top: 1.5rem; padding-left: 88px;">
        <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; margin-right: 0; padding-right: 0; gap: 2rem;">
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
            <input type="text" class="wj-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
            <input type="text" class="wj-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
            <select class="wj-perc-rank" style="width: 100px; padding: 0.5rem;">
              <option value="">Select</option>
              ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('\n')}
            </select>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
            <select class="wj-qual-desc" style="width: 150px; padding: 0.5rem;">
              <option value="">Select</option>
              <option value="very-low">Very Low</option>
              <option value="low">Low</option>
              <option value="below-average">Below Average</option>
              <option value="low-average">Low Average</option>
              <option value="average">Average</option>
              <option value="high-average">High Average</option>
              <option value="above-average">Above Average</option>
            </select>
          </div>
        </div>
      </div>
    `;
    return section;
  };

  // Add WIAT-III dynamic add/remove logic
  const wiatContent = container.querySelector('#wiatContent');
  if (wiatContent) {
    const addWiatBtn = wiatContent.querySelector('.add-wiat-index-btn');
    const removeWiatBtn = wiatContent.querySelector('.remove-wiat-index-btn');
    const wiatIndexContainer = wiatContent.querySelector('#wiatIndexContainer');
    if (addWiatBtn && wiatIndexContainer) {
      addWiatBtn.addEventListener('click', () => {
        const indexSections = wiatIndexContainer.querySelectorAll('.wiat-index-section');
        const newSection = createWiatIndexSection();
        wiatIndexContainer.appendChild(newSection);
        setupWiscDropdownListeners();
        if (indexSections.length >= 1 && removeWiatBtn) {
          removeWiatBtn.style.visibility = 'visible';
        }
      });
    }
    if (removeWiatBtn && wiatIndexContainer) {
      removeWiatBtn.addEventListener('click', () => {
        const indexSections = wiatIndexContainer.querySelectorAll('.wiat-index-section');
        if (indexSections.length > 1) {
          indexSections[indexSections.length - 1].remove();
          if (indexSections.length <= 2) {
            removeWiatBtn.style.visibility = 'hidden';
          }
        }
      });
    }
  }
  // Add WJ IV Ach dynamic add/remove logic
  const wjContent = container.querySelector('#wjContent');
  if (wjContent) {
    const addWjBtn = wjContent.querySelector('.add-wj-index-btn');
    const removeWjBtn = wjContent.querySelector('.remove-wj-index-btn');
    const wjIndexContainer = wjContent.querySelector('#wjIndexContainer');
    if (addWjBtn && wjIndexContainer) {
      addWjBtn.addEventListener('click', () => {
        const indexSections = wjIndexContainer.querySelectorAll('.wj-index-section');
        const newSection = createWjIndexSection();
        wjIndexContainer.appendChild(newSection);
        setupWiscDropdownListeners();
        if (indexSections.length >= 1 && removeWjBtn) {
          removeWjBtn.style.visibility = 'visible';
        }
      });
    }
    if (removeWjBtn && wjIndexContainer) {
      removeWjBtn.addEventListener('click', () => {
        const indexSections = wjIndexContainer.querySelectorAll('.wj-index-section');
        if (indexSections.length > 1) {
          indexSections[indexSections.length - 1].remove();
          if (indexSections.length <= 2) {
            removeWjBtn.style.visibility = 'hidden';
          }
        }
      });
    }
  }

  // After form setup, add JS logic to show/hide the full input section when the corresponding checkbox is checked/unchecked for both sections:
  setTimeout(() => {
    const otherAptitudeCheckbox = container.querySelector('#otherAptitudeCheckbox');
    const otherAptitudeInput = container.querySelector('.other-aptitude-input');
    const otherAptitudeSection = container.querySelector('.other-aptitude-section');
    const otherAptitudeDescriptionRow = container.querySelector('.other-aptitude-description-row');
    if (otherAptitudeCheckbox && otherAptitudeInput && otherAptitudeSection) {
      otherAptitudeCheckbox.addEventListener('change', (e) => {
        const show = e.target.checked;
        otherAptitudeInput.style.display = show ? 'inline-block' : 'none';
        otherAptitudeSection.style.display = show ? 'block' : 'none';
        if (otherAptitudeDescriptionRow) {
          otherAptitudeDescriptionRow.style.display = show ? 'block' : 'none';
          // Focus the textarea when shown
          if (show) {
            const desc = otherAptitudeDescriptionRow.querySelector('textarea');
            if (desc) desc.focus();
          }
        }
      });
      // On load, set initial state
      const show = otherAptitudeCheckbox.checked;
      otherAptitudeInput.style.display = show ? 'inline-block' : 'none';
      otherAptitudeSection.style.display = show ? 'block' : 'none';
      if (otherAptitudeDescriptionRow) {
        otherAptitudeDescriptionRow.style.display = show ? 'block' : 'none';
      }
    }
    const otherAchievementCheckbox = container.querySelector('#otherAchievementCheckbox');
    const otherAchievementInput = container.querySelector('.other-achievement-input');
    const otherAchievementSection = container.querySelector('.other-achievement-section');
    const otherAchievementDescriptionRow = container.querySelector('.other-achievement-description-row');
    if (otherAchievementCheckbox && otherAchievementInput && otherAchievementSection) {
      otherAchievementCheckbox.addEventListener('change', (e) => {
        const show = e.target.checked;
        otherAchievementInput.style.display = show ? 'inline-block' : 'none';
        otherAchievementSection.style.display = show ? 'block' : 'none';
        if (otherAchievementDescriptionRow) otherAchievementDescriptionRow.style.display = show ? 'block' : 'none';
      });
      // On load, set initial state
      const show = otherAchievementCheckbox.checked;
      otherAchievementInput.style.display = show ? 'inline-block' : 'none';
      otherAchievementSection.style.display = show ? 'block' : 'none';
      if (otherAchievementDescriptionRow) otherAchievementDescriptionRow.style.display = show ? 'block' : 'none';
    }
  }, 0);

  // Add dynamic add/remove logic for Other Aptitude and Other Achievement subtest sections
  setTimeout(() => {
    // Other Aptitude
    const otherAptitudeSection = container.querySelector('.other-aptitude-section');
    if (otherAptitudeSection) {
      const addBtn = otherAptitudeSection.querySelector('.add-other-aptitude-subtest-btn');
      const removeBtn = otherAptitudeSection.querySelector('.remove-other-aptitude-subtest-btn');
      const indexContainer = otherAptitudeSection.querySelector('#otherAptitudeIndexContainer');
      function createOtherAptitudeIndexSection() {
        const section = document.createElement('div');
        section.className = 'other-aptitude-index-section';
        section.innerHTML = `
          <div style="height: 3rem;"></div>
          <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
            <label style="font-weight: bold;">Index/Subtest:</label>
            <input type="text" class="other-aptitude-index-input" style="width: 300px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Enter Index or Subtest" />
          </div>
          <div style="margin-top: 1.5rem; padding-left: 88px;">
            <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 2rem;">
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                <input type="text" class="other-aptitude-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
              </div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
                <input type="text" class="other-aptitude-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
              </div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                <select class="other-aptitude-perc-rank" style="width: 100px; padding: 0.5rem;">
                  <option value="">Select</option>
                  ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                </select>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                <select class="other-aptitude-qual-desc" style="width: 150px; padding: 0.5rem;">
                  <option value="">Select</option>
                  <option value="very-low">Very Low</option>
                  <option value="low">Low</option>
                  <option value="below-average">Below Average</option>
                  <option value="low-average">Low Average</option>
                  <option value="average">Average</option>
                  <option value="high-average">High Average</option>
                  <option value="above-average">Above Average</option>
                </select>
              </div>
            </div>
          </div>
        `;
        return section;
      }
      function updateSubtestButtonVisibility() {
        const sections = indexContainer.querySelectorAll('.other-aptitude-index-section');
        if (sections.length <= 1) {
          removeBtn.style.visibility = 'hidden';
        } else {
          removeBtn.style.visibility = 'visible';
        }
      }
      if (addBtn && removeBtn && indexContainer) {
        addBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-aptitude-index-section');
          const newSection = sections[0].cloneNode(true);
          newSection.querySelectorAll('input, select').forEach(el => el.value = '');
          indexContainer.appendChild(newSection);
          updateSubtestButtonVisibility();
        });
        removeBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-aptitude-index-section');
          if (sections.length > 1) {
            sections[sections.length - 1].remove();
            updateSubtestButtonVisibility();
          }
        });
        updateSubtestButtonVisibility();
      }
    }
    // Other Achievement
    const otherAchievementSection = container.querySelector('.other-achievement-section');
    if (otherAchievementSection) {
      const addBtn = otherAchievementSection.querySelector('.add-other-achievement-subtest-btn');
      const removeBtn = otherAchievementSection.querySelector('.remove-other-achievement-subtest-btn');
      const indexContainer = otherAchievementSection.querySelector('#otherAchievementIndexContainer');
      function createOtherAchievementIndexSection() {
        const section = document.createElement('div');
        section.className = 'other-achievement-index-section';
        section.innerHTML = `
          <div style="height: 3rem;"></div>
          <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
            <label style="font-weight: bold;">Index/Subtest:</label>
            <input type="text" class="other-achievement-index-input" style="width: 300px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Enter Index or Subtest" />
          </div>
          <div style="margin-top: 1.5rem; padding-left: 88px;">
            <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 2rem;">
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                <input type="text" class="other-achievement-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
              </div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interv.</label>
                <input type="text" class="other-achievement-conf-int" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 85-95" />
              </div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                <select class="other-achievement-perc-rank" style="width: 100px; padding: 0.5rem;">
                  <option value="">Select</option>
                  ${Array.from({length: 100}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                </select>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                <select class="other-achievement-qual-desc" style="width: 150px; padding: 0.5rem;">
                  <option value="">Select</option>
                  <option value="very-low">Very Low</option>
                  <option value="low">Low</option>
                  <option value="below-average">Below Average</option>
                  <option value="low-average">Low Average</option>
                  <option value="average">Average</option>
                  <option value="high-average">High Average</option>
                  <option value="above-average">Above Average</option>
                </select>
              </div>
            </div>
          </div>
        `;
        return section;
      }
      function updateSubtestButtonVisibility() {
        const sections = indexContainer.querySelectorAll('.other-achievement-index-section');
        if (sections.length <= 1) {
          removeBtn.style.visibility = 'hidden';
        } else {
          removeBtn.style.visibility = 'visible';
        }
      }
      if (addBtn && removeBtn && indexContainer) {
        addBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-achievement-index-section');
          const newSection = sections[0].cloneNode(true);
          newSection.querySelectorAll('input, select').forEach(el => el.value = '');
          indexContainer.appendChild(newSection);
          updateSubtestButtonVisibility();
        });
        removeBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-achievement-index-section');
          if (sections.length > 1) {
            sections[sections.length - 1].remove();
            updateSubtestButtonVisibility();
          }
        });
        updateSubtestButtonVisibility();
      }
    }
  }, 0);

  // Update dynamic add/remove logic for Other Achievement Assessment sections
  setTimeout(() => {
    const achievementContent = container.querySelector('#achievementTestsContent');
    const getSections = () => achievementContent.querySelectorAll('.other-achievement-section');
    const buttonRow = achievementContent.querySelector('.other-achievement-assessment-button-row');
    const addBtn = buttonRow.querySelector('.add-other-achievement-assessment-btn');
    const removeBtn = buttonRow.querySelector('.remove-other-achievement-assessment-btn');

    function updateButtonVisibility() {
      const sections = getSections();
      if (sections.length <= 1) {
        removeBtn.style.display = 'none';
      } else {
        removeBtn.style.display = 'inline-flex';
      }
    }

    // Helper to re-initialize show/hide logic and subtest button listeners for a section
    function reinitSection(section) {
      // Show/hide logic for description row
      const descRow = section.querySelector('.other-achievement-description-row');
      const checkbox = container.querySelector('#otherAchievementCheckbox');
      if (descRow && checkbox) {
        descRow.style.display = checkbox.checked ? 'block' : 'none';
      }
      // Subtest add/remove logic
      const addSubtestBtn = section.querySelector('.add-other-achievement-subtest-btn');
      const removeSubtestBtn = section.querySelector('.remove-other-achievement-subtest-btn');
      const indexContainer = section.querySelector('#otherAchievementIndexContainer');
      if (addSubtestBtn && removeSubtestBtn && indexContainer) {
        addSubtestBtn.onclick = null;
        removeSubtestBtn.onclick = null;
        addSubtestBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-achievement-index-section');
          const newSection = sections[0].cloneNode(true);
          newSection.querySelectorAll('input, select').forEach(el => el.value = '');
          indexContainer.appendChild(newSection);
          if (sections.length >= 1) removeSubtestBtn.style.visibility = 'visible';
        });
        removeSubtestBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-achievement-index-section');
          if (sections.length > 1) {
            sections[sections.length - 1].remove();
            if (sections.length <= 2) removeSubtestBtn.style.visibility = 'hidden';
          }
        });
      }
    }

    if (addBtn && removeBtn && buttonRow) {
      addBtn.addEventListener('click', () => {
        const sections = getSections();
        const lastSection = sections[sections.length - 1];
        // Only clone the .other-achievement-section, not the button row
        const newSection = lastSection.cloneNode(true);
        // Remove any .other-achievement-assessment-button-row from the clone if present
        const buttonInClone = newSection.querySelector('.other-achievement-assessment-button-row');
        if (buttonInClone) buttonInClone.remove();
        // Clear all input values in the clone
        newSection.querySelectorAll('input, textarea, select').forEach(el => {
          if (el.type === 'checkbox' || el.type === 'radio') {
            el.checked = false;
          } else {
            el.value = '';
          }
        });
        // Insert the new section before the button row
        buttonRow.parentNode.insertBefore(newSection, buttonRow);
        reinitSection(newSection);
        updateButtonVisibility();
      });
      removeBtn.addEventListener('click', () => {
        const sections = getSections();
        if (sections.length > 1) {
          sections[sections.length - 1].remove();
          updateButtonVisibility();
        }
      });
      updateButtonVisibility();
    }
  }, 0);

  // Add dynamic add/remove logic for Other Aptitude Assessment sections, mirroring the logic for Achievement:
  setTimeout(() => {
    const aptitudeContent = container.querySelector('#aptitudeTestsContent');
    const getSections = () => aptitudeContent.querySelectorAll('.other-aptitude-section');
    const buttonRow = aptitudeContent.querySelector('.other-aptitude-assessment-button-row');
    const addBtn = buttonRow.querySelector('.add-other-aptitude-assessment-btn');
    const removeBtn = buttonRow.querySelector('.remove-other-aptitude-assessment-btn');

    function updateButtonVisibility() {
      const sections = getSections();
      if (sections.length <= 1) {
        removeBtn.style.display = 'none';
      } else {
        removeBtn.style.display = 'inline-flex';
      }
    }

    function reinitSection(section) {
      // Show/hide logic for description row
      const descRow = section.querySelector('.other-aptitude-description-row');
      const checkbox = container.querySelector('#otherAptitudeCheckbox');
      if (descRow && checkbox) {
        descRow.style.display = checkbox.checked ? 'block' : 'none';
      }
      // Subtest add/remove logic
      const addSubtestBtn = section.querySelector('.add-other-aptitude-subtest-btn');
      const removeSubtestBtn = section.querySelector('.remove-other-aptitude-subtest-btn');
      const indexContainer = section.querySelector('#otherAptitudeIndexContainer');
      if (addSubtestBtn && removeSubtestBtn && indexContainer) {
        addSubtestBtn.onclick = null;
        removeSubtestBtn.onclick = null;
        addSubtestBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-aptitude-index-section');
          const newSection = sections[0].cloneNode(true);
          newSection.querySelectorAll('input, select').forEach(el => el.value = '');
          indexContainer.appendChild(newSection);
          if (sections.length >= 1) removeSubtestBtn.style.visibility = 'visible';
        });
        removeSubtestBtn.addEventListener('click', () => {
          const sections = indexContainer.querySelectorAll('.other-aptitude-index-section');
          if (sections.length > 1) {
            sections[sections.length - 1].remove();
            if (sections.length <= 2) removeSubtestBtn.style.visibility = 'hidden';
          }
        });
      }
    }

    if (addBtn && removeBtn && buttonRow) {
      addBtn.addEventListener('click', () => {
        const sections = getSections();
        const lastSection = sections[sections.length - 1];
        // Only clone the .other-aptitude-section, not the button row
        const newSection = lastSection.cloneNode(true);
        // Remove any .other-aptitude-assessment-button-row from the clone if present
        const buttonInClone = newSection.querySelector('.other-aptitude-assessment-button-row');
        if (buttonInClone) buttonInClone.remove();
        // Clear all input values in the clone
        newSection.querySelectorAll('input, textarea, select').forEach(el => {
          if (el.type === 'checkbox' || el.type === 'radio') {
            el.checked = false;
          } else {
            el.value = '';
          }
        });
        // Insert the new section before the button row
        buttonRow.parentNode.insertBefore(newSection, buttonRow);
        reinitSection(newSection);
        updateButtonVisibility();
      });
      removeBtn.addEventListener('click', () => {
        const sections = getSections();
        if (sections.length > 1) {
          sections[sections.length - 1].remove();
          updateButtonVisibility();
        }
      });
      updateButtonVisibility();
    }
  }, 0);
}
