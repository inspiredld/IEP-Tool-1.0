// Goals & SDIs main entry

document.addEventListener('DOMContentLoaded', () => {
  try { console.log('GoalsSDIs loaded: rc-grade-ui-3'); } catch(_) {}
  const list = document.getElementById('gs-card-list');
  const addBtn = document.getElementById('gs-add-goal-btn');
  let gsEditorCounter = 0;
  // Student bar wiring
  try {
    const proSel = document.getElementById('gs-pronouns-select');
    const custom = document.getElementById('gs-student-custom');
    if (proSel && custom) {
      proSel.addEventListener('change', () => {
        custom.hidden = proSel.value !== 'other';
      });
    }
  } catch (_) {}

  function createGoalCard(index) {
    const card = document.createElement('div');
    card.className = 'goal-card gs-goal-card';
    card.innerHTML = `
      <div class="goal-title-row"><h5 class="gs-item-title">Goal ${index}</h5><span class="goal-title-sep">-</span>
        <select class="gs-goal-type-select" aria-label="Goal Type" style="min-width: 220px;">
          <option value="">Select Goal Type</option>
          <option value="reading-comprehension">Reading Comprehension</option>
          <option value="reading-fluency">Reading Fluency</option>
          <option value="writing">Writing</option>
          <option value="math-computation">Math Computation</option>
          <option value="math-calculation">Math Calculation</option>
          <option value="math-general">Math (General)</option>
          <option value="executive-functioning">Executive Functioning</option>
          <option value="social-skills">Social Skills</option>
          <option value="behavior">Behavior</option>
          <option value="other">Other</option>
        </select>
        <button type="button" class="remove-goal-btn gs-remove-goal-btn" title="Remove Goal">-Goal</button>
      </div>
      <div class="gs-goal-type-content"></div>`;
    return card;
  }

  function renumberCards() {
    if (!list) return;
    const cards = list.querySelectorAll('.gs-goal-card');
    cards.forEach((card, idx) => {
      const title = card.querySelector('.gs-item-title');
      if (title) {
        title.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE) n.nodeValue = `Goal ${idx + 1}`; });
      }
      const rm = card.querySelector('.remove-goal-btn');
      if (rm) rm.style.display = cards.length > 1 ? 'inline-flex' : 'none';
    });
  }

  if (addBtn && list) {
    addBtn.addEventListener('click', () => {
      const newIndex = list.querySelectorAll('.gs-goal-card').length + 1;
      const card = createGoalCard(newIndex);
      list.appendChild(card);
      renumberCards();
      wireCard(card);
      wireTypeBehavior(card);
    });
  }

  // Renderer (top-level so all cards/handlers can access)
  function renderReadingComprehension(typeContent, mode) {
    const editorId = `gs-goal-text-${++gsEditorCounter}`;
    const gridStyle = (mode === 'reading-fluency')
      ? 'margin-top: 28px;'
      : 'margin-top: 28px; grid-template-columns: 0.65fr 1.35fr;';
    typeContent.innerHTML = `
      <div class="goal-quad-grid" style="${gridStyle}">
        <div class="cell">
          <div class="cell-top">
            <label>1. Condition</label>
          </div>
          <div class="rcg-condition">
            <div class="rcg-condition-row" style="display:flex; flex-direction:column; gap:8px; margin-left: 0 !important; padding-left: 0; width: 100%; align-items: flex-start;">
              <div style="display:flex; align-items:center; gap:10px; margin-left: 0 !important;">
              <label class="rcg-prompt">Given...</label>
                <span class="rcg-italic">Select all that apply:</span>
              </div>
              <div class="wc-cond-list" style="display:grid !important; grid-template-columns: 1fr 1fr !important; grid-auto-flow: row dense; gap: 10px 24px; margin-left: 14px; margin-top: 6px; max-width: 860px;">
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="writing-prompt" /> <span>a writing prompt</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="graphic-organizer" /> <span>a graphic organizer</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="sentence-starters" /> <span>sentence starters/frames</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column: 1 / 2 !important;"><input type="checkbox" class="wc-cond" value="teacher-model" /> <span>a teacher-modeled example</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="peer-feedback" /> <span>peer feedback</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="word-processor" /> <span>a word processor</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="rubric" /> <span>a rubric</span></label>
                <label class="wc-cond-grade-row" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column:1 / -1; flex-wrap: nowrap;">
                  <input type="checkbox" class="wc-cond wc-cond-grade" value="grade-level-prompt" />
                  <span>a </span>
                  <select class="wc-grade-select" style="min-width: 120px; display:none; margin-left: 2px;">
                    <option value="">select grade</option>
                    <option value="K">K</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
              </select>
                  <span> grade level writing prompt</span>
                </label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column:1 / -1;">
                  <input type="checkbox" class="wc-cond wc-cond-other" value="other" />
                  <span>Other</span>
                  <span class="wc-cond-other-box" style="display:none; align-items:center; gap:8px; margin-left: 10px; flex-wrap:wrap;">
                    <input type="text" class="wc-cond-other-input" placeholder="describe" style="width: 360px; min-width: 180px; max-width: 820px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-top">
            <label>2. Behavior</label>
          </div>
          <div class="rcg-behavior">
            ${mode === 'reading-fluency' ? `
            <div class="rcg-behavior-row">
              <label>[Student] will...</label>
              <select class="rcg-behavior-type">
                <option value="">select one</option>
                  <option value="read-orally">read orally</option>
                <option value="other">Other</option>
              </select>
            </div>
            ` : `
              <div class="rcg-behavior-grid" style="display:grid; grid-template-columns: max-content 1fr; gap: 8px 48px; align-items: start;">
                <div class="rcg-behavior-left">
            <div class="rcg-behavior-row">
              <label>[Student] will...</label>
              <select class="rcg-behavior-type">
                <option value="">select one</option>
                      <option value="answer">answer</option>
                      <option value="compare">compare</option>
                      <option value="describe">describe</option>
                      <option value="determine">determine</option>
                      <option value="identify">identify</option>
                      <option value="make">make</option>
                      <option value="respond">respond to</option>
                      <option value="retell">retell</option>
                      <option value="sequence">sequence</option>
                      <option value="summarize">summarize</option>
                <option value="other">Other</option>
              </select>
            </div>
                </div>
                <div class="rcg-behavior-right">
                  <div class="rcg-behavior-scope">
                    <label>Select all that apply:</label>
                    <div class="rcg-scope-list" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 8px 16px; margin-top: 4px; margin-left: 14px;">
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="comprehension-questions"/> <span>comprehension questions</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="literal-questions"/> <span>literal questions</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="inferential-questions"/> <span>inferential questions</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="main-idea-details"/> <span>main idea & details</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="sequence-of-events"/> <span>sequence of events</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="predictions"/> <span>predictions</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="conclusions"/> <span>conclusions</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="context-clues"/> <span>context clues</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="compare-contrast"/> <span>compare/contrast</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="characters-setting-plot"/> <span>characters, setting, plot</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="retell-sequence"/> <span>retell (in sequence)</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="authors-purpose"/> <span>author's purpose</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="theme"/> <span>theme</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="text-evidence"/> <span>text evidence</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="cause-effect"/> <span>cause/effect</span></label>
                      <label class="rcg-scope-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; white-space:nowrap;"><input type="checkbox" value="problem-solution"/> <span>problem/solution</span></label>
                      <label class="rcg-scope-item rcg-scope-other-item" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column:1 / -1;">
                        <input type="checkbox" class="rcg-scope-other" value="other"/>
                        <span>Other</span>
                        <span class="rcg-scope-other-box" style="display:none; align-items:center; gap:8px; margin-left: 10px; flex-wrap:wrap;">
                          <input type="text" class="rcg-scope-other-input" placeholder="describe" style="width: 360px; min-width: 180px; max-width: 820px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            `}
          </div>
        </div>
        <div class="cell span-2">
          <label>3. Performance Criteria (with...)</label>
          <div class="rcg-performance">
            <div class="rcg-performance-grid">
              <div class="pc-col">
                ${mode === 'reading-fluency' ? `
                  <div class="pc-row"><label>Select all that apply:</label></div>
                  <div class="pc-fluency-cats" style="display:flex; flex-direction:column; gap:8px; margin-top:4px;">
                    <label class="pc-fl-item" style="display:flex; align-items:center; gap:10px;">
                      <input type="checkbox" class="pcf-acc" />
                      <span>accuracy</span>
                      <span class="pcf-box pcf-acc-box" style="display:none; align-items:center; gap:8px;">
                        <input type="text" class="pcf-acc-input" placeholder="#" style="max-width:90px; width:90px; padding:6px 10px; border:1px solid #ccc; border-radius:4px; text-align:center;" />
                        <select class="pcf-acc-unit" style="min-width: 140px;">
                          <option value="">Select One</option>
                          <option value="percent">%</option>
                          <option value="max-errors">Max Errors</option>
                        </select>
                      </span>
                    </label>
                    <label class="pc-fl-item" style="display:flex; align-items:center; gap:10px;">
                      <input type="checkbox" class="pcf-rate" />
                      <span>rate</span>
                      <span class="pcf-box pcf-rate-box" style="display:none; align-items:center; gap:8px;">
                        <input type="text" class="pcf-rate-input" placeholder="#" style="max-width:90px; width:90px; padding:6px 10px; border:1px solid #ccc; border-radius:4px; text-align:center;" />
                        <span>WCPM</span>
                      </span>
                    </label>
                    <label class="pc-fl-item" style="display:flex; align-items:center; gap:10px;">
                      <input type="checkbox" class="pcf-prosody" />
                      <span>prosody</span>
                      <span class="pcf-box pcf-prosody-box" style="display:none; align-items:center; gap:8px;">
                        <input type="text" class="pcf-prosody-input" placeholder="describe" style="max-width:280px; width:280px; padding:6px 10px; border:1px solid #ccc; border-radius:4px;" />
                      </span>
                    </label>
                    <label class="pc-fl-item" style="display:flex; align-items:center; gap:10px;">
                      <input type="checkbox" class="pcf-other" />
                      <span>Other</span>
                      <span class="pcf-box pcf-other-box" style="display:none; align-items:center; gap:8px;">
                        <input type="text" class="pcf-other-input" placeholder="describe" style="max-width:320px; width:320px; padding:6px 10px; border:1px solid #ccc; border-radius:4px;" />
                      </span>
                    </label>
                  </div>
                ` : `
                <div class="pc-row"><label>Category</label>
                <select class="rcg-performance-category" style="max-width: 260px;">
                  <option value="">select one</option>
                  <option value="accuracy">Accuracy (%)</option>
                  <option value="percentile">Percentile</option>
                  <option value="num-correct"># Correct</option>
                    <option value="num-errors"># of Errors Allowed</option>
                  <option value="rubric">Rubric/Rating Scale</option>
                    <option value="other">Other</option>
                </select></div>
                `}
              </div>
              <div class="pc-col">
                <div class="pc-row"><label>Mastery Level</label></div>
                <div class="rcg-performance-mastery">
                  <div class="rcg-mastery-grid" style="text-align:center;">
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Preposition</label>
                        <select class="ml-preposition-select" style="min-width: 180px; text-align: left;">
                          <option value="">Select One</option>
                          <option value="in">in</option>
                          <option value="across">across</option>
                          <option value="over">over</option>
                          <option value="during">during</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt"># or Ratio</label>
                        <select class="ml-count-select" style="width: 80px; min-width: 80px;">
                          <option value="">Select One</option>
                          <option value="count">#</option>
                          <option value="ratio">ratio</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Frequency</label>
                        <select class="ml-frequency-select" style="min-width: 140px;">
                          <option value="">Select One</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="two-per-month">2x/month</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Units</label>
                        <select class="ml-units-select" style="min-width: 160px;">
                          <option value="">Select One</option>
                          <option value="trials">trials</option>
                          <option value="opportunities">opportunities</option>
                          <option value="attempts">attempts</option>
                          <option value="sessions">sessions</option>
                          <option value="probes">probes</option>
                          <option value="tasks">tasks</option>
                          <option value="assessments">assessments</option>
                          <option value="observations">observations</option>
                          <option value="measures">measures</option>
                          <option value="measurements">measurements</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="gs-goal-text gs-inline">
            <label class="goal-subheading gs-goal-text-title">Measurable Annual Goal</label>
            <div class="rte-box-outer gs-rte-inline"><textarea id="${editorId}" class="gs-goal-textarea"></textarea></div>
            <div class="gs-generate-row"><button type="button" class="generate-report-btn gs-generate-goal-btn">Generate Goal</button></div>
            </div>
        </div>
      </div>`;

    // Wire dynamic behaviors within this rendered scope
    wireConditionControls(typeContent);
    wireBehaviorControls(typeContent);
    wirePerformanceControls(typeContent);
    wireMasteryPreposition(typeContent);
    wireCountRatioControls(typeContent);
    wireFrequencyControls(typeContent);
    wireUnitsControls(typeContent);
    ensureMasteryOtherRows(typeContent);
    wireMagComposer(typeContent);
    wireFluencyCategory(typeContent);
  }

  // Basic Writing template (scaffolded similar to Reading Comprehension)
  function renderWriting(typeContent) {
    const editorId = `gs-goal-text-${++gsEditorCounter}`;
    typeContent.innerHTML = `
      <div class="goal-quad-grid" style="margin-top: 28px; grid-template-columns: 0.65fr 1.35fr;">
        <div class="cell">
          <div class="cell-top">
            <label>1. Condition</label>
          </div>
          <div class="rcg-condition">
            <div class="rcg-condition-row" style="display:flex; flex-direction:column; gap:8px; margin-left: 0 !important; padding-left: 0; width: 100%; align-items: flex-start;">
              <div style="display:flex; align-items:center; gap:10px; margin-left: 0 !important;">
                <label class="rcg-prompt">Given...</label>
                <span class="rcg-italic">Select all that apply:</span>
              </div>
              <div class="wc-cond-list" style="display:grid; grid-template-columns: 1fr 1fr; grid-auto-flow: row dense; gap: 10px 24px; margin-left: 14px; margin-top: 6px; max-width: 860px;">
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="writing-prompt" /> <span>a writing prompt</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="graphic-organizer" /> <span>a graphic organizer</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="sentence-starters" /> <span>sentence starters/frames</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="teacher-model" /> <span>a teacher-modeled example</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="peer-feedback" /> <span>peer feedback</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="word-processor" /> <span>a word processor</span></label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="rubric" /> <span>a rubric</span></label>
                <label class="wc-cond-grade-row" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column:1 / -1; flex-wrap: nowrap;">
                  <input type="checkbox" class="wc-cond wc-cond-grade" value="grade-level-prompt" />
                  <span>a </span>
                  <select class="wc-grade-select" style="min-width: 120px; display:none; margin-left: 2px;">
                    <option value="">select grade</option>
                    <option value="K">K</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
                  <span> grade level writing prompt</span>
                </label>
                <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column:1 / -1;">
                  <input type="checkbox" class="wc-cond wc-cond-other" value="other" />
                  <span>Other</span>
                  <span class="wc-cond-other-box" style="display:none; align-items:center; gap:8px; margin-left: 10px; flex-wrap:wrap;">
                    <input type="text" class="wc-cond-other-input" placeholder="describe" style="width: 360px; min-width: 180px; max-width: 820px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-top">
            <label>2. Behavior</label>
          </div>
          <div class="rcg-behavior">
            <div class="wc-behavior-grid" style="display:grid; grid-template-columns: 0.6fr 1.4fr; gap: 8px 96px; align-items:start;">
              <div class="wc-col wc-col-left">
                <div class="wc-left-grid" style="display:grid; grid-template-columns: max-content 1fr; column-gap: 10px; row-gap: 24px; align-items:center;">
                  <label class="wc-left-label">[Student] will...</label>
                  <select class="rcg-behavior-type">
                    <option value="">select one</option>
                    <option value="write">write</option>
                    <option value="plan">plan</option>
                    <option value="draft">draft</option>
                    <option value="revise">revise</option>
                    <option value="edit">edit</option>
                    <option value="publish">publish</option>
                    <option value="compose">compose</option>
                    <option value="summarize">summarize</option>
                    <option value="other">Other</option>
                  </select>
                  <div class="rcg-behavior-other-inline" style="display:none; grid-column: 2 / 3;">
                    <input type="text" class="rcg-behavior-input" placeholder="describe" style="width: 360px; max-width: 360px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                  </div>
                  <label class="rcg-prompt">Length</label>
                  <div class="wc-length-row" style="display:flex; align-items:center; gap:8px; margin-top: 4px;">
                    <input type="text" class="wc-length-input" placeholder="#" style="max-width:80px; width:80px; text-align:center; padding:6px 10px; border:1px solid #ccc; border-radius:4px;" />
                    <select class="wc-length-unit" style="min-width: 160px;">
                      <option value="">select unit</option>
                      <option value="sentences">sentence(s)</option>
                      <option value="paragraphs">paragraph(s)</option>
                <option value="other">other</option>
              </select>
                  </div>
                  <div class="wc-length-other" style="display:none; grid-column: 2 / 3; margin-top: 8px;">
                    <input type="text" class="wc-length-other-input" placeholder="describe" style="width: 260px; max-width: 420px; padding: 6px 10px; border:1px solid #ccc; border-radius:4px;" />
                  </div>
                </div>
              </div>
              <div class="wc-col wc-col-components">
                <div class="wc-components" style="margin-top:0;">
                  <label class="rcg-prompt">Optional: including...</label>
                  <div class="wc-components-list" style="display:flex; flex-direction:column; gap:8px; margin-top: 6px;">
                    <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" value="intro-body-conclusion" class="wc-comp" /><span>introduction/body/conclusion</span></label>
                    <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" value="supporting-details" class="wc-comp" /><span>supporting details/evidence</span></label>
                    <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" value="grammar-mechanics" class="wc-comp" /><span>grammar/mechanics</span></label>
                    <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" value="varied-sentence-structure" class="wc-comp" /><span>varied sentence structure</span></label>
                    <label class="wc-comp-other-row" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;">
                      <input type="checkbox" class="wc-comp wc-components-other" value="other"/>
                      <span>Other</span>
                      <span class="wc-components-other-box" style="display:none; align-items:center; gap:8px; margin-left: 10px; flex-wrap:wrap;">
                        <input type="text" class="wc-components-other-input" placeholder="describe" style="width: 360px; min-width: 180px; max-width: 820px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell span-2">
          <label>3. Performance Criteria (with...)</label>
          <div class="rcg-performance">
            <div class="rcg-performance-grid">
              <div class="pc-col">
                <div class="pc-row"><label>Category</label>
                  <select class="rcg-performance-category" style="max-width: 260px;">
                    <option value="">select one</option>
                    <option value="accuracy">Accuracy (%)</option>
                    <option value="percentile">Percentile</option>
                    <option value="num-correct"># Correct</option>
                    <option value="num-errors"># of Errors Allowed</option>
                    <option value="rubric">Rubric/Rating Scale</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="pc-col">
                <div class="pc-row"><label>Mastery Level</label></div>
                <div class="rcg-performance-mastery">
                  <div class="rcg-mastery-grid" style="text-align:center;">
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Preposition</label>
                        <select class="ml-preposition-select" style="min-width: 180px; text-align: left;">
                          <option value="">Select One</option>
                          <option value="in">in</option>
                          <option value="across">across</option>
                          <option value="over">over</option>
                          <option value="during">during</option>
                <option value="other">other</option>
              </select>
            </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt"># or Ratio</label>
                        <select class="ml-count-select" style="width: 80px; min-width: 80px;">
                          <option value="">Select One</option>
                          <option value="count">#</option>
                          <option value="ratio">ratio</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Frequency</label>
                        <select class="ml-frequency-select" style="min-width: 140px;">
                          <option value="">Select One</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="two-per-month">2x/month</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Units</label>
                        <select class="ml-units-select" style="min-width: 160px;">
                          <option value="">Select One</option>
                          <option value="trials">trials</option>
                          <option value="opportunities">opportunities</option>
                          <option value="attempts">attempts</option>
                          <option value="sessions">sessions</option>
                          <option value="probes">probes</option>
                          <option value="tasks">tasks</option>
                          <option value="assessments">assessments</option>
                          <option value="observations">observations</option>
                          <option value="measures">measures</option>
                          <option value="measurements">measurements</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="gs-goal-text gs-inline">
            <label class="goal-subheading gs-goal-text-title">Measurable Annual Goal</label>
            <div class="rte-box-outer gs-rte-inline"><textarea id="${editorId}" class="gs-goal-textarea"></textarea></div>
            <div class="gs-generate-row"><button type="button" class="generate-report-btn gs-generate-goal-btn">Generate Goal</button></div>
          </div>
        </div>
      </div>`;

    // Reuse existing wiring for dynamic pieces and MAG composition
    wireConditionControls(typeContent);
    wireBehaviorControls(typeContent);
    wirePerformanceControls(typeContent);
    wireMasteryPreposition(typeContent);
    wireCountRatioControls(typeContent);
    wireFrequencyControls(typeContent);
    wireUnitsControls(typeContent);
    ensureMasteryOtherRows(typeContent);
    wireMagComposer(typeContent);
    // Writing components: toggle 'Other' describe input
    try {
      const compOther = typeContent.querySelector('.wc-components-other');
      const compOtherBox = typeContent.querySelector('.wc-components-other-box');
      if (compOther && compOtherBox) {
        const toggle = () => { compOtherBox.style.display = compOther.checked ? 'inline-flex' : 'none'; };
        compOther.addEventListener('change', toggle);
        toggle();
      }
    } catch (_) {}
    wireWritingLengthOther(typeContent);
  }

  function wireCard(scope) {
    // Placeholder for future per-card wiring
  }

  function wireTypeBehavior(scope) {
    const sel = scope.querySelector('.gs-goal-type-select');
    const content = scope.querySelector('.gs-goal-type-content');
    if (!sel) return;
    sel.addEventListener('change', () => {
      if (sel.value === 'reading-comprehension' || sel.value === 'reading-fluency') {
        renderReadingComprehension(content, sel.value);
      } else if (sel.value === 'writing') {
        renderWriting(content);
      } else if (sel.value === 'math-computation' || sel.value === 'math-calculation' || sel.value === 'math-general') {
        renderMath(content, sel.value);
      } else if (content) {
        content.innerHTML = '';
      }
    });
  }

  function wireInitial() {
    document.querySelectorAll('#gs-card-list .gs-goal-card').forEach(card => wireCard(card));
    document.querySelectorAll('#gs-card-list .gs-goal-card').forEach(card => wireTypeBehavior(card));
  }

  wireInitial();

  // Delegated handler to ensure dynamically added cards always work
  if (list) {
    list.addEventListener('change', (e) => {
      const sel = e.target && e.target.closest('.gs-goal-type-select');
      if (!sel) return;
      const card = sel.closest('.gs-goal-card');
      const content = card && card.querySelector('.gs-goal-type-content');
      if (!content) return;
      if (sel.value === 'reading-comprehension' || sel.value === 'reading-fluency') {
        renderReadingComprehension(content, sel.value);
      } else if (sel.value === 'writing') {
        renderWriting(content);
      } else if (sel.value === 'math-computation' || sel.value === 'math-calculation' || sel.value === 'math-general') {
        renderMath(content, sel.value);
      } else {
        content.innerHTML = '';
      }
      // Update remove buttons visibility after rendering
      renumberCards();
    });
    // Fallback: keep legacy cards working without fighting the new below-row layout
    list.addEventListener('change', (e) => {
      const cond = e.target && e.target.closest('.rcg-condition-type');
      if (!cond) return;
      try {
        const container = cond.closest('.rcg-condition');
        const row = cond.closest('.rcg-condition-row');
        if (!row || !container) return;
        const val = cond.value;
        // Let the main handler manage grade-level/instructional-level and words-count UIs
        if (val === 'grade-level' || val === 'instructional-level' || val === 'words-count') return;
        // Use existing inline element if present anywhere in the container
        let inline = container.querySelector('.rcg-condition-other-inline');
        if (!inline) {
          inline = document.createElement('div');
          inline.className = 'rcg-condition-other-inline';
          inline.style.display = 'none';
          inline.style.marginTop = '8px';
          inline.innerHTML = `<input type="text" class="rcg-other-input" placeholder="add condition details" style="width: 520px; max-width: 520px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">`;
          // place it below the row for consistency
          row.parentNode.insertBefore(inline, row.nextSibling);
        }
        const needsDetail = ['graphic-organizer','comprehension-questions','annotation-tool','highlighter-annotation','text-to-speech','story-map','text-visual-supports','visual-supports','read-aloud','small-group'];
        const input = inline.querySelector('.rcg-other-input');
        if (input) input.placeholder = 'add condition details';
        inline.style.display = (val === 'other' || needsDetail.includes(val)) ? 'block' : 'none';
      } catch (_) {}
    });
    // Remove goal button: ensure at least one card remains
    list.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest('.remove-goal-btn');
      if (!btn) return;
      const cards = list.querySelectorAll('.gs-goal-card');
      if (cards.length <= 1) return; // keep one
      const card = btn.closest('.gs-goal-card');
      if (card) card.remove();
      renumberCards();
    });
  }
  // ====== Dynamic wiring helpers ======
  function wireMagComposer(root) {
    const card = root.closest('.gs-goal-card');
    const output = card && card.querySelector('.gs-goal-textarea');
    if (!output) return;
    const generateBtn = card.querySelector('.gs-generate-goal-btn');
    // Start visible but empty until user generates
    card._magGenerated = false;
    card._magUserEdited = false;
    output.value = '';

    const getStudentName = () => {
      // Priority: Goals & SDIs top-of-section, then PLAA, else [Student]
      const sectionName = document.getElementById('gs-student-name')?.value?.trim();
      if (sectionName) return sectionName;
      const plaaName = document.getElementById('firstName')?.value?.trim();
      if (plaaName) return plaaName;
      return '[Student]';
    };
    const getSelectedText = (selectEl) => {
      if (!selectEl) return '';
      const opt = selectEl.options[selectEl.selectedIndex];
      return (opt && opt.text) ? opt.text.trim() : '';
    };
    // Join array of items with commas and "and"
    const joinWithAnd = (items) => {
      const arr = (items || []).map(s => (s || '').trim()).filter(Boolean);
      if (arr.length === 0) return '';
      if (arr.length === 1) return arr[0];
      if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
      return `${arr.slice(0, -1).join(', ')}, and ${arr[arr.length - 1]}`;
    };
    const buildCategoryPhrase = () => {
      // Reading Fluency uses checklist in .pc-fluency-cats
      const fluencyCats = root.querySelector('.pc-fluency-cats');
      if (fluencyCats) {
        const items = [];
        // accuracy
        const accChecked = fluencyCats.querySelector('.pcf-acc')?.checked;
        if (accChecked) {
          const num = fluencyCats.querySelector('.pcf-acc-input')?.value?.trim() || '___';
          const unit = fluencyCats.querySelector('.pcf-acc-unit')?.value || '';
          if (unit === 'percent') items.push(`${num}% accuracy`);
          else if (unit === 'max-errors') items.push(`no more than ${num} errors`);
          else items.push(`${num} accuracy`);
        }
        // rate
        const rateChecked = fluencyCats.querySelector('.pcf-rate')?.checked;
        if (rateChecked) {
          const num = fluencyCats.querySelector('.pcf-rate-input')?.value?.trim() || '___';
          items.push(`${num} words correct per minute`);
        }
        // prosody
        const prosodyChecked = fluencyCats.querySelector('.pcf-prosody')?.checked;
        if (prosodyChecked) {
          const txt = fluencyCats.querySelector('.pcf-prosody-input')?.value?.trim();
          items.push(`prosody${txt ? ` (${txt})` : ''}`);
        }
        // other (optional)
        const otherChecked = fluencyCats.querySelector('.pcf-other')?.checked;
        if (otherChecked) {
          const desc = fluencyCats.querySelector('.pcf-other-input')?.value?.trim();
          if (desc) items.push(desc);
        }
        if (items.length) {
          return { amount: '', categorySpecific: '', customWith: `with ${joinWithAnd(items)}` };
        }
        return { amount: '', categorySpecific: '' };
      }

      // Reading Comprehension (select-based categories)
      const catSel = root.querySelector('.rcg-performance-category');
      const category = catSel ? catSel.value : '';
      if (!category) return { amount: '', categorySpecific: '' };
      if (category === 'accuracy') {
        const val = root.querySelector('.pc-accuracy-input')?.value?.trim();
        return { amount: val || '___', categorySpecific: '% accuracy' };
      }
      if (category === 'percentile') {
        const val = root.querySelector('.pc-percentile-input')?.value?.trim();
        return { amount: val || '___', categorySpecific: 'percentile', customWith: `at the ${val || '___'} percentile` };
      }
      if (category === 'num-correct') {
        const left = root.querySelector('.pc-numcorrect-input')?.value?.trim();
        const outof = root.querySelector('.pc-outof-input')?.value?.trim();
        if (left && outof) {
          return { amount: '', categorySpecific: '', customWith: `with ${left} out of ${outof} correct` };
        }
        const amount = left || '___';
        const categorySpecific = 'correct';
        return { amount, categorySpecific };
      }
      if (category === 'num-errors') {
        const val = root.querySelector('.pc-numerrors-input')?.value?.trim();
        return { amount: '', categorySpecific: '', customWith: `with no more than ${val || '___'} errors` };
      }
      if (category === 'rubric') {
        const left = root.querySelector('.pc-rubric-left')?.value?.trim();
        const right = root.querySelector('.pc-rubric-right')?.value?.trim();
        const name = root.querySelector('.pc-rubric-name')?.value?.trim();
        const amount = `${left || '_'} / ${right || '_'}`;
        const categorySpecific = name ? `on the ${name}` : 'on the rubric';
        // If Writing goal type (wc-components present), use custom phrasing
        const isWriting = !!root.querySelector('.wc-components');
        if (isWriting) {
          const rubricName = name ? name : 'rubric';
          return { amount: '', categorySpecific: '', customWith: `achieving a score of at least ${amount} on the ${rubricName}` };
        }
        return { amount, categorySpecific };
      }
      if (category === 'other') {
        const txt = root.querySelector('.pc-other-input')?.value?.trim();
        return { amount: txt || '___', categorySpecific: '' };
      }
      return { amount: '', categorySpecific: '' };
    };
    const buildMasteryPhrase = () => {
      // Preposition
      const prepSel = root.querySelector('.ml-preposition-select');
      let prep = (prepSel && prepSel.value) || '';
      if (prep === 'other') {
        const other = root.querySelector('.ml-preposition-other-input')?.value?.trim();
        prep = other || '';
      }
      // Count or Ratio
      const countSel = root.querySelector('.ml-count-select');
      const mode = countSel ? countSel.value : '';
      let countPart = '';
      if (mode === 'count') {
        const n = root.querySelector('.ml-count-input')?.value?.trim();
        const cons = root.querySelector('.ml-count-consecutive')?.checked;
        countPart = `${n || '___'}${cons ? ' consecutive' : ''}`;
      } else if (mode === 'ratio') {
        const l = root.querySelector('.ml-ratio-left')?.value?.trim();
        const r = root.querySelector('.ml-ratio-right')?.value?.trim();
        const cons = root.querySelector('.ml-ratio-consecutive')?.checked;
        countPart = `${l || '_'} of ${r || '_'}${cons ? ' consecutive' : ''}`;
      }
      // Frequency and Units
      const freqSel = root.querySelector('.ml-frequency-select');
      const freqVal = freqSel ? freqSel.value : '';
      let freqText = '';
      if (freqVal === 'other') {
        freqText = root.querySelector('.ml-frequency-other-input')?.value?.trim() || '';
      } else {
        freqText = getSelectedText(freqSel).toLowerCase();
      }
      const unitsSel = root.querySelector('.ml-units-select');
      const unitsVal = unitsSel ? unitsSel.value : '';
      let unitsText = '';
      if (unitsVal === 'other') {
        unitsText = root.querySelector('.ml-units-other-input')?.value?.trim() || '';
      } else {
        unitsText = getSelectedText(unitsSel).toLowerCase();
      }
      // Special phrasing for 2x/month → "trials conducted twice per month"
      const parts = [];
      if (prep) parts.push(prep);
      if (countPart) parts.push(countPart.trim());
      if (freqVal === 'two-per-month' || /2x\s*\/\s*month/i.test(freqText)) {
        if (unitsText) parts.push(`${unitsText} conducted twice per month`);
        else parts.push('conducted twice per month');
      } else {
        if (freqText) parts.push(freqText);
        if (unitsText) parts.push(unitsText);
      }
      return parts.join(' ');
    };
    const buildCondition = () => {
      const sel = root.querySelector('.rcg-condition-type');
      // Writing: checklist-based conditions
      const wcList = root.querySelector('.wc-cond-list');
      if (wcList) {
        const items = [];
        wcList.querySelectorAll('.wc-cond').forEach(cb => {
          const input = cb;
          if (!(input instanceof HTMLInputElement)) return;
          if (!input.checked) return;
          const val = input.value;
          if (val === 'grade-level-prompt') {
            const grade = root.querySelector('.wc-grade-select')?.value?.trim();
            if (grade) {
              const needsAn = (g) => {
                if (!g) return false;
                const s = String(g).toLowerCase();
                return s.startsWith('8') || s.startsWith('11');
              };
              const article = needsAn(grade) ? 'an' : 'a';
              items.push(`${article} ${grade}-grade level writing prompt`);
            } else {
              items.push('a grade level writing prompt');
            }
            return;
          }
          if (val === 'other') {
            const otherTxt = root.querySelector('.wc-cond-other-input')?.value?.trim();
            if (otherTxt) items.push(otherTxt);
            return;
          }
          // Map known items to phrases
          switch (val) {
            case 'writing-prompt': items.push('a writing prompt'); break;
            case 'graphic-organizer': items.push('a graphic organizer'); break;
            case 'sentence-starters': items.push('sentence starters/frames'); break;
            case 'teacher-model': items.push('a teacher-modeled example'); break;
            case 'peer-feedback': items.push('peer feedback'); break;
            case 'word-processor': items.push('a word processor'); break;
            case 'rubric': items.push('a rubric'); break;
            default: break;
          }
        });
        const phrase = items.length ? joinWithAnd(items) : '';
        return phrase;
      }
      if (!sel) return '';
      const val = sel.value;
      const label = getSelectedText(sel);
      const selectedText = (sel.options[sel.selectedIndex]?.text || '').toLowerCase();
      const isWords = (val === 'words-count') || selectedText.includes('___ words') || selectedText.includes('words');
      // Prefer the dedicated words input, fallback to generic
      let wordsVal = root.querySelector('.rcg-words-input')?.value?.trim() || '';
      if (!wordsVal) wordsVal = root.querySelector('.rcg-condition-other-inline .rcg-other-input')?.value?.trim() || '';
      if (isWords) {
        const n = wordsVal || '___';
        return `a ${n}-word passage`;
      }
      // Grade-level: special phrasing when a specific grade is selected
      if (val === 'grade-level') {
        const gradeSelVal = root.querySelector('.rcg-grade-select')?.value?.trim();
        const typedLevel = root.querySelector('.rcg-condition-other-inline .rcg-other-input')?.value?.trim();
        if (gradeSelVal) return `a ${gradeSelVal}-grade level passage`;
        if (typedLevel) return `a grade level reading passage (${typedLevel})`;
        return label;
      }
      // Instructional-level: phrase as "an instructional-level passage" with optional (grade or typed) detail
      if (val === 'instructional-level') {
        const gradeSelVal = root.querySelector('.rcg-grade-select')?.value?.trim();
        const typedLevel = root.querySelector('.rcg-condition-other-inline .rcg-other-input')?.value?.trim();
        const level = gradeSelVal || typedLevel || '';
        return level
          ? `an instructional-level passage (${level})`
          : 'an instructional-level passage';
      }
      // If user typed details in the inline box, append in parentheses for specific types
      const detailInput = root.querySelector('.rcg-condition-other-inline .rcg-other-input');
      const detail = detailInput ? detailInput.value.trim() : '';
      if (val === 'other') {
        return detail || '';
      }
      if (detail) {
        return `${label} (${detail})`;
      }
      return label;
    };
    const buildBehavior = () => {
      const sel = root.querySelector('.rcg-behavior-type');
      if (!sel) return '';
      // Verb (may be from "other" input)
      let verb = '';
      if (sel.value === 'other') {
        verb = root.querySelector('.rcg-behavior-other-inline .rcg-behavior-input')?.value?.trim() || '';
      } else {
        verb = getSelectedText(sel);
      }
      verb = (verb || '').toLowerCase();
      // Writing mode: has wc-components/length controls
      const writingMode = !!root.querySelector('.wc-components');
      if (writingMode) {
        // Length phrase
        const lenNumRaw = root.querySelector('.wc-length-input')?.value?.trim();
        const lenUnitSel = root.querySelector('.wc-length-unit');
        const lenUnitVal = lenUnitSel ? (lenUnitSel.value || '') : '';
        const lenUnitRaw = lenUnitVal ? (getSelectedText(lenUnitSel)?.toLowerCase() || '') : '';
        const lenNum = lenNumRaw && !isNaN(Number(lenNumRaw)) ? Number(lenNumRaw) : null;
        const isPlural = (n) => n === null ? true : n !== 1;
        const normalizeUnit = (raw, n) => {
          if (!raw) return '';
          if (raw.startsWith('sentence')) return isPlural(n) ? 'sentences' : 'sentence';
          if (raw.startsWith('paragraph')) return isPlural(n) ? 'paragraphs' : 'paragraph';
          if (raw.startsWith('other')) {
            const otherTxt = root.querySelector('.wc-length-other-input')?.value?.trim();
            return otherTxt || 'response';
          }
          return raw;
        };
        const lenUnit = normalizeUnit(lenUnitRaw, lenNum);
        let lengthPhrase = '';
        if (!lenUnitVal) {
          // No unit selected: default to generic response
          lengthPhrase = 'a response';
        } else {
          const nStr = (lenNum !== null ? String(lenNum) : '___');
          let base = 'sentence';
          if (lenUnitVal === 'paragraphs') base = 'paragraph';
          if (lenUnitVal === 'other') {
            const custom = (root.querySelector('.wc-length-other-input')?.value?.trim()) || '[describe]';
            lengthPhrase = `a ${nStr}-${custom} response`;
          } else {
            lengthPhrase = `a ${nStr}-${base} response`;
          }
        }
        // Components checklist → canonical phrasing
        let compItems = [];
        root.querySelectorAll('.wc-components .wc-comp').forEach(cb => {
          const input = cb;
          if (!(input instanceof HTMLInputElement)) return;
          if (!input.checked) return;
          const val = (input.value || '').toLowerCase();
          if (input.classList.contains('wc-components-other')) {
            const otherTxt = root.querySelector('.wc-components-other-input')?.value?.trim();
            if (otherTxt) compItems.push(otherTxt);
            else compItems.push('other');
            return;
          }
          switch (val) {
            case 'intro-body-conclusion':
              compItems.push('an introduction, body, and conclusion');
              break;
            case 'supporting-details':
              compItems.push('supporting details and evidence');
              break;
            case 'grammar-mechanics':
              compItems.push('appropriate grammar and mechanics');
              break;
            case 'varied-sentence-structure':
              compItems.push('varied sentence structures');
              break;
            default: {
              const span = input.closest('label')?.querySelector('span');
              const text = (span?.textContent || '').trim();
              if (text) compItems.push(text.toLowerCase());
            }
          }
        });
        const includingPhrase = compItems.length ? ` including ${joinWithAnd(compItems)}` : '';
        return [verb, lengthPhrase, includingPhrase].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
      }
      // Reading Fluency: no RC checklist. Just return the verb.
      const isFluency = !!root.querySelector('.pc-fluency-cats');
      if (isFluency) return verb;

      // Skills (Reading Comprehension checklist). Collect checked items.
      const checked = Array.from(root.querySelectorAll('.rcg-scope-list .rcg-scope-item input[type="checkbox"]:checked'));
      const skills = checked.map(cb => {
        // If it's the special "Other" checkbox, use the typed text or 'other'
        if (cb.classList.contains('rcg-scope-other')) {
          const txt = root.querySelector('.rcg-scope-other-input')?.value?.trim();
          return (txt || 'other').toLowerCase();
        }
        const span = cb.closest('label')?.querySelector('span');
        return (span?.textContent || '').trim().toLowerCase();
      });
      // Normalize all selected skills to their base, then append "questions" once
      const normalizeSkill = (txt) => {
        let s = (txt || '').trim().toLowerCase();
        if (s.endsWith(' questions')) s = s.slice(0, -10).trim();
        if (s === 'predictions') s = 'prediction';
        if (s === 'conclusions') s = 'conclusion';
        if (s === 'context clues') s = 'context clue';
        return s;
      };
      const bases = [];
      skills.forEach(s => {
        const b = normalizeSkill(s);
        if (b && !bases.includes(b)) bases.push(b);
      });
      const skillsPhrase = bases.length ? `${joinWithAnd(bases)} questions` : '[select a skill]';
      return [verb, skillsPhrase].filter(Boolean).join(' ').trim();
    };
    const compose = () => {
      const condition = buildCondition();
      const name = getStudentName();
      const behavior = buildBehavior();
      const cat = buildCategoryPhrase();
      const mastery = buildMasteryPhrase();
      const withPhrase = cat.customWith
        ? cat.customWith
        : ((cat.amount || cat.categorySpecific)
           ? `with ${[cat.amount, cat.categorySpecific].filter(Boolean).join(' ')}`
           : '');
      let sentence = `Given ${condition || '___'}, ${name} will ${behavior || '___'} ${withPhrase}`.trim();
      if (mastery) sentence += ` ${mastery}`;
      sentence = sentence.replace(/\s+,/g, ',').replace(/\s{2,}/g, ' ').trim();
      if (!sentence.endsWith('.')) sentence += '.';
      if (!card._magGenerated) {
        output.value = '';
        return;
      }
      if (!card._magUserEdited) {
        output.value = sentence;
      }
    };

    // Wire change/input listeners within this card scope
    const events = ['change', 'input'];
    events.forEach(evt => root.addEventListener(evt, compose));
    // If the user types in the MAG box, stop auto-overwriting until they regenerate
    output.addEventListener('input', () => { if (card._magGenerated) card._magUserEdited = true; });
    // Also update when student name changes
    document.getElementById('gs-student-name')?.addEventListener('input', compose);
    document.getElementById('firstName')?.addEventListener('input', compose);
    compose();

    // Generate button enables output updates and populates once
    if (generateBtn && !generateBtn._wired) {
      generateBtn._wired = true;
      generateBtn.addEventListener('click', () => {
        card._magGenerated = true;
        card._magUserEdited = false; // allow regeneration to overwrite with fresh text
        compose();
      });
    }
  }
  function wireConditionControls(root) {
    const selects = root.querySelectorAll('.rcg-condition-type');
    selects.forEach(sel => {
      if (sel._wired) return; sel._wired = true;
      // dynamic width like behavior select
      const adjustWidth = () => {
        const text = sel.options[sel.selectedIndex]?.text || '';
        const measurer = document.createElement('span');
        const cs = window.getComputedStyle(sel);
        Object.assign(measurer.style, { visibility: 'hidden', position: 'fixed', whiteSpace: 'pre', fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight, letterSpacing: cs.letterSpacing });
        measurer.textContent = text || 'select one';
        document.body.appendChild(measurer);
        const width = Math.ceil(measurer.getBoundingClientRect().width + 42); // padding + arrow
        document.body.removeChild(measurer);
        sel.style.width = Math.max(140, width) + 'px';
      };
      // Ensure the inline input exists up-front
      // Helper to auto-grow input width horizontally up to a max
      const attachAutoGrowWidth = (input, onResize) => {
        if (!input || input._growWired) return; input._growWired = true;
        const measurer = document.createElement('span');
        const cs = window.getComputedStyle(input);
        Object.assign(measurer.style, { visibility: 'hidden', position: 'fixed', whiteSpace: 'pre', fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight, letterSpacing: cs.letterSpacing });
        document.body.appendChild(measurer);
        const min = 180; const max = 520;
        const fit = () => {
          measurer.textContent = input.value || input.placeholder || '';
          const w = Math.min(max, Math.max(min, Math.ceil(measurer.getBoundingClientRect().width + 22))); // padding
          input.style.width = w + 'px';
          if (typeof onResize === 'function') onResize();
        };
        input.addEventListener('input', fit);
        fit();
      };
      const ensureInline = () => {
        // Locate the container and row even if the select lives in the cell-top area
        let container = sel.closest('.rcg-condition');
        if (!container) container = sel.closest('.cell')?.querySelector('.rcg-condition') || null;
        if (!container) return null;
        let row = sel.closest('.rcg-condition-row');
        if (!row) row = container.querySelector('.rcg-condition-row');
        if (!row) return null;
        // Prefer an existing inline container below the row if present
        let otherInline = row.querySelector('.rcg-condition-other-inline')
          || row.nextElementSibling?.classList?.contains('rcg-condition-other-inline') && row.nextElementSibling
          || container.querySelector('.rcg-condition-other-inline');
        if (!otherInline) {
            otherInline = document.createElement('div');
            otherInline.className = 'rcg-condition-other-inline';
            otherInline.style.display = 'none';
          otherInline.style.marginTop = '8px';
          otherInline.innerHTML = `
            <div class="rcg-grade-wrap" style="display:none; align-items:center; gap:8px;">
              <select class="rcg-grade-select" style="min-width: 120px;">
                <option value="">select grade</option>
                <option value="K">K</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
              <span class="rcg-or-sep" style="margin: 0 8px;">-or-</span>
              <input type="text" class="rcg-other-input" placeholder="include level" style="width: 180px; max-width: 520px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div class="rcg-generic-wrap" style="display:none;">
              <input type="text" class="rcg-other-input" placeholder="add condition details" style="width: 180px; max-width: 520px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>`;
          // insert BELOW the dropdown row
          row.parentNode.insertBefore(otherInline, row.nextSibling);
        } else {
          // If an older inline exists to the right of the dropdown, move it below
          if (otherInline.parentNode === row) {
            otherInline.style.marginTop = '8px';
            row.parentNode.insertBefore(otherInline, row.nextSibling);
          }
          // Remove duplicate inline containers if any
          const allInlines = Array.from(container.querySelectorAll('.rcg-condition-other-inline'));
          if (allInlines.length > 1) {
            allInlines.slice(1).forEach(n => { try { n.remove(); } catch(_) {} });
            otherInline = container.querySelector('.rcg-condition-other-inline');
          }
          // If legacy inline lacks grade/generic wraps, upgrade it in place
          const hasWraps = otherInline.querySelector('.rcg-grade-wrap') || otherInline.querySelector('.rcg-generic-wrap');
          if (!hasWraps) {
            const legacyVal = otherInline.querySelector('.rcg-other-input')?.value || '';
            otherInline.innerHTML = `
              <div class="rcg-grade-wrap" style="display:none; align-items:center; gap:8px;">
                <select class="rcg-grade-select" style="min-width: 120px;">
                  <option value="">select grade</option>
                  <option value="K">K</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>
                <span class="rcg-or-sep" style="margin: 0 8px;">-or-</span>
                <input type="text" class="rcg-other-input" placeholder="include level" style="width: 180px; max-width: 520px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">
              </div>
              <div class="rcg-generic-wrap" style="display:none;">
                <input type="text" class="rcg-other-input" placeholder="add condition details" style="width: 180px; max-width: 520px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">
              </div>`;
            const genInput = otherInline.querySelector('.rcg-generic-wrap .rcg-other-input');
            if (genInput) genInput.value = legacyVal;
          }
        }
        // helper to center the inline box under the dropdown
        const centerInline = () => {
          try {
            const container = sel.closest('.rcg-condition') || sel.closest('.cell');
            const selectRect = sel.getBoundingClientRect();
            const contRect = container ? container.getBoundingClientRect() : sel.closest('.goal-quad-grid').getBoundingClientRect();
            // Measure the visible element width (grade wrap or generic input)
            const gradeWrap = otherInline.querySelector('.rcg-grade-wrap');
            const genericInput = otherInline.querySelector('.rcg-generic-wrap .rcg-other-input') || otherInline.querySelector('.rcg-other-input');
            const measureEl = (gradeWrap && gradeWrap.style.display !== 'none') ? gradeWrap : genericInput;
            if (!measureEl) return;
            const mRect = measureEl.getBoundingClientRect();
            // Always center under the select
            const left = (selectRect.left - contRect.left) + (selectRect.width - mRect.width) / 2;
            otherInline.style.marginLeft = Math.max(0, Math.round(left)) + 'px';
          } catch (_) {}
        };
        // attach auto-grow to the input and recenter on resize
        attachAutoGrowWidth(otherInline.querySelector('.rcg-other-input'), centerInline);
        // initial center
        centerInline();
        return otherInline;
      };
      const toggleInline = () => {
        let container = sel.closest('.rcg-condition');
        if (!container) container = sel.closest('.cell')?.querySelector('.rcg-condition') || null;
        const gradeRow = container && container.querySelector('.rcg-condition-grade');
        const otherInline = ensureInline();
        const val = sel.value;
        if (gradeRow) gradeRow.style.display = 'none';
        const needsDetail = ['graphic-organizer','comprehension-questions','annotation-tool','highlighter-annotation','text-to-speech','story-map','text-visual-supports','visual-supports','read-aloud','small-group','grade-level','instructional-level','words-count'];
        // Dedicated local inline for words-count
        let localInline = sel.parentElement.querySelector('.rcg-condition-words-inline');
        if (!localInline) {
          localInline = document.createElement('div');
          localInline.className = 'rcg-condition-words-inline';
          localInline.style.display = 'none';
          localInline.style.marginLeft = '12px';
          localInline.style.marginTop = '6px';
          localInline.innerHTML = `<input type="text" class="rcg-words-input" placeholder="# of words in passage" style="width: 260px; max-width: 280px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">`;
          sel.parentElement.appendChild(localInline);
        }
        const selectedText = (sel.options[sel.selectedIndex]?.text || '').toLowerCase();
        const isWordsCount = (val === 'words-count') || selectedText.includes('___ words') || selectedText.includes('words');
        const isGradeLevel = (val === 'grade-level' || val === 'instructional-level');
        // Helper to center the inline row under the select
        const recenter = () => {
          try {
            if (!otherInline) return;
            const selectRect = sel.getBoundingClientRect();
            const containerRect = (sel.closest('.rcg-condition') || sel.closest('.cell') || sel.closest('.goal-quad-grid')).getBoundingClientRect();
            const gradeWrap = otherInline.querySelector('.rcg-grade-wrap');
            const gradeMode = gradeWrap && gradeWrap.style.display !== 'none';
            const measureEl = gradeMode ? gradeWrap : (otherInline.querySelector('.rcg-generic-wrap .rcg-other-input') || otherInline.querySelector('.rcg-other-input'));
            if (!measureEl) return;
            const w = measureEl.getBoundingClientRect().width;
            const left = gradeMode ? (selectRect.left - containerRect.left) : (selectRect.left - containerRect.left) + (selectRect.width - w) / 2;
            otherInline.style.marginLeft = Math.max(0, Math.round(left)) + 'px';
          } catch (_) {}
        };
        // Generic inline behavior
        if (otherInline) {
          // Render grade-level UI (dropdown + or + input)
          const gradeWrap = otherInline.querySelector('.rcg-grade-wrap');
          const genericWrap = otherInline.querySelector('.rcg-generic-wrap');
          if (isGradeLevel) {
            if (gradeWrap) gradeWrap.style.display = 'flex';
            if (genericWrap) genericWrap.style.display = 'none';
            otherInline.style.display = 'block';
            otherInline.classList.add('show');
            otherInline.style.marginTop = '8px';
            attachAutoGrowWidth(otherInline.querySelector('.rcg-grade-wrap .rcg-other-input'), recenter);
            recenter();
          } else {
            // Generic/other inline
            const input = otherInline.querySelector('.rcg-generic-wrap .rcg-other-input') || otherInline.querySelector('.rcg-other-input');
            if (input) {
              if (isWordsCount) input.placeholder = '# of words in passage';
              else input.placeholder = 'add condition details';
            }
            let shouldShowGeneric = (val === 'other' || needsDetail.includes(val) || selectedText.includes('___ words') || selectedText.includes('words')) && !isWordsCount && !isGradeLevel;
            if (gradeWrap) gradeWrap.style.display = 'none';
            if (genericWrap) genericWrap.style.display = shouldShowGeneric ? 'block' : 'none';
            otherInline.style.display = shouldShowGeneric ? 'block' : 'none';
            otherInline.classList.toggle('show', shouldShowGeneric);
            otherInline.style.marginTop = '8px';
            recenter();
          }
        }
        // Local inline behavior for words-count
        localInline.style.display = isWordsCount ? 'inline-block' : 'none';
      };
      // initial
      adjustWidth();
      toggleInline();
      sel.addEventListener('change', function() {
        toggleInline();
        adjustWidth();
      });
      // Recenter on window resize for grade layout accuracy
      window.addEventListener('resize', () => {
        try {
          const inline = sel.closest('.cell')?.querySelector('.rcg-condition-other-inline');
          if (!inline || inline.style.display === 'none') return;
          const evt = new Event('change');
          sel.dispatchEvent(evt);
        } catch (_) {}
      });
    });
    // Writing: grade-level prompt dropdown toggle
    try {
      const gradeChk = root.querySelector('.wc-cond-grade');
      const gradeSel = root.querySelector('.wc-grade-select');
      if (gradeChk && gradeSel && !gradeChk._wired) {
        gradeChk._wired = true;
        const leadSpan = root.querySelector('.wc-cond-grade-row > span:first-of-type');
        const toggle = () => {
          gradeSel.style.display = gradeChk.checked ? 'inline-block' : 'none';
          if (leadSpan) leadSpan.textContent = gradeChk.checked ? 'a(n) ' : 'a ';
        };
        gradeChk.addEventListener('change', toggle);
        toggle();
      }
      const condOther = root.querySelector('.wc-cond-other');
      const condOtherBox = root.querySelector('.wc-cond-other-box');
      if (condOther && condOtherBox && !condOther._wired) {
        condOther._wired = true;
        const toggle2 = () => { condOtherBox.style.display = condOther.checked ? 'inline-flex' : 'none'; };
        condOther.addEventListener('change', toggle2);
        toggle2();
      }
    } catch (_) {}
  }

  function wireBehaviorControls(root) {
    const selects = root.querySelectorAll('.rcg-behavior-type');
    selects.forEach(sel => {
      if (sel._wired) return; sel._wired = true;
      const adjustWidth = () => {
        const text = sel.options[sel.selectedIndex]?.text || '';
        const measurer = document.createElement('span');
        const cs = window.getComputedStyle(sel);
        Object.assign(measurer.style, { visibility: 'hidden', position: 'fixed', whiteSpace: 'pre', fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight, letterSpacing: cs.letterSpacing });
        measurer.textContent = text || 'select one';
        document.body.appendChild(measurer);
        const width = Math.ceil(measurer.getBoundingClientRect().width + 42);
        document.body.removeChild(measurer);
        sel.style.width = Math.max(140, width) + 'px';
      };
      const ensureOtherBelow = () => {
        const parent = sel.closest('.rcg-behavior');
        let other = parent && parent.querySelector('.rcg-behavior-other-inline');
        if (!other) {
          const row = sel.closest('.rcg-behavior-row');
          if (row) {
            other = document.createElement('div');
            other.className = 'rcg-behavior-other-inline';
            other.style.display = 'none';
            other.style.marginTop = '8px';
            other.innerHTML = `<input type=\"text\" class=\"rcg-behavior-input\" placeholder=\"add behavior\" style=\"width: 360px; max-width: 360px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;\">`;
            // insert below the row so it appears under
            row.parentNode.insertBefore(other, row.nextSibling);
          }
        }
        if (other) other.style.display = sel.value === 'other' ? 'block' : 'none';
      };
      adjustWidth();
      ensureOtherBelow();
      sel.addEventListener('change', function() {
        ensureOtherBelow();
        adjustWidth();
      });
    });
    // RC checklist: toggle Other describe box
    const checklistOther = root.querySelector('.rcg-scope-other');
    const otherBox = root.querySelector('.rcg-scope-other-box');
    if (checklistOther && !checklistOther._wired) {
      checklistOther._wired = true;
      // auto-grow width helper mirroring condition behavior
      const input = root.querySelector('.rcg-scope-other-input');
      if (input && !input._growWired) {
        input._growWired = true;
        const measurer = document.createElement('span');
        const cs = window.getComputedStyle(input);
        Object.assign(measurer.style, { visibility: 'hidden', position: 'fixed', whiteSpace: 'pre', fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight, letterSpacing: cs.letterSpacing });
        document.body.appendChild(measurer);
        const min = 180; const max = 820;
        const fit = () => {
          measurer.textContent = input.value || input.placeholder || '';
          const w = Math.min(max, Math.max(min, Math.ceil(measurer.getBoundingClientRect().width + 22)));
          input.style.width = w + 'px';
        };
        input.addEventListener('input', fit);
        fit();
      }
      const toggle = () => {
        if (!otherBox) return;
        otherBox.style.display = checklistOther.checked ? 'inline-flex' : 'none';
      };
      checklistOther.addEventListener('change', toggle);
      toggle();
    }
  }

  function wirePerformanceControls(root) {
    const selects = root.querySelectorAll('.rcg-performance-category');
    selects.forEach(sel => {
      if (sel._wired) return; sel._wired = true;
      sel.addEventListener('change', function() {
        // Place dynamic UI directly under the Category column
        const col = sel.closest('.pc-col') || root;
        let dyn = col.querySelector('.rcg-performance-dynamic');
        if (!dyn) {
          dyn = document.createElement('div');
          dyn.className = 'rcg-performance-dynamic rcg-pc-dynamic';
          col.appendChild(dyn);
        }
        // Align left edge with the dropdown (indent by label width + gap)
        const labelEl = col.querySelector('.pc-row label');
        const gapPx = 12; // matches .cell-top gap
        const labelWidth = labelEl ? Math.ceil(labelEl.getBoundingClientRect().width) : 0;
        dyn.style.marginLeft = (labelWidth + gapPx) + 'px';
        dyn.style.marginTop = '6px'; // a touch of whitespace below the row
        const v = sel.value;
        if (v === 'accuracy') {
          dyn.innerHTML = `<div class=\"rcg-inline-inputs\"><input type=\"text\" class=\"pc-accuracy-input\" placeholder=\"80, 90, etc\" style=\"max-width:160px;\" /><span class=\"rcg-prompt\">%</span></div>`;
        } else if (v === 'percentile') {
          dyn.innerHTML = `<div class=\"rcg-inline-inputs\"><input type=\"text\" class=\"pc-percentile-input\" placeholder=\"80th, 90th, etc\" style=\"max-width:180px;\" /><span class=\"rcg-italic\">Percentile</span></div>`;
        } else if (v === 'num-correct') {
          dyn.innerHTML = `<div class=\"rcg-inline-inputs\"><input type=\"text\" class=\"pc-numcorrect-input\" placeholder=\"# correct\" style=\"max-width:140px;\" /><span>/</span><input type=\"text\" class=\"pc-outof-input\" placeholder=\"out of # (optional)\" style=\"max-width:160px;\" /></div>`;
        } else if (v === 'num-errors') {
          dyn.innerHTML = `<div class=\"rcg-inline-inputs\"><span class=\"rcg-italic\">with no more than</span><input type=\"text\" class=\"pc-numerrors-input\" placeholder=\"1, 2, 3, etc\" style=\"max-width:120px;\" /><span class=\"rcg-italic\">errors</span></div>`;
        } else if (v === 'rubric') {
          dyn.innerHTML = `<div class=\"rcg-inline-inputs\"><input type=\"text\" class=\"pc-rubric-left\" placeholder=\"#\" style=\"max-width:90px;\" /><span>/</span><input type=\"text\" class=\"pc-rubric-right\" placeholder=\"#\" style=\"max-width:90px;\" /><span>on the</span><input type=\"text\" class=\"pc-rubric-name\" placeholder=\"name of rubric/rating scale\" style=\"max-width:260px;\" /></div>`;
        } else if (v === 'other') {
          dyn.innerHTML = `<div class=\"rcg-inline-inputs nowrap\"><span class=\"rcg-italic\">Describe:</span><textarea class=\"pc-other-input\" placeholder=\"\"></textarea></div>`;
        } else {
          dyn.innerHTML = '';
        }
      });
    });
  }

  function wireMasteryPreposition(root) {
    const selects = root.querySelectorAll('.ml-preposition-select');
    selects.forEach(sel => {
      if (sel._wired) return; sel._wired = true;
      sel.addEventListener('change', function() {
        const col = sel.closest('.ml-col');
        const other = col && col.querySelector('.ml-preposition-other');
        if (other) other.style.display = sel.value === 'other' ? 'flex' : 'none';
      });
    });
  }

  function wireCountRatioControls(root) {
    const selects = root.querySelectorAll('.ml-count-select');
    selects.forEach(sel => {
      if (sel._wired) return; sel._wired = true;
      sel.addEventListener('change', function() {
        const col = sel.closest('.ml-col');
        const slot = col && col.querySelector('.ml-slot');
        if (!slot) return;
        if (sel.value === 'count') {
          slot.innerHTML = `<div class="ml-align">
            <div class="ml-inline" style="margin-top: 10px;">
              <input type="text" class="ml-count-input" placeholder="1,2,3, etc" style="max-width: 70px; width: 70px; padding: 6px 8px; border: 1px solid #ccc; border-radius: 4px; text-align: center;" />
            </div>
            <label style="margin-top: 6px; display: flex; align-items: center; gap: 6px;">
              <input type="checkbox" class="ml-count-consecutive" />
              <span>Consecutive?</span>
            </label>
          </div>`;
          const wrap = slot.querySelector('.ml-align');
          const left = sel.getBoundingClientRect().left - col.getBoundingClientRect().left;
          if (wrap) wrap.style.marginLeft = left + 'px';
        } else if (sel.value === 'ratio') {
          slot.innerHTML = `<div class="ml-align"><div class="ml-inline" style="margin-top: 10px;">
              <input type="text" class="ml-ratio-left" placeholder="1,2,3, etc" style="max-width: 60px; width: 60px; padding: 6px 8px; border: 1px solid #ccc; border-radius: 4px; text-align: center;" />
              <span>of</span>
              <input type="text" class="ml-ratio-right" placeholder="1,2,3, etc" style="max-width: 60px; width: 60px; padding: 6px 8px; border: 1px solid #ccc; border-radius: 4px; text-align: center;" />
            </div>
            <label style="margin-top: 6px; display: flex; align-items: center; gap: 6px; justify-content:center;">
              <input type="checkbox" class="ml-ratio-consecutive" />
              <span>Consecutive?</span>
            </label>
          </div>`;
          const wrap = slot.querySelector('.ml-align');
          const left = sel.getBoundingClientRect().left - col.getBoundingClientRect().left;
          if (wrap) wrap.style.marginLeft = left + 'px';
        } else {
          slot.innerHTML = '';
        }
      });
    });
  }

  function wireFrequencyControls(root) {
    const selects = root.querySelectorAll('.ml-frequency-select');
    selects.forEach(sel => {
      if (sel._wired) return; sel._wired = true;
      sel.addEventListener('change', function() {
        const col = sel.closest('.ml-col');
        const other = col && col.querySelector('.ml-frequency-other');
        if (other) other.style.display = sel.value === 'other' ? 'flex' : 'none';
      });
    });
  }

  function wireUnitsControls(root) {
    const selects = root.querySelectorAll('.ml-units-select');
    selects.forEach(sel => {
      if (sel._wired) return; sel._wired = true;
      sel.addEventListener('change', function() {
        const col = sel.closest('.ml-col');
        const other = col && col.querySelector('.ml-units-other');
        if (other) other.style.display = sel.value === 'other' ? 'flex' : 'none';
      });
    });
  }

  // Writing: show/hide Length 'other' describe
  function wireWritingLengthOther(root) {
    try {
      const unitSel = root.querySelector('.wc-length-unit');
      const otherRow = root.querySelector('.wc-length-other');
      if (unitSel && otherRow && !unitSel._wcUnitWired) {
        unitSel._wcUnitWired = true;
        const toggle = () => { otherRow.style.display = unitSel.value === 'other' ? 'block' : 'none'; };
        unitSel.addEventListener('change', toggle);
        toggle();
      }
    } catch (_) {}
  }

  function wireFluencyCategory(root) {
    const cats = root.querySelector('.pc-fluency-cats');
    if (!cats || cats._wired) return; cats._wired = true;
    const other = cats.querySelector('.pcf-other');
    const otherBox = cats.querySelector('.pcf-other-box');
    const acc = cats.querySelector('.pcf-acc');
    const accBox = cats.querySelector('.pcf-acc-box');
    const rate = cats.querySelector('.pcf-rate');
    const rateBox = cats.querySelector('.pcf-rate-box');
    const prosody = cats.querySelector('.pcf-prosody');
    const prosodyBox = cats.querySelector('.pcf-prosody-box');
    const toggle = () => {
      if (otherBox) otherBox.style.display = other && other.checked ? 'inline-flex' : 'none';
      if (accBox) accBox.style.display = acc && acc.checked ? 'inline-flex' : 'none';
      if (rateBox) rateBox.style.display = rate && rate.checked ? 'inline-flex' : 'none';
      if (prosodyBox) prosodyBox.style.display = prosody && prosody.checked ? 'inline-flex' : 'none';
    };
    if (other) other.addEventListener('change', toggle);
    if (acc) acc.addEventListener('change', toggle);
    if (rate) rate.addEventListener('change', toggle);
    if (prosody) prosody.addEventListener('change', toggle);
    toggle();
  }

  // Ensure the hidden "other" rows exist for preposition/frequency/units
  function ensureMasteryOtherRows(root) {
    try {
      const preSlot = root.querySelector('.rcg-mastery-grid .ml-col:nth-child(1) .ml-slot');
      if (preSlot && !preSlot.querySelector('.ml-preposition-other')) {
        const wrap = document.createElement('div');
        wrap.className = 'ml-preposition-other';
        wrap.style.display = 'none';
        wrap.style.gap = '8px';
        wrap.innerHTML = `<span class="rcg-italic">Describe:</span><input type="text" class="ml-preposition-other-input" style="max-width: 160px; width: 160px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />`;
        preSlot.appendChild(wrap);
      }

      const freqSlot = root.querySelector('.rcg-mastery-grid .ml-col:nth-child(3) .ml-slot');
      if (freqSlot && !freqSlot.querySelector('.ml-frequency-other')) {
        const wrap = document.createElement('div');
        wrap.className = 'ml-frequency-other';
        wrap.style.display = 'none';
        wrap.style.gap = '8px';
        wrap.innerHTML = `<span class="rcg-italic">Describe:</span><input type="text" class="ml-frequency-other-input" style="max-width: 160px; width: 160px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />`;
        freqSlot.appendChild(wrap);
      }

      const unitsSlot = root.querySelector('.rcg-mastery-grid .ml-col:nth-child(4) .ml-slot');
      if (unitsSlot && !unitsSlot.querySelector('.ml-units-other')) {
        const wrap = document.createElement('div');
        wrap.className = 'ml-units-other';
        wrap.style.display = 'none';
        wrap.style.gap = '8px';
        wrap.innerHTML = `<span class="rcg-italic">Describe:</span><input type="text" class="ml-units-other-input" style="max-width: 160px; width: 160px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />`;
        unitsSlot.appendChild(wrap);
      }
    } catch (_) {}
  }

  function renderMath(typeContent, mode) {
    const editorId = `gs-goal-text-${++gsEditorCounter}`;
    typeContent.innerHTML = `
      <div class="goal-quad-grid" style="margin-top: 28px; grid-template-columns: 1.35fr 0.65fr;">
        <div class="cell">
          <div class="cell-top">
            <label>1. Condition</label>
          </div>
          <div class="rcg-condition">
            <div class="mc-cond-grid" style="display:grid; grid-template-columns: 1fr 0.9fr; gap: 8px 24px; align-items:start;">
              <div class="mc-cond-left" style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; align-items:center; justify-content:flex-start; gap:10px; margin-left: 0 !important; padding-left: 8px; width: 100%; margin-top: 0;">
                  <label class="rcg-prompt">Given...</label>
                  <span class="rcg-italic">Select all that apply:</span>
                </div>
                <div class="wc-cond-list" style="display:grid !important; grid-template-columns: 1fr 1fr !important; gap: 10px 24px; margin-left: 0; margin-top: 0; max-width: 860px;">
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column: 1 / 2 !important;"><input type="checkbox" class="wc-cond" value="teacher-model" /> <span>a teacher-modeled example</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="manipulatives" /> <span>manipulatives</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="graphic-organizer" /> <span>a graphic organizer</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="worked-examples" /> <span>worked examples</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="calculator" /> <span>a calculator</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="wc-cond" value="math-probe" /> <span>a classroom-based math probe</span></label>
                  <label class="wc-cond-grade-row" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column:1 / -1; flex-wrap: nowrap;">
                    <input type="checkbox" class="wc-cond wc-cond-grade" value="grade-level-math-probe" />
                    <span>a </span>
                    <select class="wc-grade-select" style="min-width: 120px; display:none; margin-left: 2px;">
                      <option value="">select grade</option>
                      <option value="K">K</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                      <option value="5th">5th</option>
                      <option value="6th">6th</option>
                      <option value="7th">7th</option>
                      <option value="8th">8th</option>
                      <option value="9th">9th</option>
                      <option value="10th">10th</option>
                      <option value="11th">11th</option>
                      <option value="12th">12th</option>
                    </select>
                    <span> grade level math probe</span>
                  </label>
                  <label class="wc-cond-other-row" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400; grid-column:1 / -1;">
                    <input type="checkbox" class="wc-cond wc-cond-other" value="other" />
                    <span>Other</span>
                    <span class="wc-cond-other-box" style="display:none; align-items:center; gap:8px; margin-left: 10px; flex-wrap:wrap;">
                      <input type="text" class="wc-cond-other-input" placeholder="describe" style="width: 360px; min-width: 180px; max-width: 820px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                    </span>
                  </label>
                </div>
              </div>
              <div class="mc-cond-right" style="display:flex; flex-direction:column; gap:8px;">
                <label class="rcg-prompt" style="margin-top: 0;">Optional: including...</label>
                <div class="mc-components-list" style="display:flex; flex-direction:column; gap:8px; margin-top: 6px;">
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="mc-comp" value="single-step" /> <span>single-step problems</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="mc-comp" value="multi-step" /> <span>multi-step problems</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="mc-comp" value="word-problems" /> <span>word problems</span></label>
                  <label style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;"><input type="checkbox" class="mc-comp" value="fractions-decimals" /> <span>fractions and decimals</span></label>
                  <label class="mc-comp-other-row" style="display:flex; align-items:center; gap:8px; font-style:italic; font-weight:400;">
                    <input type="checkbox" class="mc-comp mc-components-other" value="other"/>
                    <span>Other</span>
                    <span class="mc-components-other-box" style="display:none; align-items:center; gap:8px; margin-left: 10px; flex-wrap:wrap;">
                      <input type="text" class="mc-components-other-input" placeholder="describe" style="width: 360px; min-width: 180px; max-width: 820px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-top">
            <label>2. Behavior</label>
          </div>
          <div class="rcg-behavior">
            <div class="rcg-behavior-row">
              <label>[Student] will...</label>
              <select class="rcg-behavior-type">
                <option value="">select one</option>
                <option value="solve">solve</option>
                <option value="compute">compute</option>
                <option value="calculate">calculate</option>
                <option value="add">add</option>
                <option value="identify">identify</option>
                <option value="achieve">achieve</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div class="cell span-2">
          <label>3. Performance Criteria (with...)</label>
          <div class="rcg-performance">
            <div class="rcg-performance-grid">
              <div class="pc-col">
                <div class="pc-row"><label>Category</label>
                  <select class="rcg-performance-category" style="max-width: 260px;">
                    <option value="">select one</option>
                    <option value="accuracy">Accuracy (%)</option>
                    <option value="percentile">Percentile</option>
                    <option value="num-correct"># Correct</option>
                    <option value="num-errors"># of Errors Allowed</option>
                    <option value="rubric">Rubric/Rating Scale</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="pc-col">
                <div class="pc-row"><label>Mastery Level</label></div>
                <div class="rcg-performance-mastery">
                  <div class="rcg-mastery-grid" style="text-align:center;">
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Preposition</label>
                        <select class="ml-preposition-select" style="min-width: 180px; text-align: left;">
                          <option value="">Select One</option>
                          <option value="in">in</option>
                          <option value="across">across</option>
                          <option value="over">over</option>
                          <option value="during">during</option>
                <option value="other">other</option>
              </select>
            </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt"># or Ratio</label>
                        <select class="ml-count-select" style="width: 80px; min-width: 80px;">
                          <option value="">Select One</option>
                          <option value="count">#</option>
                          <option value="ratio">ratio</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Frequency</label>
                        <select class="ml-frequency-select" style="min-width: 140px;">
                          <option value="">Select One</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="two-per-month">2x/month</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                    <div class="ml-col">
                      <div class="ml-top">
                        <label class="rcg-prompt">Units</label>
                        <select class="ml-units-select" style="min-width: 160px;">
                          <option value="">Select One</option>
                          <option value="trials">trials</option>
                          <option value="opportunities">opportunities</option>
                          <option value="attempts">attempts</option>
                          <option value="sessions">sessions</option>
                          <option value="probes">probes</option>
                          <option value="tasks">tasks</option>
                          <option value="assessments">assessments</option>
                          <option value="observations">observations</option>
                          <option value="measures">measures</option>
                          <option value="measurements">measurements</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                      <div class="ml-slot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="gs-goal-text gs-inline">
            <label class="goal-subheading gs-goal-text-title">Measurable Annual Goal</label>
            <div class="rte-box-outer gs-rte-inline"><textarea id="${editorId}" class="gs-goal-textarea"></textarea></div>
            <div class="gs-generate-row"><button type="button" class="generate-report-btn gs-generate-goal-btn">Generate Goal</button></div>
          </div>
        </div>
      </div>`;

    wireConditionControls(typeContent);
    wireBehaviorControls(typeContent);
    wirePerformanceControls(typeContent);
    wireMasteryPreposition(typeContent);
    wireCountRatioControls(typeContent);
    wireFrequencyControls(typeContent);
    wireUnitsControls(typeContent);
    ensureMasteryOtherRows(typeContent);
    wireMagComposer(typeContent);
    // Math 'including' other toggle
    (function(){
      const other = typeContent.querySelector('.mc-components .mc-components-other');
      const box = typeContent.querySelector('.mc-components-other-box');
      if (other && box && !other._wired) {
        other._wired = true;
        const t = () => { box.style.display = other.checked ? 'inline-flex' : 'none'; };
        other.addEventListener('change', t);
        t();
      }
    })();
  }
});


