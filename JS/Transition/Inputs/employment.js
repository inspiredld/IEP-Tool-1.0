export function createTransitionEmploymentForm(container) {
  // Build sub show-hides like PLFP Stakeholder Input
  container.innerHTML = `
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionEmpPrevGoalContent">
        <span class="toggle-icon">+</span> Progress Towards Previous Goal
      </button>
      <div id="transitionEmpPrevGoalContent" class="section-content" style="display: none; padding-bottom: 40px;">
        <div class="goal-text-row">
          <label>Previous Employment Goal:</label>
          <textarea id="transition-emp-previous-goal" class="goal-text-input" placeholder="Complete: 'had a goal to ___' (e.g., 'obtain part-time employment in …')"></textarea>
        </div>
        <div class="goal-text-row" style="margin-top: 2.5rem; margin-bottom: 0.4rem;">
          <label>How has the student made progress towards this goal?</label>
          <div style="flex-grow: 1"></div>
        </div>
        <div id="transition-emp-progress-list"></div>
        <button type="button" id="transition-emp-add-progress" class="progress-period-btn" style="margin-left: calc(0.5rem + 24px + 1rem);">+progress</button>
        <div style="height: 16px;"></div>
        <div class="goal-text-row" style="margin-top: 2rem;">
          <label>Other Information:</label>
          <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
            <div id="transition-emp-other-input-quill" style="min-height: 120px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
          </div>
        </div>
        <div style="height: 8px;"></div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionEmpUpdatedContent">
        <span class="toggle-icon">+</span> Updated Information
      </button>
      <div id="transitionEmpUpdatedContent" class="section-content" style="display: none;">
        <div style="font-weight: bold; margin-bottom: 10px;">Select all that apply</div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="emp-updated-toggle" data-target="empCareerCluesCard">
            Career Clues About ME
          </label>
          <div id="empCareerCluesCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="emp-careerclues-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="emp-careerclues-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="emp-updated-toggle" data-target="empCiteCard">
            O*NET Interest Profiler
          </label>
          <div id="empCiteCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="emp-cite-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="emp-cite-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="emp-updated-toggle" data-target="empTpiCard">
            Transition Planning Inventory (Employment)
          </label>
          <div id="empTpiCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="emp-tpi-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="emp-tpi-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="emp-updated-toggle" data-target="empUcanGo2Card">
            UCanGo2 Career Interest Survey
          </label>
          <div id="empUcanGo2Card" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="emp-ucango2-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="emp-ucango2-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="emp-updated-toggle" data-target="empOtherAssessmentCard">
            Other Assessment
          </label>
          <div id="empOtherAssessmentCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div class="goal-text-row" style="margin-bottom: 12px;">
                <label>Name of Assessment:</label>
                <textarea id="emp-other-assessment-name" class="goal-text-input" placeholder="Type assessment name..."></textarea>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; margin-top: 8px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="emp-other-assessment-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Description of Assessment</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="emp-other-assessment-desc-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <div style="height: 16px;"></div>
              <div class="goal-text-row" style="align-items: flex-start; margin-top: 12px;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="emp-other-assessment-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionEmpSummaryGoals">
        <span class="toggle-icon">+</span> Summary of Past and Present Goals
      </button>
      <div id="transitionEmpSummaryGoals" class="section-content" style="display: none; padding-bottom: 12px;">
        <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; margin-top: 12px;">
          <label>Goal Status:</label>
          <div style="display:flex; flex-direction: column; gap: 8px; align-items: flex-start;">
            <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
              <input type="checkbox" id="transition-emp-goal-same"> Student's goal/plans remain the same
            </label>
            <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
              <input type="checkbox" id="transition-emp-goal-changed"> Student's goal/plans have changed
            </label>
          </div>
        </div>
        <div id="transition-emp-goal-change-card" class="section-content" style="display: none; margin-top: 10px;">
          <div style="border: 1px solid #bbb; border-radius: 8px; padding: 14px; background: #fafbfc;">
            <p style="margin: 0; font-size: 0.95rem;">
              While the student indicated interest in
              <input type="text" id="transition-emp-goal-change-prev" placeholder="previous goal/plans" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin: 0 8px; min-width: 260px;" />
              last year, assessments and conversations with the student this year indicate that they are now interested in
              <input type="text" id="transition-emp-goal-change-new" placeholder="new goal/plans" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin: 0 8px; min-width: 260px;" />.
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
    textarea.style.height = 'auto';
    const baseHeight = textarea.scrollHeight;
    textarea.style.height = baseHeight + 'px';
    const shouldExpand = () => {
      const val = textarea.value || '';
      if (val.indexOf('\n') !== -1) return true;
      const cs = getComputedStyle(textarea);
      const fontSize = parseFloat(cs.fontSize) || 16;
      const avgCharWidth = fontSize * 0.6;
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
    const debounced = () => { clearTimeout(t); t = setTimeout(maybeResize, 120); };
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
    measure();
  };

  // Progress list logic
  const prevTextarea = container.querySelector('#transition-emp-previous-goal');
  if (prevTextarea) setupAutoResize(prevTextarea);
  const progressList = container.querySelector('#transition-emp-progress-list');
  const addBtn = container.querySelector('#transition-emp-add-progress');
  const otherName = container.querySelector('#emp-other-assessment-name');
  if (otherName) setupAutoResize(otherName);
  const goalChangePrevInput = container.querySelector('#transition-emp-goal-change-prev');
  const goalChangeNewInput = container.querySelector('#transition-emp-goal-change-new');
  if (goalChangePrevInput) setupAutoGrowInput(goalChangePrevInput);
  if (goalChangeNewInput) setupAutoGrowInput(goalChangeNewInput);

  const addProgressRow = () => {
    if (!progressList) return;
    const row = document.createElement('div');
    row.className = 'goal-text-row transition-progress-row';
    const bullet = document.createElement('label');
    bullet.textContent = '•';
    bullet.style.minWidth = '24px';
    bullet.style.width = '24px';
    bullet.style.textAlign = 'center';
    bullet.style.display = 'flex';
    bullet.style.alignItems = 'center';
    bullet.style.fontSize = '1.4rem';
    const ta = document.createElement('textarea');
    ta.className = 'goal-text-input';
    ta.placeholder = 'progress added in bulleted list';
    setupAutoResize(ta);
    row.appendChild(bullet);
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
      ta.style.maxWidth = 'calc(100% - 120px)';
      removeBtn.addEventListener('click', () => {
        progressList.removeChild(row);
        if (progressList.querySelectorAll('.transition-progress-row').length === 0) addProgressRow();
      });
      row.appendChild(removeBtn);
    } else {
      ta.style.maxWidth = 'calc(100% - 120px)';
    }
    progressList.appendChild(row);
  };

  addProgressRow();
  if (addBtn) addBtn.addEventListener('click', addProgressRow);

  // Initialize Quill for Other Information (with placeholder 'Optional')
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
      if (!window.transitionEmpOtherQuill) {
        window.transitionEmpOtherQuill = new Quill('#transition-emp-other-input-quill', {
          modules: { toolbar: toolbarOptions },
          theme: 'snow',
          placeholder: 'Optional'
        });
      }
    }
  }, 0);

  // Updated Information toggles (show/hide cards)
  const updatedToggles = container.querySelectorAll('.emp-updated-toggle');
  updatedToggles.forEach(cb => {
    cb.addEventListener('change', function() {
      const target = container.querySelector('#' + cb.getAttribute('data-target'));
      if (target) target.style.display = cb.checked ? 'block' : 'none';
    });
  });

  // Initialize Quill editors for assessment summaries/descriptions
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
      const ensure = (id, key, placeholder = 'Add a brief summary of results') => {
        const el = document.getElementById(id);
        if (el && !window[key]) {
          window[key] = new Quill('#' + id, {
            modules: { toolbar: toolbarOptions },
            theme: 'snow',
            placeholder
          });
        }
      };
      ensure('emp-careerclues-summary-quill', 'empCareerCluesQuill');
      ensure('emp-cite-summary-quill', 'empCiteQuill');
      ensure('emp-tpi-summary-quill', 'empTpiQuill');
      ensure('emp-ucango2-summary-quill', 'empUcanGo2Quill');
      ensure('emp-other-assessment-desc-quill', 'empOtherAssessmentDescQuill', 'Describe the assessment (purpose, domains, how it was used)');
      ensure('emp-other-assessment-summary-quill', 'empOtherAssessmentSummaryQuill');
    }
  }, 0);

  // Goal status (checkboxes) logic
  const empSame = container.querySelector('#transition-emp-goal-same');
  const empChanged = container.querySelector('#transition-emp-goal-changed');
  const empChangeCard = container.querySelector('#transition-emp-goal-change-card');
  const syncEmpGoal = function() {
    if (this === empSame && empSame.checked) empChanged.checked = false;
    if (this === empChanged && empChanged.checked) empSame.checked = false;
    if (empChangeCard) empChangeCard.style.display = empChanged && empChanged.checked ? 'block' : 'none';
  };
  if (empSame) empSame.addEventListener('change', syncEmpGoal);
  if (empChanged) empChanged.addEventListener('change', syncEmpGoal);
}
