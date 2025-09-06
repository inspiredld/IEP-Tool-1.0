export function createTransitionEducationForm(container) {
  // Build sub show-hides like PLFP Stakeholder Input
  container.innerHTML = `
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionEduPrevGoalContent">
        <span class="toggle-icon">+</span> Progress Towards Previous Goal
      </button>
      <div id="transitionEduPrevGoalContent" class="section-content" style="display: none; padding-bottom: 40px;">
        <div class="goal-text-row">
          <label>Previous Education & Training Goal:</label>
          <textarea id="transition-edu-previous-goal" class="goal-text-input" placeholder="Complete: 'had a goal to ___' (e.g., 'attend post-secondary training related to …')"></textarea>
        </div>
        <div class="goal-text-row" style="margin-top: 2.5rem; margin-bottom: 0.4rem;">
          <label>How has the student made progress towards this goal?</label>
          <div style="flex-grow: 1"></div>
        </div>
        <div id="transition-edu-progress-list"></div>
        <button type="button" id="transition-edu-add-progress" class="progress-period-btn" style="margin-left: calc(0.5rem + 24px + 1rem);">+progress</button>
        <div style="height: 16px;"></div>
        <div class="goal-text-row" style="margin-top: 2rem;">
          <label>Other Information:</label>
          <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
            <div id="transition-edu-other-input-quill" style="min-height: 120px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
          </div>
        </div>
        <div style="height: 8px;"></div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionEduUpdatedContent">
        <span class="toggle-icon">+</span> Updated Information
      </button>
      <div id="transitionEduUpdatedContent" class="section-content" style="display: none;">
        <div style="font-weight: bold; margin-bottom: 10px;">Select all that apply</div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="edu-updated-toggle" data-target="eduSelfModalityCard">
            Self-Assessment of Modality Strengths
          </label>
          <div id="eduSelfModalityCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="edu-self-modality-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="edu-self-modality-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="edu-updated-toggle" data-target="eduCiteCard">
            O*NET Interest Profiler
          </label>
          <div id="eduCiteCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="edu-cite-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="edu-cite-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="edu-updated-toggle" data-target="eduTpiCard">
            Transition Planning Inventory (Education & Training)
          </label>
          <div id="eduTpiCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="edu-tpi-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="edu-tpi-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="edu-updated-toggle" data-target="eduHsToCollegeCard">
            High School to College Transition Questionnaire
          </label>
          <div id="eduHsToCollegeCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="edu-hscollege-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="edu-hscollege-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="edu-updated-toggle" data-target="eduLearningSupportCard">
            Learning Support Services and Programs
          </label>
          <div id="eduLearningSupportCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="edu-learningsupport-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="edu-learningsupport-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="edu-updated-toggle" data-target="eduOtherAssessmentCard">
            Other Assessment
          </label>
          <div id="eduOtherAssessmentCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div class="goal-text-row" style="margin-bottom: 12px;">
                <label>Name of Assessment:</label>
                <textarea id="edu-other-assessment-name" class="goal-text-input" placeholder="Type assessment name..."></textarea>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; margin-top: 8px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="edu-other-assessment-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Description of Assessment</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="edu-other-assessment-desc-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <div style="height: 16px;"></div>
              <div class="goal-text-row" style="align-items: flex-start; margin-top: 12px;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="edu-other-assessment-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionEduSummaryGoals">
        <span class="toggle-icon">+</span> Summary of Past and Present Goals
      </button>
      <div id="transitionEduSummaryGoals" class="section-content" style="display: none; padding-bottom: 12px;">
        <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; margin-top: 12px;">
          <label>Goal Status:</label>
          <div style="display:flex; flex-direction: column; gap: 8px; align-items: flex-start;">
            <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
              <input type="checkbox" id="transition-edu-goal-same"> Student's goal/plans remain the same
            </label>
            <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
              <input type="checkbox" id="transition-edu-goal-changed"> Student's goal/plans have changed
            </label>
          </div>
        </div>
        <div id="transition-edu-goal-change-card" class="section-content" style="display: none; margin-top: 10px;">
          <div style="border: 1px solid #bbb; border-radius: 8px; padding: 14px; background: #fafbfc;">
            <p style="margin: 0; font-size: 0.95rem;">
              While the student indicated interest in
              <input type="text" id="transition-edu-goal-change-prev" placeholder="previous goal/plans" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin: 0 8px; min-width: 260px;" />
              last year, assessments and conversations with the student this year indicate that they are now interested in
              <input type="text" id="transition-edu-goal-change-new" placeholder="new goal/plans" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin: 0 8px; min-width: 260px;" />.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Toggle logic for sub show-hides
  const toggleButtons = container.querySelectorAll('.section-toggle-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const content = container.querySelector('#' + button.getAttribute('aria-controls'));
      const icon = button.querySelector('.toggle-icon');
      button.setAttribute('aria-expanded', !isExpanded);
      content.style.display = isExpanded ? 'none' : 'block';
      icon.textContent = isExpanded ? '+' : '-';
    });
  });

  // Utility: debounced conditional auto-resize for textareas
  const setupAutoResize = (textarea) => {
    let t;
    // Capture base (single-line) height
    textarea.style.height = 'auto';
    const baseHeight = textarea.scrollHeight;
    textarea.style.height = baseHeight + 'px';

    const shouldExpand = () => {
      const val = textarea.value || '';
      if (val.indexOf('\n') !== -1) return true; // user pressed Enter/newline exists
      const cs = getComputedStyle(textarea);
      const fontSize = parseFloat(cs.fontSize) || 16;
      const avgCharWidth = fontSize * 0.6; // rough estimate
      const paddingLeft = parseFloat(cs.paddingLeft) || 0;
      const paddingRight = parseFloat(cs.paddingRight) || 0;
      const usableWidth = Math.max(0, textarea.clientWidth - paddingLeft - paddingRight);
      const maxCharsPerLine = Math.max(1, Math.floor(usableWidth / avgCharWidth));
      const lastLine = val.slice(val.lastIndexOf('\n') + 1);
      return lastLine.length >= Math.floor(maxCharsPerLine * 0.6);
    };

    const maybeResize = () => {
      if (shouldExpand()) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      } else {
        textarea.style.height = baseHeight + 'px';
      }
    };

    const debounced = () => {
      clearTimeout(t);
      t = setTimeout(maybeResize, 120);
    };

    textarea.addEventListener('input', debounced);
  };

  // Utility: auto-grow single-line input horizontally based on content
  const setupAutoGrowInput = (input, minPx = 260, maxPx = 1000) => {
    const measure = () => {
      const probe = document.createElement('span');
      probe.style.visibility = 'hidden';
      probe.style.position = 'absolute';
      probe.style.whiteSpace = 'pre';
      const cs = getComputedStyle(input);
      probe.style.font = `${cs.fontStyle} ${cs.fontVariant} ${cs.fontWeight} ${cs.fontSize}/${cs.lineHeight} ${cs.fontFamily}`;
      probe.textContent = input.value || input.placeholder || '';
      document.body.appendChild(probe);
      const width = Math.min(maxPx, Math.max(minPx, probe.offsetWidth + 24));
      input.style.width = width + 'px';
      document.body.removeChild(probe);
    };
    input.addEventListener('input', measure);
    // Initial measurement
    measure();
  };

  // Progress list logic
  const prevTextarea = container.querySelector('#transition-edu-previous-goal');
  if (prevTextarea) setupAutoResize(prevTextarea);
  const progressList = container.querySelector('#transition-edu-progress-list');
  const addBtn = container.querySelector('#transition-edu-add-progress');
  const otherName = container.querySelector('#edu-other-assessment-name');
  if (otherName) setupAutoResize(otherName);
  const goalChangePrevInput = container.querySelector('#transition-edu-goal-change-prev');
  const goalChangeNewInput = container.querySelector('#transition-edu-goal-change-new');
  if (goalChangePrevInput) setupAutoGrowInput(goalChangePrevInput);
  if (goalChangeNewInput) setupAutoGrowInput(goalChangeNewInput);

  const addProgressRow = () => {
    if (!progressList) return;
    const row = document.createElement('div');
    row.className = 'goal-text-row transition-progress-row';
    const emptyLabel = document.createElement('label');
    emptyLabel.textContent = '•';
    emptyLabel.style.minWidth = '24px';
    emptyLabel.style.width = '24px';
    emptyLabel.style.textAlign = 'center';
    emptyLabel.style.display = 'flex';
    emptyLabel.style.alignItems = 'center';
    emptyLabel.style.fontSize = '1.4rem';
    const ta = document.createElement('textarea');
    ta.className = 'goal-text-input';
    ta.placeholder = 'progress added in bulleted list';
    setupAutoResize(ta);
    row.appendChild(emptyLabel);
    row.appendChild(ta);
    if (progressList.querySelectorAll('.transition-progress-row').length >= 1) {
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = '-row';
      removeBtn.style.whiteSpace = 'nowrap';
      removeBtn.style.height = '32px';
      removeBtn.style.alignSelf = 'flex-start';
      removeBtn.style.marginLeft = '12px';
      removeBtn.style.padding = '4px 16px';
      // Shorten textarea to create comfortable space for the -row button
      ta.style.maxWidth = 'calc(100% - 120px)';
      removeBtn.addEventListener('click', () => {
        progressList.removeChild(row);
        if (progressList.querySelectorAll('.transition-progress-row').length === 0) addProgressRow();
      });
      row.appendChild(removeBtn);
    }
    else {
      // Match width to rows that include a remove button for consistent length
      ta.style.maxWidth = 'calc(100% - 120px)';
    }
    progressList.appendChild(row);
  };

  addProgressRow();
  if (addBtn) addBtn.addEventListener('click', addProgressRow);

  // Initialize Quill for Other Input (with placeholder 'Optional')
  setTimeout(() => {
    if (window.Quill) {
      const toolbarOptions = [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean']
      ];
      if (!window.transitionEduOtherQuill) {
        window.transitionEduOtherQuill = new Quill('#transition-edu-other-input-quill', {
          modules: { toolbar: toolbarOptions },
          theme: 'snow',
          placeholder: 'Optional'
        });
      }
    }
  }, 0);

  // Updated Information toggles (show/hide cards)
  const updatedToggles = container.querySelectorAll('.edu-updated-toggle');
  updatedToggles.forEach(cb => {
    cb.addEventListener('change', function() {
      const target = container.querySelector('#' + cb.getAttribute('data-target'));
      if (target) target.style.display = cb.checked ? 'block' : 'none';
    });
  });

  // Initialize Quill for Self-Assessment summary
  setTimeout(() => {
    if (window.Quill) {
      const toolbarOptions = [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean']
      ];
      if (!window.eduSelfModalityQuill) {
        const el = document.getElementById('edu-self-modality-summary-quill');
        if (el) {
          window.eduSelfModalityQuill = new Quill('#edu-self-modality-summary-quill', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder: 'Add a brief summary of results'
          });
        }
      }
      if (!window.eduCiteQuill) {
        const el = document.getElementById('edu-cite-summary-quill');
        if (el) {
          window.eduCiteQuill = new Quill('#edu-cite-summary-quill', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder: 'Add a brief summary of results'
          });
        }
      }
      if (!window.eduTpiQuill) {
        const el = document.getElementById('edu-tpi-summary-quill');
        if (el) {
          window.eduTpiQuill = new Quill('#edu-tpi-summary-quill', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder: 'Add a brief summary of results'
          });
        }
      }
      if (!window.eduHsCollegeQuill) {
        const el = document.getElementById('edu-hscollege-summary-quill');
        if (el) {
          window.eduHsCollegeQuill = new Quill('#edu-hscollege-summary-quill', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder: 'Add a brief summary of results'
          });
        }
      }
      if (!window.eduLearningSupportQuill) {
        const el = document.getElementById('edu-learningsupport-summary-quill');
        if (el) {
          window.eduLearningSupportQuill = new Quill('#edu-learningsupport-summary-quill', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder: 'Add a brief summary of results'
          });
        }
      }
      if (!window.eduOtherAssessmentDescQuill) {
        const el = document.getElementById('edu-other-assessment-desc-quill');
        if (el) {
          window.eduOtherAssessmentDescQuill = new Quill('#edu-other-assessment-desc-quill', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder: 'Describe the assessment (purpose, domains, how it was used)'
          });
        }
      }
      if (!window.eduOtherAssessmentSummaryQuill) {
        const el = document.getElementById('edu-other-assessment-summary-quill');
        if (el) {
          window.eduOtherAssessmentSummaryQuill = new Quill('#edu-other-assessment-summary-quill', {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder: 'Add a brief summary of results'
          });
        }
      }
    }
  }, 0);

  // Goal status (checkboxes) logic
  const eduSame = container.querySelector('#transition-edu-goal-same');
  const eduChanged = container.querySelector('#transition-edu-goal-changed');
  const eduChangeCard = container.querySelector('#transition-edu-goal-change-card');
  const syncEduGoal = () => {
    if (!eduSame || !eduChanged) return;
    // Mutually exclusive
    if (this === eduSame && eduSame.checked) eduChanged.checked = false;
    if (this === eduChanged && eduChanged.checked) eduSame.checked = false;
    // Show card if changed
    if (eduChangeCard) eduChangeCard.style.display = eduChanged.checked ? 'block' : 'none';
  };
  if (eduSame) eduSame.addEventListener('change', syncEduGoal);
  if (eduChanged) eduChanged.addEventListener('change', syncEduGoal);
}


