export function createTransitionIndependentLivingForm(container) {
  container.innerHTML = `
    <div class="goal-text-row" style="align-items: center; justify-content: center; margin-bottom: 28px; margin-left: 0;">
      <label style="font-weight: 600; min-width: auto;">Does the IEP team recommend an Independent Living Goal?</label>
      <div style="display:flex; gap: 18px; align-items: center;">
        <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
          <input type="checkbox" id="transition-ind-recommend-yes"> yes
        </label>
        <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
          <input type="checkbox" id="transition-ind-recommend-no"> no
        </label>
      </div>
    </div>
    <div id="transition-ind-assess-methods-card" class="section-content" style="display:none; max-width: 900px; margin: 0 auto 18px auto; padding: 14px; border: 1px solid #bbb; border-radius: 8px; background: #fafbfc;">
      <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; margin: 0;">
        <label style="font-weight: 600; min-width: auto; margin-bottom: 6px;">How were independent living skills assessed?</label>
        <div style="display:flex; flex-direction: column; gap: 8px; align-items: flex-start;">
          <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
            <input type="checkbox" id="ind-assess-transition"> transition assessments
          </label>
          <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
            <input type="checkbox" id="ind-assess-teacher"> teacher observation
          </label>
          <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
            <input type="checkbox" id="ind-assess-student"> student input
          </label>
          <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
            <input type="checkbox" id="ind-assess-parent"> parent input
          </label>
          <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
            <input type="checkbox" id="ind-assess-other"> other
            <input type="text" id="ind-assess-other-desc" placeholder="Describe" style="display:none; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 0.95rem; margin-left: 10px; min-width: 220px;">
          </label>
        </div>
        <div id="ind-assess-transition-desc" style="display:none; margin-top: 14px; width: 100%;">
          <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; gap: 6px; margin-left: 0; width: 100%;">
            <label style="font-weight: 600; min-width: auto;">Describe results of transition assessment(s):</label>
            <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
              <div id="ind-assess-transition-desc-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionIndPrevGoalContent">
        <span class="toggle-icon">+</span> Progress Towards Previous Goal
      </button>
      <div id="transitionIndPrevGoalContent" class="section-content" style="display:none; padding-bottom: 40px;">
        <div class="goal-text-row">
          <label>Previous Independent Living Goal:</label>
          <textarea id="transition-ind-previous-goal" class="goal-text-input" placeholder="Complete: 'had a goal to ___' (e.g., 'increase independence in daily living …')"></textarea>
        </div>
        <div class="goal-text-row" style="margin-top: 2.5rem; margin-bottom: 0.4rem;">
          <label>How has the student made progress towards this goal?</label>
          <div style="flex-grow: 1"></div>
        </div>
        <div id="transition-ind-progress-list"></div>
        <button type="button" id="transition-ind-add-progress" class="progress-period-btn" style="margin-left: calc(0.5rem + 24px + 1rem);">+progress</button>
        <div style="height: 16px;"></div>
        <div class="goal-text-row" style="margin-top: 2rem;">
          <label>Other Information:</label>
          <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
            <div id="transition-ind-other-input-quill" style="min-height: 120px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionIndUpdatedContent">
        <span class="toggle-icon">+</span> Updated Information
      </button>
      <div id="transitionIndUpdatedContent" class="section-content" style="display:none; padding-bottom: 12px;">
        <div style="font-weight: bold; margin-bottom: 10px;">Select all that apply</div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="ind-updated-toggle" data-target="indBasicSurvivalCard">
            Basic Survival Skills Assessment
          </label>
          <div id="indBasicSurvivalCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="ind-basic-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="ind-basic-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="ind-updated-toggle" data-target="indAnsellCard">
            Ansell-Casey Life Skills Assessment
          </label>
          <div id="indAnsellCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="ind-ansell-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="ind-ansell-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="ind-updated-toggle" data-target="indTpiLifeCard">
            Transition Planning Inventory (Life Skills)
          </label>
          <div id="indTpiLifeCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="ind-tpi-life-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="ind-tpi-life-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="ind-updated-toggle" data-target="indBshsCard">
            BSHS Independent Living Assessment
          </label>
          <div id="indBshsCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 2px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="ind-bshs-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="ind-bshs-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapsible-section">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" class="ind-updated-toggle" data-target="indOtherAssessmentCard">
            Other Assessment
          </label>
          <div id="indOtherAssessmentCard" class="section-content" style="display: none;">
            <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
              <div class="goal-text-row" style="margin-bottom: 12px;">
                <label>Name of Assessment:</label>
                <textarea id="ind-other-assessment-name" class="goal-text-input" placeholder="Type assessment name..."></textarea>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; margin-top: 8px;">
                <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                  Date of Assessment:
                  <input type="date" id="ind-other-assessment-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                </label>
              </div>
              <div class="goal-text-row" style="align-items: flex-start;">
                <label>Description of Assessment</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="ind-other-assessment-desc-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <div style="height: 16px;"></div>
              <div class="goal-text-row" style="align-items: flex-start; margin-top: 12px;">
                <label>Summarize Results</label>
                <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                  <div id="ind-other-assessment-summary-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="transitionIndSummaryGoals">
        <span class="toggle-icon">+</span> Summary of Past and Present Goals
      </button>
      <div id="transitionIndSummaryGoals" class="section-content" style="display:none; padding-bottom: 12px;">
        <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; margin-top: 12px;">
          <label>Goal Status:</label>
          <div style="display:flex; flex-direction: column; gap: 8px; align-items: flex-start;">
            <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
              <input type="checkbox" id="transition-ind-goal-same"> Student's goal/plans remain the same
            </label>
            <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
              <input type="checkbox" id="transition-ind-goal-changed"> Student's goal/plans have changed
            </label>
          </div>
        </div>
        <div id="transition-ind-goal-change-card" class="section-content" style="display: none; margin-top: 10px;">
          <div style="border: 1px solid #bbb; border-radius: 8px; padding: 14px; background: #fafbfc;">
            <p style="margin: 0; font-size: 0.95rem;">
              While the student indicated interest in
              <input type="text" id="transition-ind-goal-change-prev" placeholder="previous goal/plans" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin: 0 8px; min-width: 260px;" />
              last year, assessments and conversations with the student this year indicate that they are now interested in
              <input type="text" id="transition-ind-goal-change-new" placeholder="new goal/plans" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin: 0 8px; min-width: 260px;" />.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

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

  // Utilities
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

  // Progress list logic
  const progressList = container.querySelector('#transition-ind-progress-list');
  const addBtn = container.querySelector('#transition-ind-add-progress');
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

  // Initialize Quill for Other Information and assessment summaries
  setTimeout(() => {
    if (window.Quill) {
      const toolbar = [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean']
      ];
      if (!window.transitionIndOtherQuill) {
        const el = document.getElementById('transition-ind-other-input-quill');
        if (el) {
          window.transitionIndOtherQuill = new Quill('#transition-ind-other-input-quill', { modules: { toolbar }, theme: 'snow', placeholder: 'Optional' });
        }
      }
      const ensure = (id, key) => {
        const el = document.getElementById(id);
        if (el && !window[key]) {
          window[key] = new Quill('#' + id, { modules: { toolbar }, theme: 'snow', placeholder: 'Add a brief summary of results' });
        }
      };
      ensure('ind-basic-summary-quill', 'indBasicSummaryQuill');
      ensure('ind-ansell-summary-quill', 'indAnsellSummaryQuill');
      ensure('ind-tpi-life-summary-quill', 'indTpiLifeSummaryQuill');
      ensure('ind-bshs-summary-quill', 'indBshsSummaryQuill');
      // Other Assessment editors
      const ensureDesc = (id, key, placeholder) => {
        const el = document.getElementById(id);
        if (el && !window[key]) {
          window[key] = new Quill('#' + id, { modules: { toolbar }, theme: 'snow', placeholder });
        }
      };
      ensureDesc('ind-other-assessment-desc-quill', 'indOtherAssessmentDescQuill', 'Describe the assessment (purpose, domains, how it was used)');
      ensure('ind-other-assessment-summary-quill', 'indOtherAssessmentSummaryQuill');
      // Transition assessment description editor
      ensure('ind-assess-transition-desc-quill', 'indAssessTransitionDescQuill');
    }
  }, 0);

  // Updated Information toggles
  const updatedToggles = container.querySelectorAll('.ind-updated-toggle');
  updatedToggles.forEach(cb => cb.addEventListener('change', function() {
    const target = container.querySelector('#' + cb.getAttribute('data-target'));
    if (target) target.style.display = cb.checked ? 'block' : 'none';
  }));

  // Auto-resize Other Assessment name
  const otherName = container.querySelector('#ind-other-assessment-name');
  if (otherName) {
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
    setupAutoResize(otherName);
  }

  // Goal Status mutual exclusivity and card toggle
  const indSame = container.querySelector('#transition-ind-goal-same');
  const indChanged = container.querySelector('#transition-ind-goal-changed');
  const indChangeCard = container.querySelector('#transition-ind-goal-change-card');
  const syncInd = function() {
    if (this === indSame && indSame.checked) indChanged.checked = false;
    if (this === indChanged && indChanged.checked) indSame.checked = false;
    if (indChangeCard) indChangeCard.style.display = indChanged && indChanged.checked ? 'block' : 'none';
  };
  if (indSame) indSame.addEventListener('change', syncInd);
  if (indChanged) indChanged.addEventListener('change', syncInd);

  // Recommend Independent Living Goal (yes/no) mutual exclusivity
  const recYes = container.querySelector('#transition-ind-recommend-yes');
  const recNo = container.querySelector('#transition-ind-recommend-no');
  const assessMethodsCard = container.querySelector('#transition-ind-assess-methods-card');
  const assessTransition = container.querySelector('#ind-assess-transition');
  const assessTransitionDesc = container.querySelector('#ind-assess-transition-desc');
  const assessOther = container.querySelector('#ind-assess-other');
  const assessOtherDesc = container.querySelector('#ind-assess-other-desc');
  const syncRecommend = function() {
    if (this === recYes && recYes.checked) recNo.checked = false;
    if (this === recNo && recNo.checked) recYes.checked = false;
    if (assessMethodsCard) assessMethodsCard.style.display = recNo && recNo.checked ? 'block' : 'none';
  };
  if (recYes) recYes.addEventListener('change', syncRecommend);
  if (recNo) recNo.addEventListener('change', syncRecommend);

  // Toggle transition assessments description area
  const syncAssessTransition = function() {
    if (assessTransitionDesc) assessTransitionDesc.style.display = assessTransition && assessTransition.checked ? 'block' : 'none';
  };
  if (assessTransition) assessTransition.addEventListener('change', syncAssessTransition);
  // Toggle other description inline input
  const syncAssessOther = function() {
    if (assessOtherDesc) assessOtherDesc.style.display = assessOther && assessOther.checked ? 'inline-block' : 'none';
  };
  if (assessOther) assessOther.addEventListener('change', syncAssessOther);
}

