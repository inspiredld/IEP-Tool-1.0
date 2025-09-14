// Goals main entry point (skeleton)

document.addEventListener('DOMContentLoaded', () => {
  // Ensure the Goals section backgrounds match the requested design
  function applyGoalsBackgroundStyles(scope) {
    try {
      const root = scope || document;
      const goalsRegion = root.getElementById ? root.getElementById('goals-academic') : document.getElementById('goals-academic');
      if (goalsRegion) {
        goalsRegion.style.background = '#ffffff'; // outer area stays white
      }
      const innerContainers = (goalsRegion || document).querySelectorAll('.goals-card-inner.rcg-card');
      innerContainers.forEach(el => { el.style.background = '#f3f5f7'; }); // goal shell light grey
      const actions = (goalsRegion || document).querySelectorAll('.rcg-actions');
      actions.forEach(a => { a.style.marginLeft = '18px'; });
    } catch (_) {}
  }

  applyGoalsBackgroundStyles();
  // Initialize TinyMCE for each Goals output editor (basic RTEs)
  const editorConfigs = [
    { id: 'academic-goals-editor', ref: 'academicGoalsEditorInstance' },
    { id: 'functional-goals-editor', ref: 'functionalGoalsEditorInstance' },
    { id: 'social-goals-editor', ref: 'socialGoalsEditorInstance' },
    { id: 'behavioral-goals-editor', ref: 'behavioralGoalsEditorInstance' },
  ];
  if (window.tinymce) {
    editorConfigs.forEach(cfg => {
      if (document.getElementById(cfg.id)) {
        tinymce.init({
          selector: `#${cfg.id}`,
          license_key: 'gpl',
          menubar: 'file edit view insert format tools table help',
          height: 300,
          plugins: 'lists link table code preview searchreplace visualblocks visualchars wordcount autoresize insertdatetime charmap pagebreak nonbreaking anchor advlist quickbars',
          toolbar: 'undo redo | styles | bold italic underline strikethrough | forecolor backcolor | bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | link | table | removeformat | searchreplace | preview code',
          toolbar_mode: 'sliding',
          table_default_attributes: { border: '1' },
          table_default_styles: { 'border-collapse': 'collapse' },
          base_url: 'JS/libs/tinymce',
          content_style: 'body { font-family: Arial, sans-serif; font-size: 10pt; padding: 1.25rem 1.5rem; box-sizing: border-box; } h1 { font-size:14pt; font-weight:bold; text-decoration:underline; } h2 { font-size:12pt; font-weight:bold; } h3 { font-size:10pt; font-weight:bold; } p { margin: 0 0 0.5rem 0; } table { margin:1rem 0 0.5rem 0; }',
          setup(editor) {
            window[cfg.ref] = editor;
          }
        });
      }
    });
  }

  // Wire up Generate Report button (placeholder combines subsections later)
  const generatorMap = [
    { btn: 'generate-academic-goals-btn', ref: 'academicGoalsEditorInstance', fallback: 'academic-goals-editor', title: 'Academic Goals' },
    { btn: 'generate-functional-goals-btn', ref: 'functionalGoalsEditorInstance', fallback: 'functional-goals-editor', title: 'Functional Goals' },
    { btn: 'generate-social-goals-btn', ref: 'socialGoalsEditorInstance', fallback: 'social-goals-editor', title: 'Social Skills Goals' },
    { btn: 'generate-behavioral-goals-btn', ref: 'behavioralGoalsEditorInstance', fallback: 'behavioral-goals-editor', title: 'Behavioral Goals' },
  ];
  generatorMap.forEach(({ btn, ref, fallback, title }) => {
    const el = document.getElementById(btn);
    if (!el) return;
    el.addEventListener('click', () => {
      const placeholder = `<h1>${title}</h1><p>[${title} content will appear here]</p>`;
      const inst = window[ref];
      if (inst) inst.setContent(placeholder);
      else {
        const out = document.getElementById(fallback);
        if (out) out.value = placeholder;
      }
    });
  });

  // Academic Goals: checklist toggles to show/hide cards
  const academicContainer = document.getElementById('goals-academic');
  if (academicContainer) {
    const toggles = academicContainer.querySelectorAll('.goals-academic-toggle');
    toggles.forEach(cb => {
      cb.addEventListener('change', function() {
        const target = academicContainer.querySelector('#' + cb.getAttribute('data-target'));
        if (target) target.style.display = cb.checked ? 'block' : 'none';
      });
    });

    // Reading Comprehension Goals: dynamic add button and numbering
    const rcgList = document.getElementById('rcg-list');
    const addRcgBtn = document.getElementById('add-rcg-btn');
    function renumberRcgItems() {
      if (!rcgList) return;
      const items = rcgList.querySelectorAll('.rcg-item');
      items.forEach((item, idx) => {
        item.setAttribute('data-index', String(idx + 1));
        const title = item.querySelector('.rcg-item-title');
        if (title) {
          // If title contains text node 'Goal' keep select intact
          title.childNodes.forEach((n) => {
            if (n.nodeType === Node.TEXT_NODE) { n.nodeValue = `Goal ${idx + 1}`; }
          });
        }
        // Show or hide remove button depending on number of cards
        const removeBtn = item.querySelector('.remove-goal-btn');
        const showRemove = items.length > 1;
        if (removeBtn) {
          removeBtn.style.display = showRemove ? 'inline-flex' : 'none';
        }
      });
    }
    function createRcgItem() {
      const item = document.createElement('div');
      item.className = 'rcg-item';
      item.innerHTML = `
        <div class="goals-card-inner rcg-card" style="background:#f3f5f7;">
          <div class="goal-title-row"><h5 class="rcg-item-title">Goal</h5><span class="goal-title-sep">-</span>
            <select class="goal-type-select" style="min-width: 200px;">
              <option value="">Select Goal Type</option>
              <option value="reading-comprehension" selected>Reading Comprehension</option>
              <option value="reading-fluency">Reading Fluency</option>
              <option value="writing">Writing</option>
              <option value="math">Math</option>
              <option value="functional">Functional Skills</option>
              <option value="social">Social Skills</option>
              <option value="behavioral">Behavioral</option>
              <option value="other">Other</option>
            </select>
            <button type="button" class="remove-goal-btn" title="Remove Goal">-Goal</button>
          </div>
          <div class="goal-quad-grid">
            <div class="cell">
              <div class="cell-top">
                <label>1. Condition (Given)</label>
                <select class="rcg-condition-type" style="max-width: 280px;">
                  <option value="">select one</option>
                  <option value="grade-level">a grade-level passage</option>
                  <option value="instructional-level">a passage at instructional level</option>
                  <option value="read-aloud">a teacher read-aloud</option>
                  <option value="visual-supports">a text with visual supports</option>
                  <option value="graphic-organizer">a graphic organizer</option>
                  <option value="comprehension-questions">comprehension questions</option>
                  <option value="highlighter-annotation">a highlighter or annotation tool</option>
                  <option value="small-group">during small-group instruction</option>
                  <option value="text-to-speech">using text-to-speech software</option>
                  <option value="story-map">using a story map</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="rcg-condition">
                <div class="rcg-condition-row">
                  <label>Given...</label>
                  <select class="rcg-condition-type" style="max-width: 280px;">
                    <option value="">select one</option>
                    <option value="grade-level">a grade-level passage</option>
                    <option value="instructional-level">a passage at instructional level</option>
                    <option value="read-aloud">a teacher read-aloud</option>
                    <option value="visual-supports">a text with visual supports</option>
                    <option value="graphic-organizer">a graphic organizer</option>
                    <option value="comprehension-questions">comprehension questions</option>
                    <option value="highlighter-annotation">a highlighter or annotation tool</option>
                    <option value="small-group">during small-group instruction</option>
                    <option value="text-to-speech">using text-to-speech software</option>
                    <option value="story-map">using a story map</option>
                    <option value="other">Other</option>
                  </select>
                  <div class="rcg-condition-other-inline" style="display:none;">
                    <input type="text" class="rcg-other-input" placeholder="add condition" style="width: 100%; max-width: 480px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">
                  </div>
                </div>
                <div class="rcg-condition-grade" style="display: none; margin-top: 20px; margin-left: 28px;">
                  <label style="font-weight: bold; font-style: italic; margin-right: 8px;">Indicate Grade (optional):</label>
                  <select class="rcg-grade" style="max-width: 180px;">
                    <option value="">select one</option>
                    <option value="K">K</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                  </select>
                </div>
                <div class="rcg-condition-other" style="display: none; margin-top: 20px; margin-left: 28px;"></div>
              </div>
            </div>
            <div class="cell">
              <div class="cell-top">
                <label>2. Behavior</label>
              </div>
              <div class="rcg-behavior">
                <div class="rcg-behavior-row">
                  <label>[Student] will...</label>
                  <select class="rcg-behavior-type" style="max-width: 320px;">
                    <option value="">select one</option>
                    <option value="main-idea">identify the main idea and supporting details</option>
                    <option value="literal">answer literal comprehension questions</option>
                    <option value="inferential">answer inferential comprehension questions</option>
                    <option value="summarize">summarize the passage</option>
                    <option value="sequence">sequence events in the passage</option>
                    <option value="predict">make a prediction based on text evidence</option>
                    <option value="conclusions">draw conclusions from text</option>
                    <option value="context-clues">determine the meaning of unfamiliar words using context clues</option>
                    <option value="compare-contrast">compare and contrast key ideas in a passage</option>
                    <option value="describe-elements">describe characters, setting, and plot elements</option>
                    <option value="retell">retell the story in correct sequence</option>
                    <option value="other">Other</option>
                  </select>
                  <div class="rcg-behavior-other-inline" style="display:none;">
                    <input type="text" class="rcg-behavior-input" placeholder="behavior" style="width: 100%; max-width: 480px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">
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
                    </select></div>
                    <div class="rcg-performance-dynamic rcg-pc-dynamic"></div>
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
                          <div class="ml-slot">
                            <div class="ml-preposition-other">
                              <span class="rcg-italic">Describe:</span>
                              <input type="text" class="ml-preposition-other-input" style="max-width: 160px; width: 160px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                            </div>
                          </div>
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
                              <option value="biweekly">Bi-Weekly</option>
                              <option value="twice-month">2x/Month</option>
                              <option value="monthly">Monthly</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div class="ml-slot">
                            <div class="ml-frequency-other">
                              <span class="rcg-italic">Describe:</span>
                              <input type="text" class="ml-frequency-other-input" style="max-width: 160px; width: 160px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                            </div>
                          </div>
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
                              <option value="other">other</option>
                            </select>
                          </div>
                          <div class="ml-slot">
                            <div class="ml-units-other">
                              <span class="rcg-italic">Describe:</span>
                              <input type="text" class="ml-units-other-input" style="max-width: 160px; width: 160px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cell span-2">
              <label>Measurable Annual Goal</label>
              <div class="rcg-empty">
                <div class="rte-box-outer"><textarea class="goal-textarea" placeholder=""></textarea></div>
                <div class="rcg-actions"><button type="button" class="generate-report-btn generate-goal-btn">Generate Goal</button></div>
                </div>
            </div>
          </div>
        </div>`;
      return item;
    }

    function createGoalShellItem() {
      const item = document.createElement('div');
      item.className = 'rcg-item';
      item.innerHTML = `
        <div class="goals-card-inner rcg-card" style="background:#f3f5f7;">
          <div class="goal-title-row"><h5 class="rcg-item-title">Goal</h5><span class="goal-title-sep">-</span>
            <select class="goal-type-select" style="min-width: 200px;">
              <option value="">Select Goal Type</option>
              <option value="reading-comprehension">Reading Comprehension</option>
              <option value="reading-fluency">Reading Fluency</option>
              <option value="writing">Writing</option>
              <option value="math">Math</option>
              <option value="functional">Functional Skills</option>
              <option value="social">Social Skills</option>
              <option value="behavioral">Behavioral</option>
              <option value="other">Other</option>
            </select>
            <button type="button" class="remove-goal-btn" title="Remove Goal">-Goal</button>
          </div>
          <div class="goal-type-content"></div>
        </div>`;
      return item;
    }

    function wireGoalType() {
      const list = document.getElementById('rcg-list');
      if (!list || list._goalTypeWired) return; list._goalTypeWired = true;
      list.addEventListener('change', (ev) => {
        const sel = ev.target && ev.target.closest('.goal-type-select');
        if (!sel) return;
        const item = sel.closest('.rcg-item');
        if (!item) return;
        const type = sel.value;
        if (type === 'reading-comprehension' || type === 'reading-fluency') {
          const rcg = createRcgItem();
          item.replaceWith(rcg);
          renumberRcgItems();
          applyGoalsBackgroundStyles();
          wireConditionControls(rcg);
          wireBehaviorControls(rcg);
          wirePerformanceControls(rcg);
          wireMasteryPreposition(rcg);
          wireCountRatioControls(rcg);
          wireFrequencyControls(rcg);
          wireUnitsControls(rcg);
          wireCenterPlaceholder(rcg);
          // Ensure measurable goal output updates as mastery inputs change
          setTimeout(() => {
            const output = rcg.querySelector('.goal-textarea');
            if (!output) return;
            const rcgRoot = rcg;
            const events = ['input','change'];
            const compose = () => {
              const getSelectedText = (selectEl) => {
                if (!selectEl) return '';
                const opt = selectEl.options[selectEl.selectedIndex];
                return (opt && opt.text) ? opt.text.trim() : '';
              };
              const buildCondition = () => {
                const sel = rcgRoot.querySelector('.rcg-condition-type');
                if (!sel) return '___';
                const val = sel.value;
                const label = getSelectedText(sel) || '___';
                const input = rcgRoot.querySelector('.rcg-condition-other-inline .rcg-other-input');
                const detail = input ? input.value.trim() : '';
                if (val === 'other') return detail || '___';
                return detail ? `${label} (${detail})` : label;
              };
              const buildBehavior = () => getSelectedText(rcgRoot.querySelector('.rcg-behavior-type')) || '___';
              const buildCategory = () => {
                const sel = rcgRoot.querySelector('.rcg-performance-category');
                const v = sel ? sel.value : '';
                if (v === 'accuracy') return { amount: (rcgRoot.querySelector('.pc-accuracy-input')?.value?.trim() || '___'), spec: '% accuracy' };
                if (v === 'percentile') {
                  const val = rcgRoot.querySelector('.pc-percentile-input')?.value?.trim();
                  return { custom: `at the ${val || '___'} percentile` };
                }
                if (v === 'num-correct') {
                  const left = rcgRoot.querySelector('.pc-numcorrect-input')?.value?.trim();
                  const outof = rcgRoot.querySelector('.pc-outof-input')?.value?.trim();
                  if (left && outof) return { custom: `with ${left} out of ${outof} correct` };
                  return { amount: left || '___', spec: 'correct' };
                }
                if (v === 'num-errors') {
                  const val = rcgRoot.querySelector('.pc-numerrors-input')?.value?.trim();
                  return { custom: `with no more than ${val || '___'} errors` };
                }
                if (v === 'rubric') {
                  const l = rcgRoot.querySelector('.pc-rubric-left')?.value?.trim();
                  const r = rcgRoot.querySelector('.pc-rubric-right')?.value?.trim();
                  const name = rcgRoot.querySelector('.pc-rubric-name')?.value?.trim();
                  return { amount: `${l || '_'} / ${r || '_'}`, spec: name ? `on the ${name}` : 'on the rubric' };
                }
                if (v === 'other') {
                  const txt = rcgRoot.querySelector('.pc-other-input')?.value?.trim();
                  return { amount: txt || '___', spec: '' };
                }
                return {};
              };
              const buildMastery = () => {
                const countSel = rcgRoot.querySelector('.ml-count-select');
                const mode = countSel ? countSel.value : '';
                if (mode === 'count') {
                  const n = rcgRoot.querySelector('.ml-count-input')?.value?.trim();
                  const cons = rcgRoot.querySelector('.ml-count-consecutive')?.checked;
                  return `${n || '___'}${cons ? ' consecutive' : ''}`.trim();
                }
                if (mode === 'ratio') {
                  const l = rcgRoot.querySelector('.ml-ratio-left')?.value?.trim();
                  const r = rcgRoot.querySelector('.ml-ratio-right')?.value?.trim();
                  const cons = rcgRoot.querySelector('.ml-ratio-consecutive')?.checked;
                  return `${l || '_'} of ${r || '_'}${cons ? ' consecutive' : ''}`.trim();
                }
                return '';
              };
              const cat = buildCategory();
              const mastery = buildMastery();
              const withPhrase = cat.custom ? cat.custom : ((cat.amount || cat.spec) ? `with ${[cat.amount, cat.spec].filter(Boolean).join(' ')}` : '');
              // Frequency/Units special casing for twice per month
              const freqSel = rcgRoot.querySelector('.ml-frequency-select');
              const freqVal = freqSel ? freqSel.value : '';
              const unitsSel = rcgRoot.querySelector('.ml-units-select');
              const unitsText = unitsSel ? (unitsSel.options[unitsSel.selectedIndex]?.text || '').toLowerCase() : '';
              if (freqVal === 'twice-month' || /2x\s*\/\s*month/i.test((freqSel?.options[freqSel.selectedIndex]?.text || ''))) {
                // ensure mastery ends with "units conducted twice per month"
                const base = mastery.replace(new RegExp(`\\b${unitsText}\\b`, 'i'), '').trim();
                const unitsPart = unitsText ? `${unitsText} ` : '';
                mastery = `${base} ${unitsPart}conducted twice per month`.trim();
              }
              const gsTopName = document.getElementById('gs-student-name')?.value?.trim();
              const plaaName = document.getElementById('firstName')?.value?.trim();
              const name = gsTopName || plaaName || '[Student]';
              let sentence = `Given ${buildCondition()}, ${name} will ${buildBehavior()} ${withPhrase}`.trim();
              if (mastery) sentence += ` ${mastery}`;
              sentence = sentence.replace(/\s+,/g, ',').replace(/\s{2,}/g, ' ').trim();
              if (!sentence.endsWith('.')) sentence += '.';
              output.value = sentence;
            };
            events.forEach(evt => rcgRoot.addEventListener(evt, compose));
            compose();
          }, 0);
          // If reading-fluency, swap the condition options on both selects
          if (type === 'reading-fluency') {
            const opts = `
              <option value="">select one</option>
              <option value="grade-level">a grade-level passage</option>
              <option value="instructional-level">a passage at instructional level</option>
              <option value="words-count">a passage of ___ words</option>
              <option value="content-area">a passage from content-area text</option>
              <option value="controlled-decodable">a passage with controlled/decodable text</option>
              <option value="repeated-reading">a repeated reading of a passage</option>
              <option value="teacher-modeled">a teacher-modeled reading</option>
              <option value="other">Other</option>`;
            rcg.querySelectorAll('.rcg-condition-type').forEach(s => { s.innerHTML = opts; });
          }
        } else {
          const content = item.querySelector('.goal-type-content');
          if (content) content.innerHTML = `<div style="font-style: italic; color:#666; margin-top:8px;">This goal type will be set up next.</div>`;
        }
      });
      // Remove button delegation
      list.addEventListener('click', (ev) => {
        const btn = ev.target && ev.target.closest('.remove-goal-btn');
        if (!btn) return;
        const li = btn.closest('.rcg-item');
        if (!li) return;
        // Ensure at least one goal remains
        const items = rcgList.querySelectorAll('.rcg-item');
        if (items.length > 1) {
        li.remove();
        renumberRcgItems();
        }
      });
    }
    if (addRcgBtn && rcgList) {
      addRcgBtn.addEventListener('click', () => {
        const newItem = createGoalShellItem();
        rcgList.appendChild(newItem);
        renumberRcgItems();
        wireGoalType();
        applyGoalsBackgroundStyles();
      });
      // Initial numbering in case markup changes
      renumberRcgItems();
    }
    // Ensure inline condition box toggles for dynamically rendered selects
    if (rcgList && !rcgList._condDelegate) {
      rcgList._condDelegate = true;
      rcgList.addEventListener('change', (e) => {
        const sel = e.target && e.target.closest('.rcg-condition-type');
        if (!sel) return;
        let parent = sel.closest('.rcg-condition');
        if (!parent) parent = sel.closest('.cell')?.querySelector('.rcg-condition') || null;
        if (!parent) return;
        const gradeRow = parent.querySelector('.rcg-condition-grade');
        let otherRow = parent.querySelector('.rcg-condition-other-inline');
        if (!otherRow) {
          const row = parent.querySelector('.rcg-condition-row');
          if (row) {
            otherRow = document.createElement('div');
            otherRow.className = 'rcg-condition-other-inline';
            otherRow.style.display = 'none';
            otherRow.style.marginLeft = '12px';
            otherRow.style.marginTop = '6px';
            otherRow.innerHTML = `<input type="text" class="rcg-other-input" placeholder="add condition details" style="width: 100%; max-width: 480px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">`;
            row.appendChild(otherRow);
          }
        }
        const val = sel.value;
        if (gradeRow) gradeRow.style.display = 'none';
        const needsDetail = ['graphic-organizer','comprehension-questions','highlighter-annotation','visual-supports','story-map','read-aloud','small-group','text-to-speech','grade-level','instructional-level','words-count'];
        if (otherRow) {
          const input = otherRow.querySelector('.rcg-other-input');
          if (input) input.placeholder = (val === 'grade-level' || val === 'instructional-level') ? 'include level' : (val === 'words-count' ? '# of words' : 'add condition details');
          otherRow.style.display = (val === 'other' || needsDetail.includes(val)) ? 'inline-block' : 'none';
          otherRow.style.marginLeft = '12px';
          otherRow.style.marginTop = '6px';
        }
        // Fallback: ensure a local inline input appears adjacent to the select for words-count
        let localInline = sel.parentElement.querySelector('.rcg-condition-words-inline');
        if (!localInline) {
          localInline = document.createElement('div');
          localInline.className = 'rcg-condition-words-inline';
          localInline.style.display = 'none';
          localInline.style.marginLeft = '12px';
          localInline.innerHTML = `<input type="text" class="rcg-words-input" placeholder="# of words" style="width: 200px; max-width: 220px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">`;
          sel.parentElement.appendChild(localInline);
        }
        localInline.style.display = (val === 'words-count') ? 'inline-block' : 'none';
      });
    }
    // Behavior for condition dropdowns (supports existing and newly added items)
    function wireConditionControls(root) {
      const selects = root ? root.querySelectorAll('.rcg-condition-type') : document.querySelectorAll('#rcg-list .rcg-condition-type');
      selects.forEach(sel => {
        if (sel._wired) return; sel._wired = true;
        const update = () => {
          // Find the condition container even if the select is in the header
          let parent = sel.closest('.rcg-condition');
          if (!parent) parent = sel.closest('.cell')?.querySelector('.rcg-condition') || null;
          if (!parent) return;
          const gradeRow = parent.querySelector('.rcg-condition-grade');
          let otherRow = parent.querySelector('.rcg-condition-other-inline');
          if (!otherRow) {
            const row = parent.querySelector('.rcg-condition-row');
            if (row) {
              otherRow = document.createElement('div');
              otherRow.className = 'rcg-condition-other-inline';
              otherRow.style.display = 'none';
              otherRow.style.marginLeft = '12px';
              otherRow.style.marginTop = '6px';
              otherRow.innerHTML = `<input type="text" class="rcg-other-input" placeholder="add condition details" style="width: 100%; max-width: 480px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">`;
              row.appendChild(otherRow);
            }
          }
          const val = sel.value;
          if (gradeRow) gradeRow.style.display = 'none';
          const needsDetail = ['graphic-organizer','comprehension-questions','highlighter-annotation','visual-supports','story-map','read-aloud','small-group','text-to-speech','grade-level','instructional-level','words-count'];
          if (otherRow) {
            const input = otherRow.querySelector('.rcg-other-input');
            if (input) input.placeholder = (val === 'grade-level' || val === 'instructional-level') ? 'include level' : (val === 'words-count' ? '# of words' : 'add condition details');
            otherRow.style.display = (val === 'other' || needsDetail.includes(val)) ? 'inline-block' : 'none';
            otherRow.style.marginLeft = '12px';
            otherRow.style.marginTop = '6px';
          }
          // Fallback: ensure a local inline input appears adjacent to the select for words-count
          let localInline = sel.parentElement.querySelector('.rcg-condition-words-inline');
          if (!localInline) {
            localInline = document.createElement('div');
            localInline.className = 'rcg-condition-words-inline';
            localInline.style.display = 'none';
            localInline.style.marginLeft = '12px';
            localInline.innerHTML = `<input type="text" class="rcg-words-input" placeholder="# of words" style="width: 200px; max-width: 220px; padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px;">`;
            sel.parentElement.appendChild(localInline);
          }
          localInline.style.display = (val === 'words-count') ? 'inline-block' : 'none';
        };
        sel.addEventListener('change', update);
        // Run once for initial state
        update();
      });
    }
    wireConditionControls();
    // Also rewire when adding
    if (addRcgBtn) {
      addRcgBtn.addEventListener('click', () => wireConditionControls(rcgList));
    }

    // Behavior dropdown show/hide for Other
    function wireBehaviorControls(root) {
      const selects = root ? root.querySelectorAll('.rcg-behavior-type') : document.querySelectorAll('#rcg-list .rcg-behavior-type');
      selects.forEach(sel => {
        if (sel._wired) return; sel._wired = true;
        // Helper: dynamically size the select to fit the selected option text
        const adjustWidth = () => {
          const computed = window.getComputedStyle(sel);
          const text = sel.options[sel.selectedIndex]?.text || '';
          const measurer = document.createElement('span');
          measurer.style.visibility = 'hidden';
          measurer.style.position = 'fixed';
          measurer.style.whiteSpace = 'pre';
          measurer.style.fontFamily = computed.fontFamily;
          measurer.style.fontSize = computed.fontSize;
          measurer.style.fontWeight = computed.fontWeight;
          measurer.style.letterSpacing = computed.letterSpacing;
          measurer.textContent = text || 'select one';
          document.body.appendChild(measurer);
          const textWidth = measurer.getBoundingClientRect().width;
          document.body.removeChild(measurer);
          const paddingAndArrow = 42; // room for padding + dropdown arrow
          const minWidth = 140; // reasonable minimum so it never gets too tiny
          const newWidth = Math.max(minWidth, Math.ceil(textWidth + paddingAndArrow));
          sel.style.maxWidth = 'none';
          sel.style.width = newWidth + 'px';
        };
        // initial sizing
        adjustWidth();
        sel.addEventListener('change', function() {
          const parent = sel.closest('.rcg-behavior');
          if (!parent) return;
          const otherRow = parent.querySelector('.rcg-behavior-other-inline');
          const val = sel.value;
          if (otherRow) otherRow.style.display = val === 'other' ? 'block' : 'none';
          adjustWidth();
        });
      });
    }
    wireBehaviorControls();
    if (addRcgBtn) {
      addRcgBtn.addEventListener('click', () => wireBehaviorControls(rcgList));
    }

    // Performance criteria category handler (placeholder for detailed inputs)
    function wirePerformanceControls(root) {
      const selects = root ? root.querySelectorAll('.rcg-performance-category') : document.querySelectorAll('#rcg-list .rcg-performance-category');
      selects.forEach(sel => {
        if (sel._wired) return; sel._wired = true;
        sel.addEventListener('change', function() {
          const parent = sel.closest('.rcg-performance');
          if (!parent) return;
          let dyn = parent.querySelector('.rcg-performance-dynamic');
          if (!dyn) {
            dyn = document.createElement('div');
            dyn.className = 'rcg-performance-dynamic rcg-pc-dynamic';
            parent.appendChild(dyn);
          }
          const v = sel.value;
          // Build dynamic UI per category
          if (v === 'accuracy') {
            dyn.innerHTML = `
              <div class="rcg-inline-inputs">
                <input type="text" class="pc-accuracy-input" placeholder="80, 90, etc" style="max-width:160px;" />
                <span class="rcg-prompt">%</span>
              </div>
            `;
          } else if (v === 'percentile') {
            dyn.innerHTML = `
              <div class="rcg-inline-inputs">
                <input type="text" class="pc-percentile-input" placeholder="80th, 90th, etc" style="max-width:180px;" />
                <span class="rcg-italic">Percentile</span>
              </div>
            `;
          } else if (v === 'num-correct') {
            dyn.innerHTML = `
              <div class="rcg-inline-inputs">
                <input type="text" class="pc-numcorrect-input" placeholder="# correct" style="max-width:140px;" />
                <span>/</span>
                <input type="text" class="pc-outof-input" placeholder="out of # (optional)" style="max-width:160px;" />
              </div>
            `;
          } else if (v === 'num-errors') {
            dyn.innerHTML = `
              <div class="rcg-inline-inputs">
                <span class="rcg-italic">with no more than</span>
                <input type="text" class="pc-numerrors-input" placeholder="1, 2, 3, etc" style="max-width:120px;" />
                <span class="rcg-italic">errors</span>
              </div>
            `;
          } else if (v === 'rubric') {
            dyn.innerHTML = `
              <div class="rcg-inline-inputs">
                <input type="text" class="pc-rubric-left" placeholder="#" style="max-width:90px;" />
                <span>/</span>
                <input type="text" class="pc-rubric-right" placeholder="#" style="max-width:90px;" />
                <span>on the</span>
                <input type="text" class="pc-rubric-name" placeholder="name of rubric/rating scale" style="max-width:260px;" />
              </div>
            `;
          } else if (v === 'other') {
            dyn.innerHTML = `
              <div class="rcg-inline-inputs nowrap">
                <span class="rcg-italic">Describe:</span>
                <textarea class="pc-other-input" placeholder=""></textarea>
              </div>
            `;
          } else {
            dyn.innerHTML = '';
          }
          // Auto-grow for 'other' textarea to new row at ~66% width
          const other = dyn.querySelector('.pc-other-input');
          if (other) {
            const grow = () => {
              other.style.height = 'auto';
              const lines = Math.max(1, Math.ceil(other.scrollWidth / other.clientWidth * 0));
              other.style.height = Math.max(34, other.scrollHeight) + 'px';
            };
            other.addEventListener('input', grow);
            // initial
            grow();
          }
        });
      });
    }
    wirePerformanceControls();
    if (addRcgBtn) {
      addRcgBtn.addEventListener('click', () => wirePerformanceControls(rcgList));
    }

    // Mastery Level: Preposition select show/hide for other
    function wireMasteryPreposition(root) {
      const selects = root ? root.querySelectorAll('.ml-preposition-select') : document.querySelectorAll('#rcg-list .ml-preposition-select');
      selects.forEach(sel => {
        if (sel._wired) return; sel._wired = true;
        sel.addEventListener('change', function() {
          const col = sel.closest('.ml-col');
          if (!col) return;
          const other = col.querySelector('.ml-preposition-other');
          if (!other) return;
          other.style.display = sel.value === 'other' ? 'flex' : 'none';
        });
      });
    }
    wireMasteryPreposition();

    // Mastery Level: # or Ratio dynamic inputs
    function wireCountRatioControls(root) {
      const selects = root ? root.querySelectorAll('.ml-count-select') : document.querySelectorAll('#rcg-list .ml-count-select');
      selects.forEach(sel => {
        if (sel._wired) return; sel._wired = true;
        sel.addEventListener('change', function() {
          const col = sel.closest('.ml-col');
          if (!col) return;
          const slot = col.querySelector('.ml-slot');
          if (!slot) return;
          const val = sel.value;
          if (val === 'count') {
            slot.innerHTML = `
              <div class="ml-inline" style="margin-top: 14px;">
                <input type="text" class="ml-count-input" placeholder="1,2,3, etc" style="max-width: 70px; width: 70px; padding: 6px 8px; border: 1px solid #ccc; border-radius: 4px; text-align: center;" />
              </div>
              <label style="margin-top: 8px; display: flex; align-items: center; gap: 6px;">
                <input type="checkbox" class="ml-count-consecutive" />
                <span>Consecutive?</span>
              </label>
            `;
          } else if (val === 'ratio') {
            slot.innerHTML = `
              <div class="ml-inline" style="margin-top: 14px;">
                <input type="text" class="ml-ratio-left" placeholder="1,2,3, etc" style="max-width: 60px; width: 60px; padding: 6px 8px; border: 1px solid #ccc; border-radius: 4px; text-align: center;" />
                <span>of</span>
                <input type="text" class="ml-ratio-right" placeholder="1,2,3, etc" style="max-width: 60px; width: 60px; padding: 6px 8px; border: 1px solid #ccc; border-radius: 4px; text-align: center;" />
              </div>
              <label style="margin-top: 8px; display: flex; align-items: center; gap: 6px;">
                <input type="checkbox" class="ml-ratio-consecutive" />
                <span>Consecutive?</span>
              </label>
            `;
          } else {
            slot.innerHTML = '';
          }
        });
      });
    }
    wireCountRatioControls();
    if (addRcgBtn) {
      addRcgBtn.addEventListener('click', () => wireCountRatioControls(rcgList));
    }

    // Mastery Level: Frequency other toggle
    function wireFrequencyControls(root) {
      const selects = root ? root.querySelectorAll('.ml-frequency-select') : document.querySelectorAll('#rcg-list .ml-frequency-select');
      selects.forEach(sel => {
        if (sel._wired) return; sel._wired = true;
        sel.addEventListener('change', function() {
          const col = sel.closest('.ml-col');
          if (!col) return;
          const other = col.querySelector('.ml-frequency-other');
          if (!other) return;
          other.style.display = sel.value === 'other' ? 'flex' : 'none';
        });
      });
    }
    wireFrequencyControls();
    if (addRcgBtn) {
      addRcgBtn.addEventListener('click', () => wireFrequencyControls(rcgList));
    }

    // Units: show 'other' row
    function wireUnitsControls(root) {
      const selects = root ? root.querySelectorAll('.ml-units-select') : document.querySelectorAll('#rcg-list .ml-units-select');
      selects.forEach(sel => {
        if (sel._wired) return; sel._wired = true;
        sel.addEventListener('change', function() {
          const col = sel.closest('.ml-col');
          if (!col) return;
          const other = col.querySelector('.ml-units-other');
          if (!other) return;
          other.style.display = sel.value === 'other' ? 'flex' : 'none';
        });
      });
    }
    wireUnitsControls();
    wireGoalType();
    // Direct wire for initial inline shell (in index.html) if present
    const initialShellSelect = document.querySelector('#rcg-list .goal-type-select');
    if (initialShellSelect && !initialShellSelect._directWired) {
      initialShellSelect._directWired = true;
      initialShellSelect.addEventListener('change', () => {
        const list = document.getElementById('rcg-list');
        if (!list) return;
        const item = initialShellSelect.closest('.rcg-item');
        if (!item) return;
        if (initialShellSelect.value === 'reading-comprehension') {
          const rcg = createRcgItem();
          item.replaceWith(rcg);
          renumberRcgItems();
          applyGoalsBackgroundStyles();
          wireConditionControls(rcg);
          wireBehaviorControls(rcg);
          wirePerformanceControls(rcg);
          wireMasteryPreposition(rcg);
          wireCountRatioControls(rcg);
          wireFrequencyControls(rcg);
          wireUnitsControls(rcg);
          wireCenterPlaceholder(rcg);
          wireGenStarterWidth(rcg);
        }
      });
    }
    // Ensure initial card gets the Preposition UI (index.html static markup may not include it)
    function ensurePrepositionUi(root) {
      const scope = root || document;
      // Ensure the label+select row exists
      const firstCols = scope.querySelectorAll('#rcg-list .rcg-mastery-grid .ml-col:first-child');
      firstCols.forEach(col => {
        if (!col.querySelector('.ml-preposition-select')) {
          const top = document.createElement('div');
          top.className = 'ml-top';
          const label = document.createElement('label');
          label.className = 'rcg-prompt';
          label.textContent = 'Preposition';
          const select = document.createElement('select');
          select.className = 'ml-preposition-select';
          select.style.minWidth = '180px';
          select.innerHTML = `
            <option value="">Select One</option>
            <option value="in">in</option>
            <option value="across">across</option>
            <option value="over">over</option>
            <option value="during">during</option>
            <option value="other">other</option>
          `;
          top.append(label, select);
          col.prepend(top);
          // Remove any standalone duplicate label under the top row
          col.querySelectorAll(':scope > label.rcg-prompt').forEach(l => l.remove());
        }
      });
      // Ensure # or Ratio select exists in the second column; remove any stray duplicate labels
      const secondCols = scope.querySelectorAll('#rcg-list .rcg-mastery-grid .ml-col:nth-child(2)');
      secondCols.forEach(col => {
        if (!col.querySelector('.ml-count-select')) {
          const top = document.createElement('div');
          top.className = 'ml-top';
          const label = document.createElement('label');
          label.className = 'rcg-prompt';
          label.textContent = '# or Ratio';
          const select = document.createElement('select');
          select.className = 'ml-count-select';
          select.style.width = '80px';
          select.style.minWidth = '80px';
          select.innerHTML = `
            <option value="">Select One</option>
            <option value="count">#</option>
            <option value="ratio">ratio</option>
          `;
          top.append(label, select);
          col.prepend(top);
        }
        // Remove any label that might have been left as a sibling below
        col.querySelectorAll(':scope > label.rcg-prompt').forEach(l => l.remove());
      });
      // Ensure Frequency select exists in the third column
      const thirdCols = scope.querySelectorAll('#rcg-list .rcg-mastery-grid .ml-col:nth-child(3)');
      thirdCols.forEach(col => {
        if (!col.querySelector('.ml-frequency-select')) {
          const top = document.createElement('div');
          top.className = 'ml-top';
          const label = document.createElement('label');
          label.className = 'rcg-prompt';
          label.textContent = 'Frequency';
          const select = document.createElement('select');
          select.className = 'ml-frequency-select';
          select.style.minWidth = '140px';
          select.innerHTML = `
            <option value="">Select One</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="twice-month">2x/Month</option>
            <option value="monthly">Monthly</option>
            <option value="other">Other</option>
          `;
          top.append(label, select);
          col.prepend(top);
        }
        // Remove any leftover label directly under the column
        col.querySelectorAll(':scope > label.rcg-prompt').forEach(l => l.remove());
        // Ensure the 'other' row exists
        const slot = col.querySelector('.ml-slot');
        if (slot && !slot.querySelector('.ml-frequency-other')) {
          const otherWrap = document.createElement('div');
          otherWrap.className = 'ml-frequency-other';
          const label = document.createElement('span');
          label.className = 'rcg-italic';
          label.textContent = 'Describe:';
          const input = document.createElement('input');
          input.type = 'text';
          input.className = 'ml-frequency-other-input';
          input.style.maxWidth = '160px';
          input.style.width = '160px';
          input.style.padding = '6px 10px';
          input.style.border = '1px solid #ccc';
          input.style.borderRadius = '4px';
          otherWrap.append(label, input);
          slot.appendChild(otherWrap);
        }
      });
      // Ensure the 'Describe' row exists under the first column
      const slots = scope.querySelectorAll('#rcg-list .rcg-mastery-grid .ml-col:first-child .ml-slot');
      slots.forEach(slot => {
        if (slot.querySelector('.ml-preposition-other')) return;
        const otherWrap = document.createElement('div');
        otherWrap.className = 'ml-preposition-other';
        otherWrap.style.display = 'none';
        otherWrap.style.gap = '8px';
        const label = document.createElement('span');
        label.className = 'rcg-italic';
        label.textContent = 'Describe:';
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'ml-preposition-other-input';
        input.style.maxWidth = '160px';
        input.style.width = '160px';
        input.style.padding = '6px 10px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '4px';
        otherWrap.append(label, input);
        slot.appendChild(otherWrap);
      });
      wireMasteryPreposition(scope);
      // Ensure Units select and 'other' row exist in the fourth column
      const fourthCols = scope.querySelectorAll('#rcg-list .rcg-mastery-grid .ml-col:nth-child(4)');
      fourthCols.forEach(col => {
        if (!col.querySelector('.ml-units-select')) {
          const top = document.createElement('div');
          top.className = 'ml-top';
          const label = document.createElement('label');
          label.className = 'rcg-prompt';
          label.textContent = 'Units';
          const select = document.createElement('select');
          select.className = 'ml-units-select';
          select.style.minWidth = '160px';
          select.innerHTML = `
            <option value="">Select One</option>
            <option value="trials">trials</option>
            <option value="opportunities">opportunities</option>
            <option value="attempts">attempts</option>
            <option value="sessions">sessions</option>
            <option value="probes">probes</option>
            <option value="tasks">tasks</option>
            <option value="assessments">assessments</option>
            <option value="observations">observations</option>
            <option value="other">other</option>
          `;
          top.append(label, select);
          col.prepend(top);
          // remove any pre-existing inline label left behind
          col.querySelectorAll(':scope > label.rcg-prompt').forEach(l => l.remove());
        }
        const slot = col.querySelector('.ml-slot');
        if (slot && !slot.querySelector('.ml-units-other')) {
          const otherWrap = document.createElement('div');
          otherWrap.className = 'ml-units-other';
          const label = document.createElement('span');
          label.className = 'rcg-italic';
          label.textContent = 'Describe:';
          const input = document.createElement('input');
          input.type = 'text';
          input.className = 'ml-units-other-input';
          input.style.maxWidth = '160px';
          input.style.width = '160px';
          input.style.padding = '6px 10px';
          input.style.border = '1px solid #ccc';
          input.style.borderRadius = '4px';
          otherWrap.append(label, input);
          slot.appendChild(otherWrap);
        }
      });
      wireCountRatioControls(scope);
      wireFrequencyControls(scope);
      wireUnitsControls(scope);
    }
    ensurePrepositionUi();
    applyGoalsBackgroundStyles();
  }
});


