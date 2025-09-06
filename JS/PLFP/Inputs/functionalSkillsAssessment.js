// Functional Skills Assessment (PLFP)
// Placeholder - match PLAA Inputs style

export function createFunctionalSkillsAssessmentForm(container) {
  // Build Functional Skills Assessment form fields with 3 internal show/hide sections
  container.innerHTML = `
    <div class="fsa-section">
      <!-- Attention & Executive Functioning Assessments -->
      <div class="collapsible-section">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="fsaAttentionContent">
          <span class="toggle-icon">+</span> Attention & Executive Functioning Assessments
        </button>
        <div id="fsaAttentionContent" class="section-content" style="display: none;">
          <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
            <div style="font-weight: bold; margin-bottom: 10px;">Select All that Apply</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" class="fsa-attention-iva"> IVA-2
              </label>
              <div id="fsa-iva-section" style="display:none; margin: 10px 0 0 32px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                <div id="fsa-iva-header-inner" style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                  <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">IVA-2</h3>
                  <div style="text-align: center;">
                    <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                    <input type="date" class="iva-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                  </div>
                </div>
                <div id="iva-index-cards-container" style="margin-top: 16px;">
                  <div class="iva-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                    <button type='button' class='iva-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Index:</label>
                      <div class="custom-dropdown iva-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                        <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                          Select an Index
                          <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                        </div>
                        <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 220px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                          <div class="custom-dropdown-option" data-value="faq" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Full Scale Attention Quotient (FAQ)</div>
                          <div class="custom-dropdown-option" data-value="frcq" style="font-weight: bold; font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Full Scale Response Control Quotient (FRCQ)</div>
                          <div class="custom-dropdown-option" data-value="aaq" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Auditory Attention Quotient (AAQ)</div>
                          <div class="custom-dropdown-option" data-value="vaq" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Visual Attention Quotient (VAQ)</div>
                          <div class="custom-dropdown-option" data-value="prudence-commission" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Prudence (errors of commission)</div>
                          <div class="custom-dropdown-option" data-value="consistency-rtv" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Consistency (reaction time variability)</div>
                          <div class="custom-dropdown-option" data-value="stamina-change" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Stamina (change over time)</div>
                          <div class="custom-dropdown-option" data-value="arcq" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Auditory Response Control Quotient (ARCQ)</div>
                          <div class="custom-dropdown-option" data-value="vrcq" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Visual Response Control Quotient (VRCQ)</div>
                          <div class="custom-dropdown-option" data-value="prudence-impulsivity" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Prudence (impulsivity)</div>
                          <div class="custom-dropdown-option" data-value="consistency-variability" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Consistency (variability)</div>
                          <div class="custom-dropdown-option" data-value="stamina" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Stamina</div>
                          <div class="custom-dropdown-option" data-value="saaq" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sustained Auditory Attention Quotient (SAAQ)</div>
                          <div class="custom-dropdown-option" data-value="svaq" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Sustained Visual Attention Quotient (SVAQ)</div>
                          <div class="custom-dropdown-option" data-value="fmh" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Fine Motor Hyperactivity (FMH)</div>
                          <div class="custom-dropdown-option" data-value="other" style="font-weight: normal; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer; transition: background 0.15s;">Other</div>
                        </div>
                        <input type="hidden" class="iva-index-select" name="ivaIndex" value="" />
                      </div>
                      <input type="text" class="iva-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                    </div>
                    <!-- IVA-2 Scores Row -->
                    <div class="iva-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                          <input type="text" class="iva-std-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                          <input type="text" class="iva-conf-int" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 85-95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile</label>
                          <input type="text" class="iva-percentile" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 50" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="iva-qual-desc" style="width: 200px; padding: 0.5rem;">
                            <option value="">choose one</option>
                            <option value="Very Superior">Very Superior</option>
                            <option value="Superior">Superior</option>
                            <option value="High Average">High Average</option>
                            <option value="Average">Average</option>
                            <option value="Low Average">Low Average</option>
                            <option value="Borderline/Moderately Impaired">Borderline/Moderately Impaired</option>
                            <option value="Significantly Impaired">Significantly Impaired</option>
                            <option value="Other">Other</option>
                          </select>
                          <input type="text" class="iva-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 200px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type='button' id='iva-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                <!-- Summary of Results RTE -->
                <div style="margin-top: 2rem; padding-left: 40px;">
                  <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <div id="iva-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 6px;">
                <input type="checkbox" class="fsa-attention-connors"> Connors-3
              </label>
              <div id="fsa-connors-section" style="display:none; margin: 10px 0 0 32px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                <div id="fsa-connors-header-inner" style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                  <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">Connors-3</h3>
                  <div style="text-align: center;">
                    <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                    <input type="date" class="connors-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                  </div>
                </div>
                <div id="connors-index-cards-container" style="margin-top: 16px;">
                  <div class="connors-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                    <button type='button' class='connors-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Index:</label>
                      <div class="custom-dropdown connors-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                        <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                          Select an Index
                          <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                        </div>
                        <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 260px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                          <div class="custom-dropdown-option" data-value="content-scales" style="font-weight: bold; font-style: normal; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Content Scales</div>
                          <div class="custom-dropdown-option" data-value="inattention" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Inattention</div>
                          <div class="custom-dropdown-option" data-value="hyperactivity-impulsivity" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Hyperactivity/Impulsivity</div>
                          <div class="custom-dropdown-option" data-value="learning-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Learning Problems</div>
                          <div class="custom-dropdown-option" data-value="learning-problems-subscale" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Learning Problems Subscale</div>
                          <div class="custom-dropdown-option" data-value="executive-functioning-subscale" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Executive Functioning Subscale</div>
                          <div class="custom-dropdown-option" data-value="executive-functioning" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Executive Functioning</div>
                          <div class="custom-dropdown-option" data-value="defiance-aggression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Defiance/Aggression</div>
                          <div class="custom-dropdown-option" data-value="peer-relations" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Peer Relations</div>
                          <div class="custom-dropdown-option" data-value="dsm-symptom-scales" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">DSM Symptom Scales</div>
                          <div class="custom-dropdown-option" data-value="adhd-inattentive" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">ADHD Inattentive</div>
                          <div class="custom-dropdown-option" data-value="adhd-hyperactive-impulsive" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">ADHD Hyperactive-Impulsive</div>
                          <div class="custom-dropdown-option" data-value="adhd-combined" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">ADHD Combined</div>
                          <div class="custom-dropdown-option" data-value="odd" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Oppositional Defiant Disorder (ODD)</div>
                          <div class="custom-dropdown-option" data-value="cd" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Conduct Disorder (CD)</div>
                          <div class="custom-dropdown-option" data-value="global-index" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Global Index (Conners 3GI)</div>
                          <div class="custom-dropdown-option" data-value="restless-impulsive" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Restless–Impulsive</div>
                          <div class="custom-dropdown-option" data-value="emotional-lability" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Emotional Lability</div>
                          <div class="custom-dropdown-option" data-value="total" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Total</div>
                          <div class="custom-dropdown-option" data-value="adhd-index" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">ADHD Index (Conners 3AI)</div>
                          <div class="custom-dropdown-option" data-value="adhd-index-basic" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">ADHD Index</div>
                          <div class="custom-dropdown-option" data-value="validity-scales" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Validity Scales</div>
                          <div class="custom-dropdown-option" data-value="inconsistency-index" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Inconsistency Index</div>
                          <div class="custom-dropdown-option" data-value="negative-impression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Negative Impression</div>
                          <div class="custom-dropdown-option" data-value="positive-impression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Positive Impression</div>
                          <div class="custom-dropdown-option" data-value="other" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Other</div>
                        </div>
                        <input type="hidden" class="connors-index-select" name="connorsIndex" value="" />
                      </div>
                      <input type="text" class="connors-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                    </div>
                    <div class="connors-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">T-Score</label>
                          <input type="text" class="connors-t-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 70" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                          <input type="text" class="connors-conf-int" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 65-75" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile</label>
                          <input type="text" class="connors-percentile" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="connors-qual-desc" style="width: 200px; padding: 0.5rem;">
                            <option value="">choose one</option>
                            <option value="Very Elevated">Very Elevated</option>
                            <option value="Elevated">Elevated</option>
                            <option value="High Average">High Average</option>
                            <option value="Average">Average</option>
                            <option value="Low">Low</option>
                            <option value="Clinically Significant">Clinically Significant</option>
                            <option value="No Significant Concern">No Significant Concern</option>
                            <option value="much more concern than average">much more concern than average</option>
                            <option value="somewhat more concern than average">somewhat more concern than average</option>
                            <option value="typical range">typical range</option>
                            <option value="fewer concerns than average">fewer concerns than average</option>
                            <option value="Other">Other</option>
                          </select>
                          <input type="text" class="connors-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 200px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type='button' id='connors-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                <!-- Summary of Results RTE (Connors-3) -->
                <div style="margin-top: 2rem; padding-left: 40px;">
                  <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <div id="connors-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 6px;">
                <input type="checkbox" class="fsa-attention-other"> Other Attention & Executive Functioning Assessments
              </label>
              <div id="fsa-attention-other-section" style="display:none; margin: 10px 0 0 32px;">
                <div id="other-attention-assessments-container" style="display: flex; flex-direction: column; gap: 48px;">
                  <div class="other-attention-assessment-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4; position: relative;">
                    <button type='button' class='other-attention-remove-btn' style='position: absolute; top: 12px; right: 12px; min-width: 120px; padding: 4px 18px; display:none;'>-Assessment</button>
                    <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                      <div style="text-align: center; margin-bottom: 1rem;">
                        <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Assessment Name:</label>
                        <input type="text" class="other-attention-assessment-name" placeholder="enter assessment name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
                      </div>
                      <div style="text-align: center;">
                        <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                        <input type="date" class="other-attention-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                      </div>
                    </div>
                    <div style="margin-top: 16px; padding-left: 40px;">
                      <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Assessment Description</label>
                      <div class="other-attention-desc-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                    </div>
                    <!-- Index sub-cards container -->
                    <div class="other-attention-index-cards-container" style="margin-top: 16px;">
                      <div class="other-attention-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                        <button type='button' class='other-attention-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                        <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                          <label style="font-weight: bold;">Index:</label>
                          <input type="text" class="other-attention-index-input" placeholder="enter index" style="padding: 0.5rem; border: 1px solid #000; border-radius: 4px; min-width: 300px;" />
                        </div>
                        <div class="other-attention-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                          <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                              <input type="text" class="other-attention-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 70" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                              <input type="text" class="other-attention-conf-int" style="width: 140px; padding: 0.5rem;" placeholder="e.g., 65-75" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                              <input type="text" class="other-attention-percentile" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 95" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                              <input type="text" class="other-attention-qual-desc" style="width: 260px; padding: 0.5rem;" placeholder="enter qualitative description" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type='button' class='other-attention-add-index-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 90px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                    <!-- Summary of Results RTE for Other Assessment -->
                    <div style="margin-top: 2rem; padding-left: 40px;">
                      <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                      <div class="other-attention-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                    </div>
                  </div>
                </div>
                <button type='button' id='other-attention-add-assessment-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 110px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 0;'>+Assessment</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Behavioral & Emotional Functioning Assessments -->
      <div class="collapsible-section" style="margin-top: 12px;">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="fsaBehaviorContent">
          <span class="toggle-icon">+</span> Behavioral & Emotional Functioning Assessments
        </button>
        <div id="fsaBehaviorContent" class="section-content" style="display: none;">
          <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
            <div style="font-weight: bold; margin-bottom: 10px;">Select All that Apply</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" class="fsa-behavior-basc"> BASC-3
              </label>
              <div id="fsa-basc3-section" style="display:none; margin: 10px 0 0 32px;">
                <!-- BASC-3 (Parent Form) -->
                <div class="basc3-form-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                  <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                    <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">BASC-3 (Parent Form)</h3>
                    <div style="text-align: center;">
                      <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                      <input type="date" class="basc3-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                    </div>
                    <div style="text-align: center; margin-top: 8px;">
                      <label style="font-weight: bold; margin-right: 0.5rem;">Parent Name</label>
                      <input type="text" class="basc3-parent-name" placeholder="enter parent name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
                    </div>
                  </div>
                  <div id="basc3-parent-index-cards-container" style="margin-top: 16px;">
                    <div class="basc3-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                      <button type='button' class='basc3-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                      <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                        <label style="font-weight: bold;">Index:</label>
                        <div class="custom-dropdown basc3-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                          <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                            Select an Index
                            <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                          </div>
                          <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 260px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                            <div class="custom-dropdown-option" data-value="bsi" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Behavioral Symptoms Index (BSI)</div>
                            <div class="custom-dropdown-option" data-value="hyperactivity" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Hyperactivity</div>
                            <div class="custom-dropdown-option" data-value="aggression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Aggression</div>
                            <div class="custom-dropdown-option" data-value="conduct-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Conduct Problems</div>
                            <div class="custom-dropdown-option" data-value="attention-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Attention Problems</div>
                            <div class="custom-dropdown-option" data-value="atypicality" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Atypicality</div>
                            <div class="custom-dropdown-option" data-value="withdrawal" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Withdrawal</div>
                            <div class="custom-dropdown-option" data-value="externalizing-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Externalizing Problems Composite</div>
                            <div class="custom-dropdown-option" data-value="e-hyperactivity" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Hyperactivity</div>
                            <div class="custom-dropdown-option" data-value="e-aggression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Aggression</div>
                            <div class="custom-dropdown-option" data-value="e-conduct-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Conduct Problems</div>
                            <div class="custom-dropdown-option" data-value="internalizing-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Internalizing Problems Composite</div>
                            <div class="custom-dropdown-option" data-value="anxiety" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Anxiety</div>
                            <div class="custom-dropdown-option" data-value="depression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Depression</div>
                            <div class="custom-dropdown-option" data-value="somatization" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Somatization</div>
                            <div class="custom-dropdown-option" data-value="school-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">School Problems Composite</div>
                            <div class="custom-dropdown-option" data-value="s-attention-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Attention Problems</div>
                            <div class="custom-dropdown-option" data-value="learning-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Learning Problems</div>
                            <div class="custom-dropdown-option" data-value="other" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Other</div>
                          </div>
                          <input type="hidden" class="basc3-index-select" name="basc3Index" value="" />
                        </div>
                        <input type="text" class="basc3-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                      </div>
                      <div class="basc3-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                        <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                            <input type="text" class="basc3-score" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 70" />
                          </div>
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                            <select class="basc3-qual-desc" style="width: 220px; padding: 0.5rem;">
                              <option value="">choose one</option>
                              <option value="Clinically Significant">Clinically Significant</option>
                              <option value="At-Risk">At-Risk</option>
                              <option value="Average">Average</option>
                              <option value="Low">Low</option>
                              <option value="much more concern than average">much more concern than average</option>
                              <option value="somewhat more concern than average">somewhat more concern than average</option>
                              <option value="typical range">typical range</option>
                              <option value="fewer concerns than average">fewer concerns than average</option>
                              <option value="Other">Other</option>
                            </select>
                            <input type="text" class="basc3-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="display:flex; gap:12px; align-items:center; margin-top:10px; margin-left:40px;">
                    <button type='button' id='basc3-parent-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center;'>+ Index</button>
                    <button type='button' id='basc3-add-parent-form-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 90px; height: 28px; display:inline-flex; align-items:center; justify-content:center;'>+ Parent</button>
                  </div>
                </div>
                <!-- Spacing between forms -->
                <div style="height: 72px;"></div>
                <!-- BASC-3 (Teacher Form) -->
                <div class="basc3-form-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                  <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                    <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">BASC-3 (Teacher Form)</h3>
                    <div style="text-align: center;">
                      <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                      <input type="date" class="basc3-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                    </div>
                    <div style="text-align: center; margin-top: 8px;">
                      <label style="font-weight: bold; margin-right: 0.5rem;">Teacher Name</label>
                      <input type="text" class="basc3-teacher-name" placeholder="enter teacher name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
                    </div>
                  </div>
                  <div id="basc3-teacher-index-cards-container" style="margin-top: 16px;">
                    <div class="basc3-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                      <button type='button' class='basc3-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                      <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                        <label style="font-weight: bold;">Index:</label>
                        <div class="custom-dropdown basc3-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                          <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                            Select an Index
                            <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                          </div>
                          <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 260px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                            <div class="custom-dropdown-option" data-value="bsi" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Behavioral Symptoms Index (BSI)</div>
                            <div class="custom-dropdown-option" data-value="hyperactivity" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Hyperactivity</div>
                            <div class="custom-dropdown-option" data-value="aggression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Aggression</div>
                            <div class="custom-dropdown-option" data-value="conduct-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Conduct Problems</div>
                            <div class="custom-dropdown-option" data-value="attention-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Attention Problems</div>
                            <div class="custom-dropdown-option" data-value="atypicality" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Atypicality</div>
                            <div class="custom-dropdown-option" data-value="withdrawal" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Withdrawal</div>
                            <div class="custom-dropdown-option" data-value="externalizing-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Externalizing Problems Composite</div>
                            <div class="custom-dropdown-option" data-value="e-hyperactivity" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Hyperactivity</div>
                            <div class="custom-dropdown-option" data-value="e-aggression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Aggression</div>
                            <div class="custom-dropdown-option" data-value="e-conduct-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Conduct Problems</div>
                            <div class="custom-dropdown-option" data-value="internalizing-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Internalizing Problems Composite</div>
                            <div class="custom-dropdown-option" data-value="anxiety" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Anxiety</div>
                            <div class="custom-dropdown-option" data-value="depression" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Depression</div>
                            <div class="custom-dropdown-option" data-value="somatization" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Somatization</div>
                            <div class="custom-dropdown-option" data-value="school-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">School Problems Composite</div>
                            <div class="custom-dropdown-option" data-value="s-attention-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Attention Problems</div>
                            <div class="custom-dropdown-option" data-value="learning-problems" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Learning Problems</div>
                            <div class="custom-dropdown-option" data-value="other" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Other</div>
                          </div>
                          <input type="hidden" class="basc3-index-select" name="basc3Index" value="" />
                        </div>
                        <input type="text" class="basc3-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                      </div>
                      <div class="basc3-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                        <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                            <input type="text" class="basc3-score" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 70" />
                          </div>
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                            <select class="basc3-qual-desc" style="width: 220px; padding: 0.5rem;">
                              <option value="">choose one</option>
                              <option value="Clinically Significant">Clinically Significant</option>
                              <option value="At-Risk">At-Risk</option>
                              <option value="Average">Average</option>
                              <option value="Low">Low</option>
                              <option value="much more concern than average">much more concern than average</option>
                              <option value="somewhat more concern than average">somewhat more concern than average</option>
                              <option value="typical range">typical range</option>
                              <option value="fewer concerns than average">fewer concerns than average</option>
                              <option value="Other">Other</option>
                            </select>
                            <input type="text" class="basc3-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="display:flex; gap:12px; align-items:center; margin-top:10px; margin-left:40px;">
                    <button type='button' id='basc3-teacher-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center;'>+ Index</button>
                    <button type='button' id='basc3-add-teacher-form-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; font-size: 0.9rem; min-width: 100px; height: 28px; display:inline-flex; align-items:center; justify-content:center;'>+ Teacher</button>
                  </div>
                </div>
                <!-- Combined Summary of Results for BASC-3 (single editor for both forms) -->
                <div style="margin-top: 2rem; padding-left: 40px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc;">
                  <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <div id="basc3-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 6px;">
                <input type="checkbox" class="fsa-behavior-byi"> BYI-II
              </label>
              <div id="fsa-byi2-section" style="display:none; margin: 10px 0 0 32px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                <div id="fsa-byi2-header-inner" style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                  <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">BYI-II</h3>
                  <div style="text-align: center;">
                    <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                    <input type="date" class="byi2-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                  </div>
                </div>
                <div id="byi2-index-cards-container" style="margin-top: 16px;">
                  <div class="byi2-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                    <button type='button' class='byi2-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Index:</label>
                      <div class="custom-dropdown byi2-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                        <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                          Select an Index
                          <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;
                          "></span>
                        </div>
                        <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 260px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                          <div class="custom-dropdown-option" data-value="bsci-y" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Beck Self-Concept Inventory for Youth (BSCI-Y)</div>
                          <div class="custom-dropdown-option" data-value="bai-y" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Beck Anxiety Inventory for Youth (BAI-Y)</div>
                          <div class="custom-dropdown-option" data-value="bdi-y" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Beck Depression Inventory for Youth (BDI-Y)</div>
                          <div class="custom-dropdown-option" data-value="bani-y" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Beck Anger Inventory for Youth (BANI-Y)</div>
                          <div class="custom-dropdown-option" data-value="bdbi-y" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Beck Disruptive Behavior Inventory for Youth (BDBI-Y)</div>
                          <div class="custom-dropdown-option" data-value="other" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Other</div>
                        </div>
                        <input type="hidden" class="byi2-index-select" name="byi2Index" value="" />
                      </div>
                      <input type="text" class="byi2-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                    </div>
                    <div class="byi2-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">T-Score</label>
                          <input type="text" class="byi2-t-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 70" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                          <input type="text" class="byi2-conf-int" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 65-75" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile</label>
                          <input type="text" class="byi2-percentile" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 95" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="byi2-qual-desc" style="width: 220px; padding: 0.5rem;">
                            <option value="">choose one</option>
                            <option value="Extremely Elevated">Extremely Elevated</option>
                            <option value="Moderately Elevated">Moderately Elevated</option>
                            <option value="Mildly Elevated">Mildly Elevated</option>
                            <option value="Average">Average</option>
                            <option value="Below Average">Below Average</option>
                            <option value="Much Below Average">Much Below Average</option>
                            <option value="Other">Other</option>
                          </select>
                          <input type="text" class="byi2-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type='button' id='byi2-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                <div style="margin-top: 2rem; padding-left: 40px;">
                  <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <div id="byi2-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 6px;">
                <input type="checkbox" class="fsa-behavior-other"> Other Behavioral and Emotional Functioning Assessments
              </label>
              <div id="fsa-behavior-other-section" style="display:none; margin: 10px 0 0 32px;">
                <div id="other-behavior-assessments-container" style="display: flex; flex-direction: column; gap: 48px;">
                  <div class="other-behavior-assessment-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4; position: relative;">
                    <button type='button' class='other-behavior-remove-btn' style='position: absolute; top: 12px; right: 12px; min-width: 120px; padding: 4px 18px; display:none;'>-Assessment</button>
                    <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                      <div style="text-align: center; margin-bottom: 1rem;">
                        <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Assessment Name:</label>
                        <input type="text" class="other-behavior-assessment-name" placeholder="enter assessment name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
                      </div>
                      <div style="text-align: center;">
                        <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                        <input type="date" class="other-behavior-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                      </div>
                    </div>
                    <div style="margin-top: 16px; padding-left: 40px;">
                      <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Assessment Description</label>
                      <div class="other-behavior-desc-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                    </div>
                    <div class="other-behavior-index-cards-container" style="margin-top: 16px;">
                      <div class="other-behavior-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                        <button type='button' class='other-behavior-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                        <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                          <label style="font-weight: bold;">Index:</label>
                          <input type="text" class="other-behavior-index-input" placeholder="enter index" style="padding: 0.5rem; border: 1px solid #000; border-radius: 4px; min-width: 300px;" />
                        </div>
                        <div class="other-behavior-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                          <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                              <input type="text" class="other-behavior-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 70" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                              <input type="text" class="other-behavior-conf-int" style="width: 140px; padding: 0.5rem;" placeholder="e.g., 65-75" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                              <input type="text" class="other-behavior-percentile" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 95" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                              <input type="text" class="other-behavior-qual-desc" style="width: 260px; padding: 0.5rem;" placeholder="enter qualitative description" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type='button' class='other-behavior-add-index-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 90px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                    <div style="margin-top: 2rem; padding-left: 40px;">
                      <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                      <div class="other-behavior-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                    </div>
                  </div>
                </div>
                <button type='button' id='other-behavior-add-assessment-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 110px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 0;'>+Assessment</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Adaptive & Functional Skills Assessments -->
      <div class="collapsible-section" style="margin-top: 12px;">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="fsaAdaptiveContent">
          <span class="toggle-icon">+</span> Adaptive & Functional Skills Assessments
        </button>
        <div id="fsaAdaptiveContent" class="section-content" style="display: none;">
          <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin-top: 10px; background: #fafbfc;">
            <div style="font-weight: bold; margin-bottom: 10px;">Select All that Apply</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" class="fsa-adaptive-basc-adaptive"> BASC (Adaptive Scales)
              </label>
              <div id="fsa-basc-adaptive-section" style="display:none; margin: 10px 0 0 32px;">
                <!-- BASC-3 Adaptive (Parent Form) -->
                <div class="bascad-form-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                  <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                    <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">BASC-3 Adaptive Skills (Parent Form)</h3>
                    <div style="text-align: center;">
                      <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                      <input type="date" class="bascad-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                    </div>
                    <div style="text-align: center; margin-top: 8px;">
                      <label style="font-weight: bold; margin-right: 0.5rem;">Parent Name</label>
                      <input type="text" class="bascad-parent-name" placeholder="enter parent name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
                    </div>
                  </div>
                  <div id="bascad-parent-index-cards-container" style="margin-top: 16px;">
                    <div class="bascad-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                      <button type='button' class='bascad-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                      <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                        <label style="font-weight: bold;">Index:</label>
                        <div class="custom-dropdown bascad-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                          <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                            Select an Index
                            <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                          </div>
                          <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 260px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                            <div class="custom-dropdown-option" data-value="adaptive-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Adaptive Skills Composite</div>
                            <div class="custom-dropdown-option" data-value="adaptability" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Adaptability</div>
                            <div class="custom-dropdown-option" data-value="social-skills" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Social Skills</div>
                            <div class="custom-dropdown-option" data-value="leadership" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Leadership</div>
                            <div class="custom-dropdown-option" data-value="study-skills" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Study Skills (<span style='font-style: italic;'>Teacher Form Only</span>)</div>
                            <div class="custom-dropdown-option" data-value="functional-communication" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Functional Communication (<span style='font-style: italic;'>Teacher Form Only</span>)</div>
                            <div class="custom-dropdown-option" data-value="adl" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Activities of Daily Living/ADL (<span style='font-style: italic;'>Parent Form Only</span>)</div>
                            <div class="custom-dropdown-option" data-value="other" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Other</div>
                          </div>
                          <input type="hidden" class="bascad-index-select" name="bascadIndex" value="" />
                        </div>
                        <input type="text" class="bascad-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                      </div>
                      <div class="bascad-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                        <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                            <input type="text" class="bascad-score" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 40" />
                          </div>
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                            <select class="bascad-qual-desc" style="width: 220px; padding: 0.5rem;">
                              <option value="">choose one</option>
                              <option value="Clinically Significant Concern">Clinically Significant Concern</option>
                              <option value="At-Risk">At-Risk</option>
                              <option value="Average or Better">Average or Better</option>
                              <option value="Other">Other</option>
                            </select>
                            <input type="text" class="bascad-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type='button' id='bascad-parent-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                </div>
                <div style="height: 72px;"></div>
                <!-- BASC-3 Adaptive (Teacher Form) -->
                <div class="bascad-form-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                  <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                    <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">BASC-3 Adaptive Skills (Teacher Form)</h3>
                    <div style="text-align: center;">
                      <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                      <input type="date" class="bascad-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                    </div>
                    <div style="text-align: center; margin-top: 8px;">
                      <label style="font-weight: bold; margin-right: 0.5rem;">Teacher Name</label>
                      <input type="text" class="bascad-teacher-name" placeholder="enter teacher name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
                    </div>
                  </div>
                  <div id="bascad-teacher-index-cards-container" style="margin-top: 16px;">
                    <div class="bascad-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                      <button type='button' class='bascad-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                      <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                        <label style="font-weight: bold;">Index:</label>
                        <div class="custom-dropdown bascad-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                          <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                            Select an Index
                            <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                          </div>
                          <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 260px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                            <div class="custom-dropdown-option" data-value="adaptive-composite" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Adaptive Skills Composite</div>
                            <div class="custom-dropdown-option" data-value="adaptability" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Adaptability</div>
                            <div class="custom-dropdown-option" data-value="social-skills" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Social Skills</div>
                            <div class="custom-dropdown-option" data-value="leadership" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Leadership</div>
                            <div class="custom-dropdown-option" data-value="study-skills" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Study Skills (<span style='font-style: italic;'>Teacher Form Only</span>)</div>
                            <div class="custom-dropdown-option" data-value="functional-communication" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Functional Communication (<span style='font-style: italic;'>Teacher Form Only</span>)</div>
                            <div class="custom-dropdown-option" data-value="adl" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Activities of Daily Living/ADL (<span style='font-style: italic;'>Parent Form Only</span>)</div>
                            <div class="custom-dropdown-option" data-value="other" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Other</div>
                          </div>
                          <input type="hidden" class="bascad-index-select" name="bascadIndex" value="" />
                        </div>
                        <input type="text" class="bascad-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                      </div>
                      <div class="bascad-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                        <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                            <input type="text" class="bascad-score" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 40" />
                          </div>
                          <div style="display: flex; flex-direction: column; align-items: center;">
                            <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                            <select class="bascad-qual-desc" style="width: 220px; padding: 0.5rem;">
                              <option value="">choose one</option>
                              <option value="Clinically Significant Concern">Clinically Significant Concern</option>
                              <option value="At-Risk">At-Risk</option>
                              <option value="Average or Better">Average or Better</option>
                              <option value="Other">Other</option>
                            </select>
                            <input type="text" class="bascad-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type='button' id='bascad-teacher-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                </div>
                <!-- Combined Summary of Results for BASC-3 Adaptive Skills -->
                <div style="margin-top: 2rem; padding-left: 40px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc;">
                  <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <div id="bascad-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 6px;">
                <input type="checkbox" class="fsa-adaptive-vineland-abas"> ABAS-3
              </label>
              <div id="fsa-vineland-abas-section" style="display:none; margin: 10px 0 0 32px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4;">
                <div id="fsa-vinabas-header-inner" style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                  <h3 style="font-size: 1.35rem; font-weight: bold; font-style: italic; color: #333; text-align: center; margin: 0 auto 0.8rem auto;">ABAS-3</h3>
                  <div style="text-align: center;">
                    <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                    <input type="date" class="vinabas-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                  </div>
                </div>
                <div id="vinabas-index-cards-container" style="margin-top: 16px;">
                  <div class="vinabas-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                    <button type='button' class='vinabas-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                    <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                      <label style="font-weight: bold;">Index:</label>
                      <div class="custom-dropdown vinabas-index-dropdown" tabindex="0" style="min-width: 300px; position: relative; border-radius: 4px;">
                        <div class="custom-dropdown-selected" style="padding: 0.5rem 2.2rem 0.5rem 0.75rem; border: 1px solid #000; background: #fff; cursor: pointer; min-width: 300px; border-radius: 4px; position: relative; transition: border-color 0.2s;">
                          Select an Index
                          <span class="custom-dropdown-arrow" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #000; background: none;"></span>
                        </div>
                        <div class="custom-dropdown-options" style="display: none; position: absolute; top: 100%; left: 0; z-index: 10; background: #fff; border: 1px solid #000; min-width: 300px; max-height: 260px; overflow-y: auto; border-radius: 0 0 4px 4px; margin-top: 2px; box-shadow: none;">
                          <div class="custom-dropdown-option" data-value="gac" style="font-weight: bold; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">General Adaptive Composite (GAC)</div>
                          <div class="custom-dropdown-option" data-value="conceptual-composite" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Conceptual Composite</div>
                          <div class="custom-dropdown-option" data-value="communication" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Communication</div>
                          <div class="custom-dropdown-option" data-value="functional-academics" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Functional Academics</div>
                          <div class="custom-dropdown-option" data-value="self-direction" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Self-Direction</div>
                          <div class="custom-dropdown-option" data-value="social-composite" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Social Composite</div>
                          <div class="custom-dropdown-option" data-value="leisure" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Leisure</div>
                          <div class="custom-dropdown-option" data-value="social" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Social</div>
                          <div class="custom-dropdown-option" data-value="practical-composite" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Practical Composite</div>
                          <div class="custom-dropdown-option" data-value="community-use" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Community Use</div>
                          <div class="custom-dropdown-option" data-value="home-living" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Home Living</div>
                          <div class="custom-dropdown-option" data-value="home-and-safety" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Home and Safety</div>
                          <div class="custom-dropdown-option" data-value="self-care" style="font-style: italic; padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Self-Care</div>
                          <div class="custom-dropdown-option" data-value="motor-skills" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Motor Skills</div>
                          <div class="custom-dropdown-option" data-value="other" style="padding: 0.5rem 0.75rem; border-radius: 3px; cursor: pointer;">Other</div>
                        </div>
                        <input type="hidden" class="vinabas-index-select" name="vinabasIndex" value="" />
                      </div>
                      <input type="text" class="vinabas-index-other-input" style="display:none; margin-left: 1rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Name of other index" />
                    </div>
                    <div class="vinabas-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                      <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Standard Score</label>
                          <input type="text" class="vinabas-std-score" style="width: 110px; padding: 0.5rem;" placeholder="e.g., 100" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                          <input type="text" class="vinabas-conf-int" style="width: 140px; padding: 0.5rem;" placeholder="e.g., 95-105" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile</label>
                          <input type="text" class="vinabas-percentile" style="width: 110px; padding: 0.5rem;" placeholder="e.g., 50" />
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                          <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                          <select class="vinabas-qual-desc" style="width: 220px; padding: 0.5rem;">
                            <option value="">choose one</option>
                            <option value="Very Superior">Very Superior</option>
                            <option value="Superior">Superior</option>
                            <option value="High Average">High Average</option>
                            <option value="Average">Average</option>
                            <option value="Low Average">Low Average</option>
                            <option value="Borderline/Below Average">Borderline/Below Average</option>
                            <option value="Extremely Low">Extremely Low</option>
                            <option value="Other">Other</option>
                          </select>
                          <input type="text" class="vinabas-qual-desc-other" style="display:none; margin-top: 0.5rem; width: 220px; padding: 0.5rem; border: 1px solid #000; border-radius: 4px;" placeholder="Add Qualitative Description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type='button' id='vinabas-add-index-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 70px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                <div style="margin-top: 2rem; padding-left: 40px;">
                  <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                  <div id="vinabas-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 6px;">
                <input type="checkbox" class="fsa-adaptive-other"> Other Adaptive & Functional Skills Assessments
              </label>
              <div id="fsa-adaptive-other-section" style="display:none; margin: 10px 0 0 32px;">
                <div id="other-adaptive-assessments-container" style="display: flex; flex-direction: column; gap: 48px;">
                  <div class="other-adaptive-assessment-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #f9f6f4; position: relative;">
                    <button type='button' class='other-adaptive-remove-btn' style='position: absolute; top: 12px; right: 12px; min-width: 120px; padding: 4px 18px; display:none;'>-Assessment</button>
                    <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
                      <div style="text-align: center; margin-bottom: 1rem;">
                        <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Assessment Name:</label>
                        <input type="text" class="other-adaptive-assessment-name" placeholder="enter assessment name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
                      </div>
                      <div style="text-align: center;">
                        <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
                        <input type="date" class="other-adaptive-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
                      </div>
                    </div>
                    <div style="margin-top: 16px; padding-left: 40px;">
                      <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Assessment Description</label>
                      <div class="other-adaptive-desc-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                    </div>
                    <div class="other-adaptive-index-cards-container" style="margin-top: 16px;">
                      <div class="other-adaptive-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
                        <button type='button' class='other-adaptive-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
                        <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
                          <label style="font-weight: bold;">Index:</label>
                          <input type="text" class="other-adaptive-index-input" placeholder="enter index" style="padding: 0.5rem; border: 1px solid #000; border-radius: 4px; min-width: 300px;" />
                        </div>
                        <div class="other-adaptive-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
                          <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                              <input type="text" class="other-adaptive-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                              <input type="text" class="other-adaptive-conf-int" style="width: 140px; padding: 0.5rem;" placeholder="e.g., 95-105" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                              <input type="text" class="other-adaptive-percentile" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 50" />
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                              <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                              <input type="text" class="other-adaptive-qual-desc" style="width: 260px; padding: 0.5rem;" placeholder="enter qualitative description" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type='button' class='other-adaptive-add-index-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 90px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
                    <div style="margin-top: 2rem; padding-left: 40px;">
                      <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
                      <div class="other-adaptive-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                    </div>
                  </div>
                </div>
                <button type='button' id='other-adaptive-add-assessment-btn' class='assessment-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 110px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 0;'>+Assessment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Wire button-based show/hide logic for internal sections
  const buttons = container.querySelectorAll('.section-toggle-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const content = container.querySelector('#' + button.getAttribute('aria-controls'));
      const icon = button.querySelector('.toggle-icon');
      button.setAttribute('aria-expanded', (!isExpanded).toString());
      if (content) content.style.display = isExpanded ? 'none' : 'block';
      if (icon) icon.textContent = isExpanded ? '+' : '-';
    });
  });

  // Wire checkbox toggles to show corresponding assessment header/date blocks
  const ivaCb = container.querySelector('.fsa-attention-iva');
  const connorsCb = container.querySelector('.fsa-attention-connors');
  const bascRatingCb = container.querySelector('.fsa-behavior-basc');
  const byiCb = container.querySelector('.fsa-behavior-byi');
  const byi2Sec = container.querySelector('#fsa-byi2-section');
  const bascAdaptiveCb = container.querySelector('.fsa-adaptive-basc-adaptive');
  const vinelandAbasCb = container.querySelector('.fsa-adaptive-vineland-abas');

  const ivaSec = container.querySelector('#fsa-iva-section');
  const ivaHeader = container.querySelector('#fsa-iva-header');
  const connorsSec = container.querySelector('#fsa-connors-section');
  const basc3Sec = container.querySelector('#fsa-basc3-section');
  const bascRatingSec = container.querySelector('#fsa-basc-rating-section');
  const byiSec = container.querySelector('#fsa-byi-section');
  const bascAdaptiveSec = container.querySelector('#fsa-basc-adaptive-section');
  const vinelandAbasSec = container.querySelector('#fsa-vineland-abas-section');
  const otherAttentionSec = container.querySelector('#fsa-attention-other-section');
  const otherBehaviorSec = container.querySelector('#fsa-behavior-other-section');
  const bascadSec = container.querySelector('#fsa-basc-adaptive-section');
  const otherAdaptiveSec = container.querySelector('#fsa-adaptive-other-section');
  function initIvaCard(cardEl) {
    if (!cardEl || cardEl._initialized) return;
    const dd = cardEl.querySelector('.iva-index-dropdown');
    const sel = dd?.querySelector('.custom-dropdown-selected');
    const opts = dd?.querySelector('.custom-dropdown-options');
    const hidden = cardEl.querySelector('.iva-index-select');
    const other = cardEl.querySelector('.iva-index-other-input');
    const qual = cardEl.querySelector('.iva-qual-desc');
    const qualOther = cardEl.querySelector('.iva-qual-desc-other');
    if (dd && sel && opts && hidden) {
      sel.addEventListener('click', () => {
        opts.style.display = opts.style.display === 'block' ? 'none' : 'block';
      });
      opts.querySelectorAll('.custom-dropdown-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const text = opt.textContent;
          const value = opt.getAttribute('data-value') || '';
          sel.childNodes[0].nodeValue = text + ' ';
          hidden.value = value;
          opts.style.display = 'none';
          if (other) {
            other.style.display = value === 'other' ? 'inline-block' : 'none';
            if (value !== 'other') other.value = '';
          }
        });
      });
      document.addEventListener('click', (e) => { if (!dd.contains(e.target)) { opts.style.display = 'none'; } });
    }
    if (qual && qualOther) {
      const applyQD = () => {
        const isOther = qual.value === 'Other';
        qualOther.style.display = isOther ? 'inline-block' : 'none';
        if (!isOther) qualOther.value = '';
      };
      qual.addEventListener('change', applyQD);
      applyQD();
    }
    cardEl._initialized = true;
  }

  function toggleSection(cb, sec, extra) {
    if (!cb || !sec) return;
    const apply = () => {
      const show = !!cb.checked;
      sec.style.display = show ? 'block' : 'none';
      if (extra) extra.style.display = show ? 'block' : 'none';
    };
    cb.addEventListener('change', apply);
    apply();
  }

  toggleSection(ivaCb, ivaSec, ivaHeader);
  toggleSection(connorsCb, connorsSec);
  toggleSection(bascRatingCb, basc3Sec);
  toggleSection(byiCb, byi2Sec);
  toggleSection(container.querySelector('.fsa-attention-other'), otherAttentionSec);
  toggleSection(container.querySelector('.fsa-behavior-other'), otherBehaviorSec);
  toggleSection(bascRatingCb, bascRatingSec);
  toggleSection(byiCb, byiSec);
  toggleSection(bascAdaptiveCb, bascAdaptiveSec);
  toggleSection(vinelandAbasCb, vinelandAbasSec);
  toggleSection(container.querySelector('.fsa-adaptive-other'), otherAdaptiveSec);

  // Custom dropdown interactions for IVA Index
  // Initialize first IVA card
  initIvaCard(container.querySelector('.iva-index-card'));

  // Add/remove IVA index cards
  const addIndexBtn = container.querySelector('#iva-add-index-btn');
  const cardsContainer = container.querySelector('#iva-index-cards-container');
  if (addIndexBtn && cardsContainer) {
    addIndexBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'iva-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = cardsContainer.querySelector('.iva-index-card').innerHTML;
      // Show remove button for subsequent cards
      const removeBtn = card.querySelector('.iva-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      cardsContainer.appendChild(card);
      initIvaCard(card);
      // Wire remove handler
      if (removeBtn) {
        removeBtn.onclick = () => { card.remove(); };
      }
    });
    // Ensure first card remove button stays hidden
    const firstRemove = cardsContainer.querySelector('.iva-index-card .iva-remove-index-btn');
    if (firstRemove) firstRemove.style.display = 'none';
  }

  // Connors-3 add/remove index cards
  const connorsAddBtn = container.querySelector('#connors-add-index-btn');
  const connorsCardsContainer = container.querySelector('#connors-index-cards-container');
  if (connorsAddBtn && connorsCardsContainer) {
    connorsAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'connors-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = connorsCardsContainer.querySelector('.connors-index-card').innerHTML;
      const removeBtn = card.querySelector('.connors-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      connorsCardsContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
    });
    const firstConnorsRemove = connorsCardsContainer.querySelector('.connors-index-card .connors-remove-index-btn');
    if (firstConnorsRemove) firstConnorsRemove.style.display = 'none';
  }

  // BASC-3 add/remove index cards and init dropdowns (Parent/Teacher/Student)
  const basc3ParentAddBtn = container.querySelector('#basc3-parent-add-index-btn');
  const basc3ParentCardsContainer = container.querySelector('#basc3-parent-index-cards-container');
  const basc3TeacherAddBtn = container.querySelector('#basc3-teacher-add-index-btn');
  const basc3TeacherCardsContainer = container.querySelector('#basc3-teacher-index-cards-container');
  const basc3StudentAddBtn = container.querySelector('#basc3-student-add-index-btn');
  const basc3StudentCardsContainer = container.querySelector('#basc3-student-index-cards-container');
  function positionBasc3IndexAddBtn(cardsContainerEl, addBtnEl) {
    if (!cardsContainerEl || !addBtnEl) return;
    // Ensure container can anchor absolute button
    if (!cardsContainerEl.style.position) cardsContainerEl.style.position = 'relative';
    // Ensure space at bottom for button
    const currentPaddingBottom = parseInt(cardsContainerEl.style.paddingBottom || '0', 10);
    if (currentPaddingBottom < 44) cardsContainerEl.style.paddingBottom = '44px';
    // Style and place button inside container bottom-right
    addBtnEl.style.position = 'absolute';
    addBtnEl.style.left = '12px';
    addBtnEl.style.bottom = '12px';
    addBtnEl.style.margin = '0';
    // Move button into the container
    if (addBtnEl.parentElement !== cardsContainerEl) {
      cardsContainerEl.appendChild(addBtnEl);
    }
  }
  function positionBasc3FormAddButton(role /* 'parent' | 'teacher' | 'student' */) {
    const basc3Section = container.querySelector('#fsa-basc3-section');
    if (!basc3Section) return;
    const btn = basc3Section.querySelector(
      role === 'parent' ? '#basc3-add-parent-form-btn' : (role === 'teacher' ? '#basc3-add-teacher-form-btn' : '#basc3-add-student-form-btn')
    );
    if (!btn) return;
    const forms = Array.from(basc3Section.querySelectorAll('.basc3-form-card')).filter(c => {
      if (role === 'parent') return !!c.querySelector('#basc3-parent-index-cards-container');
      if (role === 'teacher') return !!c.querySelector('#basc3-teacher-index-cards-container');
      return !!c.querySelector('#basc3-student-index-cards-container');
    });
    const last = forms[forms.length - 1];
    if (!last) return;
    const rowClass = role === 'parent' ? 'basc3-parent-add-row' : (role === 'teacher' ? 'basc3-teacher-add-row' : 'basc3-student-add-row');
    let row = last.nextElementSibling && last.nextElementSibling.classList && last.nextElementSibling.classList.contains(rowClass)
      ? last.nextElementSibling
      : basc3Section.querySelector('.' + rowClass);
    if (!row) {
      row = document.createElement('div');
      row.className = rowClass;
      row.style.display = 'flex';
      row.style.justifyContent = 'flex-start';
      row.style.marginTop = '10px';
    }
    last.insertAdjacentElement('afterend', row);
    btn.style.position = 'static';
    btn.style.margin = '0';
    row.appendChild(btn);
  }

  // Ensure Student form and add button exist by cloning Parent template if needed
  (function initBasc3StudentIfMissing(){
    const basc3Section = container.querySelector('#fsa-basc3-section');
    if (!basc3Section) return;
    let studentFormCard = basc3Section.querySelector('#basc3-student-index-cards-container')?.closest('.basc3-form-card');
    if (!studentFormCard) {
      const parentTemplateCard = basc3Section.querySelector('#basc3-parent-index-cards-container')?.closest('.basc3-form-card');
      if (parentTemplateCard) {
        const form = parentTemplateCard.cloneNode(true);
        // Update IDs/classes for student
        const parentContainer = form.querySelector('#basc3-parent-index-cards-container');
        if (parentContainer) parentContainer.id = 'basc3-student-index-cards-container';
        const parentAdd = form.querySelector('#basc3-parent-add-index-btn');
        if (parentAdd) parentAdd.id = 'basc3-student-add-index-btn';
        const nameInput = form.querySelector('.basc3-parent-name');
        if (nameInput) { nameInput.classList.remove('basc3-parent-name'); nameInput.classList.add('basc3-student-name'); nameInput.value = ''; }
        // Update remove button text/class
        const rmBtn = form.querySelector('.remove-basc3-parent-form-btn');
        if (rmBtn) { rmBtn.textContent = '-Student'; rmBtn.className = 'remove-basc3-student-form-btn'; }
        // Clear values in cards
        form.querySelectorAll('.basc3-index-card').forEach(card => {
          const sel = card.querySelector('.basc3-index-dropdown .custom-dropdown-selected');
          const hidden = card.querySelector('.basc3-index-select');
          const other = card.querySelector('.basc3-index-other-input');
          const score = card.querySelector('.basc3-score');
          const qdSel = card.querySelector('.basc3-qual-desc');
          const qdOther = card.querySelector('.basc3-qual-desc-other');
          if (sel) sel.childNodes[0].nodeValue = 'Select an Index ';
          if (hidden) hidden.value = '';
          if (other) { other.style.display = 'none'; other.value = ''; }
          if (score) score.value = '';
          if (qdSel) qdSel.value = '';
          if (qdOther) { qdOther.style.display = 'none'; qdOther.value = ''; }
        });
        const lastForm = basc3Section.querySelector('.basc3-form-card:last-of-type');
        if (lastForm) lastForm.insertAdjacentElement('afterend', form);
      }
    }
    if (!basc3Section.querySelector('#basc3-add-student-form-btn')) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'basc3-add-student-form-btn';
      btn.textContent = '+Student';
      btn.style.backgroundColor = 'var(--color-accent)';
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.padding = '4px 12px';
      btn.style.borderRadius = 'var(--button-radius)';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all var(--transition-duration) var(--transition-easing)';
      btn.style.fontSize = '0.9rem';
      btn.style.minWidth = '100px';
      btn.style.height = '28px';
      basc3Section.appendChild(btn);
    }
  })();
  function initBasc3Card(cardEl) {
    if (!cardEl || cardEl._initialized) return;
    const dd = cardEl.querySelector('.basc3-index-dropdown');
    const sel = dd?.querySelector('.custom-dropdown-selected');
    const opts = dd?.querySelector('.custom-dropdown-options');
    const hidden = cardEl.querySelector('.basc3-index-select');
    const other = cardEl.querySelector('.basc3-index-other-input');
    const qual = cardEl.querySelector('.basc3-qual-desc');
    const qualOther = cardEl.querySelector('.basc3-qual-desc-other');
    if (dd && sel && opts && hidden) {
      sel.addEventListener('click', () => { opts.style.display = opts.style.display === 'block' ? 'none' : 'block'; });
      opts.querySelectorAll('.custom-dropdown-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const text = opt.textContent;
          const value = opt.getAttribute('data-value') || '';
          sel.childNodes[0].nodeValue = text + ' ';
          hidden.value = value;
          opts.style.display = 'none';
          if (other) {
            other.style.display = value === 'other' ? 'inline-block' : 'none';
            if (value !== 'other') other.value = '';
          }
        });
      });
      document.addEventListener('click', (e) => { if (!dd.contains(e.target)) { opts.style.display = 'none'; } });
    }
    if (qual && qualOther) {
      const applyQD = () => {
        const isOther = qual.value === 'Other';
        qualOther.style.display = isOther ? 'inline-block' : 'none';
        if (!isOther) qualOther.value = '';
      };
      qual.addEventListener('change', applyQD);
      applyQD();
    }
    cardEl._initialized = true;
  }
  // BASC-3 Adaptive add/remove and init dropdowns (Parent/Teacher)
  const bascadParentAddBtn = container.querySelector('#bascad-parent-add-index-btn');
  const bascadParentCardsContainer = container.querySelector('#bascad-parent-index-cards-container');
  const bascadTeacherAddBtn = container.querySelector('#bascad-teacher-add-index-btn');
  const bascadTeacherCardsContainer = container.querySelector('#bascad-teacher-index-cards-container');
  function initBascadCard(cardEl) {
    if (!cardEl || cardEl._initialized) return;
    const dd = cardEl.querySelector('.bascad-index-dropdown');
    const sel = dd?.querySelector('.custom-dropdown-selected');
    const opts = dd?.querySelector('.custom-dropdown-options');
    const hidden = cardEl.querySelector('.bascad-index-select');
    const other = cardEl.querySelector('.bascad-index-other-input');
    const qual = cardEl.querySelector('.bascad-qual-desc');
    const qualOther = cardEl.querySelector('.bascad-qual-desc-other');
    if (dd && sel && opts && hidden) {
      sel.addEventListener('click', () => { opts.style.display = opts.style.display === 'block' ? 'none' : 'block'; });
      opts.querySelectorAll('.custom-dropdown-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const text = opt.textContent;
          const value = opt.getAttribute('data-value') || '';
          sel.childNodes[0].nodeValue = text + ' ';
          hidden.value = value;
          opts.style.display = 'none';
          if (other) {
            other.style.display = value === 'other' ? 'inline-block' : 'none';
            if (value !== 'other') other.value = '';
          }
        });
      });
      document.addEventListener('click', (e) => { if (!dd.contains(e.target)) { opts.style.display = 'none'; } });
    }
    if (qual && qualOther) {
      const applyQD = () => {
        const isOther = qual.value === 'Other';
        qualOther.style.display = isOther ? 'inline-block' : 'none';
        if (!isOther) qualOther.value = '';
      };
      qual.addEventListener('change', applyQD);
      applyQD();
    }
    cardEl._initialized = true;
  }
  if (bascadParentCardsContainer) initBascadCard(bascadParentCardsContainer.querySelector('.bascad-index-card'));
  // Add Parent form (+Parent) for BASC-3 Adaptive
  const bascadAddParentBtn = container.querySelector('#basc3-add-parent-form-btn');
  if (bascadAddParentBtn && bascadParentCardsContainer) {
    bascadAddParentBtn.addEventListener('click', () => {
      const bascadSection = container.querySelector('#fsa-basc-adaptive-section');
      const parentTemplateCard = bascadSection.querySelector('#bascad-parent-index-cards-container')?.closest('.bascad-form-card');
      if (!parentTemplateCard) return;
      const form = document.createElement('div');
      form.className = 'bascad-form-card';
      form.style.border = '1px solid #bbb';
      form.style.borderRadius = '8px';
      form.style.padding = '18px';
      form.style.background = '#f9f6f4';
      form.style.position = 'relative';
      form.innerHTML = parentTemplateCard.innerHTML;
      const rm = document.createElement('button'); rm.type='button'; rm.textContent='-Parent'; rm.style.position='absolute'; rm.style.top='12px'; rm.style.right='12px'; rm.style.minWidth='100px'; rm.style.padding='4px 18px';
      form.appendChild(rm); rm.onclick = () => form.remove();
      const parentForms = Array.from(bascadSection.querySelectorAll('.bascad-form-card')).filter(c => c.querySelector('#bascad-parent-index-cards-container'));
      const lastParent = parentForms[parentForms.length - 1];
      if (lastParent) lastParent.insertAdjacentElement('afterend', form);
    });
  }
  if (bascadParentAddBtn && bascadParentCardsContainer) {
    bascadParentAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'bascad-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = bascadParentCardsContainer.querySelector('.bascad-index-card').innerHTML;
      const removeBtn = card.querySelector('.bascad-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      bascadParentCardsContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initBascadCard(card);
    });
    const firstRemove = bascadParentCardsContainer.querySelector('.bascad-index-card .bascad-remove-index-btn');
    if (firstRemove) firstRemove.style.display = 'none';
  }
  if (bascadTeacherCardsContainer) initBascadCard(bascadTeacherCardsContainer.querySelector('.bascad-index-card'));
  // Add Teacher form (+Teacher) for BASC-3 Adaptive
  const bascadAddTeacherBtn = container.querySelector('#basc3-add-teacher-form-btn');
  if (bascadAddTeacherBtn && bascadTeacherCardsContainer) {
    bascadAddTeacherBtn.addEventListener('click', () => {
      const bascadSection = container.querySelector('#fsa-basc-adaptive-section');
      const teacherTemplateCard = bascadSection.querySelector('#bascad-teacher-index-cards-container')?.closest('.bascad-form-card');
      if (!teacherTemplateCard) return;
      const form = document.createElement('div');
      form.className = 'bascad-form-card';
      form.style.border = '1px solid #bbb'; form.style.borderRadius = '8px'; form.style.padding = '18px';
      form.style.background = '#f9f6f4'; form.style.position = 'relative';
      form.innerHTML = teacherTemplateCard.innerHTML;
      const rm = document.createElement('button'); rm.type='button'; rm.textContent='-Teacher'; rm.style.position='absolute'; rm.style.top='12px'; rm.style.right='12px'; rm.style.minWidth='110px'; rm.style.padding='4px 18px';
      form.appendChild(rm); rm.onclick = () => form.remove();
      const teacherForms = Array.from(bascadSection.querySelectorAll('.bascad-form-card')).filter(c => c.querySelector('#bascad-teacher-index-cards-container'));
      const lastTeacher = teacherForms[teacherForms.length - 1];
      if (lastTeacher) lastTeacher.insertAdjacentElement('afterend', form);
    });
  }
  if (bascadTeacherAddBtn && bascadTeacherCardsContainer) {
    bascadTeacherAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'bascad-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = bascadTeacherCardsContainer.querySelector('.bascad-index-card').innerHTML;
      const removeBtn = card.querySelector('.bascad-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      bascadTeacherCardsContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initBascadCard(card);
    });
    const firstRemove = bascadTeacherCardsContainer.querySelector('.bascad-index-card .bascad-remove-index-btn');
    if (firstRemove) firstRemove.style.display = 'none';
  }
  // Vineland/ABAS-3 add/remove and init dropdowns
  const vinabasAddBtn = container.querySelector('#vinabas-add-index-btn');
  const vinabasCardsContainer = container.querySelector('#vinabas-index-cards-container');
  function initVinabasCard(cardEl) {
    if (!cardEl || cardEl._initialized) return;
    const dd = cardEl.querySelector('.vinabas-index-dropdown');
    const sel = dd?.querySelector('.custom-dropdown-selected');
    const opts = dd?.querySelector('.custom-dropdown-options');
    const hidden = cardEl.querySelector('.vinabas-index-select');
    const other = cardEl.querySelector('.vinabas-index-other-input');
    const qual = cardEl.querySelector('.vinabas-qual-desc');
    if (dd && sel && opts && hidden) {
      sel.addEventListener('click', () => { opts.style.display = opts.style.display === 'block' ? 'none' : 'block'; });
      opts.querySelectorAll('.custom-dropdown-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const text = opt.textContent;
          const value = opt.getAttribute('data-value') || '';
          sel.childNodes[0].nodeValue = text + ' ';
          hidden.value = value;
          opts.style.display = 'none';
          if (other) {
            other.style.display = value === 'other' ? 'inline-block' : 'none';
            if (value !== 'other') other.value = '';
          }
        });
      });
      document.addEventListener('click', (e) => { if (!dd.contains(e.target)) { opts.style.display = 'none'; } });
    }
    cardEl._initialized = true;
  }
  if (vinabasCardsContainer) initVinabasCard(vinabasCardsContainer.querySelector('.vinabas-index-card'));
  if (vinabasAddBtn && vinabasCardsContainer) {
    vinabasAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'vinabas-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = vinabasCardsContainer.querySelector('.vinabas-index-card').innerHTML;
      const removeBtn = card.querySelector('.vinabas-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      vinabasCardsContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initVinabasCard(card);
    });
    const firstRemove = vinabasCardsContainer.querySelector('.vinabas-index-card .vinabas-remove-index-btn');
    if (firstRemove) firstRemove.style.display = 'none';
  }
  // Toggle for Vineland/ABAS qualitative description Other input
  setTimeout(() => {
    const containers = container.querySelectorAll('#vinabas-index-cards-container .vinabas-index-card');
    containers.forEach(card => {
      const qual = card.querySelector('.vinabas-qual-desc');
      const qualOther = card.querySelector('.vinabas-qual-desc-other');
      if (qual && qualOther) {
        const apply = () => {
          const isOther = qual.value === 'Other';
          qualOther.style.display = isOther ? 'inline-block' : 'none';
          if (!isOther) qualOther.value = '';
        };
        qual.addEventListener('change', apply);
        apply();
      }
    });
  }, 0);
  // BYI-II add/remove and init dropdowns
  const byi2AddBtn = container.querySelector('#byi2-add-index-btn');
  const byi2CardsContainer = container.querySelector('#byi2-index-cards-container');
  function initByi2Card(cardEl) {
    if (!cardEl || cardEl._initialized) return;
    const dd = cardEl.querySelector('.byi2-index-dropdown');
    const sel = dd?.querySelector('.custom-dropdown-selected');
    const opts = dd?.querySelector('.custom-dropdown-options');
    const hidden = cardEl.querySelector('.byi2-index-select');
    const other = cardEl.querySelector('.byi2-index-other-input');
    const qual = cardEl.querySelector('.byi2-qual-desc');
    const qualOther = cardEl.querySelector('.byi2-qual-desc-other');
    if (dd && sel && opts && hidden) {
      sel.addEventListener('click', () => { opts.style.display = opts.style.display === 'block' ? 'none' : 'block'; });
      opts.querySelectorAll('.custom-dropdown-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const text = opt.textContent;
          const value = opt.getAttribute('data-value') || '';
          sel.childNodes[0].nodeValue = text + ' ';
          hidden.value = value;
          opts.style.display = 'none';
          if (other) {
            other.style.display = value === 'other' ? 'inline-block' : 'none';
            if (value !== 'other') other.value = '';
          }
        });
      });
      document.addEventListener('click', (e) => { if (!dd.contains(e.target)) { opts.style.display = 'none'; } });
    }
    if (qual && qualOther) {
      const applyQD = () => {
        const isOther = qual.value === 'Other';
        qualOther.style.display = isOther ? 'inline-block' : 'none';
        if (!isOther) qualOther.value = '';
      };
      qual.addEventListener('change', applyQD);
      applyQD();
    }
    cardEl._initialized = true;
  }
  if (byi2CardsContainer) initByi2Card(byi2CardsContainer.querySelector('.byi2-index-card'));
  if (byi2AddBtn && byi2CardsContainer) {
    byi2AddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'byi2-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = byi2CardsContainer.querySelector('.byi2-index-card').innerHTML;
      const removeBtn = card.querySelector('.byi2-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      byi2CardsContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initByi2Card(card);
    });
    const firstRemove = byi2CardsContainer.querySelector('.byi2-index-card .byi2-remove-index-btn');
    if (firstRemove) firstRemove.style.display = 'none';
  }
  if (basc3ParentCardsContainer) initBasc3Card(basc3ParentCardsContainer.querySelector('.basc3-index-card'));
  // Add Parent form (+Parent) for BASC-3
  const basc3AddParentBtn = container.querySelector('#basc3-add-parent-form-btn');
  if (basc3AddParentBtn && basc3ParentCardsContainer) {
    basc3AddParentBtn.addEventListener('click', () => {
      const basc3Section = container.querySelector('#fsa-basc3-section');
      const parentTemplateCard = basc3Section.querySelector('#basc3-parent-index-cards-container')?.closest('.basc3-form-card');
      if (!parentTemplateCard) return;
      const form = document.createElement('div');
      form.className = 'basc3-form-card';
      form.style.border = '1px solid #bbb';
      form.style.borderRadius = '8px';
      form.style.padding = '18px';
      form.style.background = '#f9f6f4';
      form.style.position = 'relative';
      form.innerHTML = parentTemplateCard.innerHTML;
      // add remove button
      const rm = document.createElement('button');
      rm.type = 'button';
      rm.textContent = '-Parent';
      rm.className = 'remove-basc3-parent-form-btn';
      rm.style.position = 'absolute'; rm.style.top = '12px'; rm.style.right = '12px'; rm.style.minWidth = '100px'; rm.style.padding = '4px 18px';
      form.appendChild(rm);
      rm.onclick = () => { form.remove(); positionBasc3FormAddButton('parent'); };
      // Initialize dropdowns and local +Index within this new Parent form
      const localParentCardsContainer = form.querySelector('#basc3-parent-index-cards-container');
      if (localParentCardsContainer) {
        const firstCard = localParentCardsContainer.querySelector('.basc3-index-card');
        if (firstCard) initBasc3Card(firstCard);
        const localAddBtn = form.querySelector('#basc3-parent-add-index-btn');
        if (localAddBtn) {
          positionBasc3IndexAddBtn(localParentCardsContainer, localAddBtn);
          localAddBtn.addEventListener('click', () => {
            const card = document.createElement('div');
            card.className = 'basc3-index-card';
            card.style.border = '1px solid #bbb';
            card.style.borderRadius = '8px';
            card.style.padding = '18px';
            card.style.background = '#fafbfc';
            card.style.position = 'relative';
            card.innerHTML = localParentCardsContainer.querySelector('.basc3-index-card').innerHTML;
            const removeBtn = card.querySelector('.basc3-remove-index-btn');
            if (removeBtn) removeBtn.style.display = 'inline-flex';
            // Reset dropdown selection to default for new card
            const dd = card.querySelector('.basc3-index-dropdown');
            const sel = dd?.querySelector('.custom-dropdown-selected');
            const hidden = card.querySelector('.basc3-index-select');
            const other = card.querySelector('.basc3-index-other-input');
            if (sel) sel.childNodes[0].nodeValue = 'Select an Index ';
            if (hidden) hidden.value = '';
            if (other) { other.style.display = 'none'; other.value = ''; }
            localParentCardsContainer.appendChild(card);
            if (removeBtn) removeBtn.onclick = () => { card.remove(); };
            initBasc3Card(card);
          });
          const firstRemove = localParentCardsContainer.querySelector('.basc3-index-card .basc3-remove-index-btn');
          if (firstRemove) firstRemove.style.display = 'none';
        }
      }
      // Place before the combined summary card (parent of parentCardsContainer is the first form card wrapper)
      const parentForms = Array.from(basc3Section.querySelectorAll('.basc3-form-card')).filter(c => c.querySelector('#basc3-parent-index-cards-container'));
      const lastParent = parentForms[parentForms.length - 1];
      if (lastParent) lastParent.insertAdjacentElement('afterend', form);
      // Move +Parent button to just after the last parent form
      positionBasc3FormAddButton('parent');
    });
  }
  if (basc3ParentAddBtn && basc3ParentCardsContainer) {
    // Position initial +Index button inside its white card container
    positionBasc3IndexAddBtn(basc3ParentCardsContainer, basc3ParentAddBtn);
    basc3ParentAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'basc3-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = basc3ParentCardsContainer.querySelector('.basc3-index-card').innerHTML;
      const removeBtn = card.querySelector('.basc3-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      // Reset dropdown selection to default for new card
      const dd = card.querySelector('.basc3-index-dropdown');
      const sel = dd?.querySelector('.custom-dropdown-selected');
      const hidden = card.querySelector('.basc3-index-select');
      const other = card.querySelector('.basc3-index-other-input');
      if (sel) sel.childNodes[0].nodeValue = 'Select an Index ';
      if (hidden) hidden.value = '';
      if (other) { other.style.display = 'none'; other.value = ''; }
      basc3ParentCardsContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initBasc3Card(card);
    });
    const firstRemove = basc3ParentCardsContainer.querySelector('.basc3-index-card .basc3-remove-index-btn');
    if (firstRemove) firstRemove.style.display = 'none';
  }
  if (basc3TeacherCardsContainer) initBasc3Card(basc3TeacherCardsContainer.querySelector('.basc3-index-card'));
  // Add Teacher form (+Teacher) for BASC-3
  const basc3AddTeacherBtn = container.querySelector('#basc3-add-teacher-form-btn');
  if (basc3AddTeacherBtn && basc3TeacherCardsContainer) {
    basc3AddTeacherBtn.addEventListener('click', () => {
      const basc3Section = container.querySelector('#fsa-basc3-section');
      const teacherTemplateCard = basc3Section.querySelector('#basc3-teacher-index-cards-container')?.closest('.basc3-form-card');
      if (!teacherTemplateCard) return;
      const form = document.createElement('div');
      form.className = 'basc3-form-card';
      form.style.border = '1px solid #bbb';
      form.style.borderRadius = '8px';
      form.style.padding = '18px';
      form.style.background = '#f9f6f4';
      form.style.position = 'relative';
      form.innerHTML = teacherTemplateCard.innerHTML;
      const rm = document.createElement('button');
      rm.type = 'button'; rm.textContent = '-Teacher'; rm.className = 'remove-basc3-teacher-form-btn';
      rm.style.position = 'absolute'; rm.style.top = '12px'; rm.style.right = '12px'; rm.style.minWidth = '110px'; rm.style.padding = '4px 18px';
      form.appendChild(rm);
      rm.onclick = () => { form.remove(); positionBasc3FormAddButton('teacher'); };
      // Initialize dropdowns and local +Index within this new Teacher form
      const localTeacherCardsContainer = form.querySelector('#basc3-teacher-index-cards-container');
      if (localTeacherCardsContainer) {
        const firstCard = localTeacherCardsContainer.querySelector('.basc3-index-card');
        if (firstCard) initBasc3Card(firstCard);
        const localAddBtn = form.querySelector('#basc3-teacher-add-index-btn');
        if (localAddBtn) {
          positionBasc3IndexAddBtn(localTeacherCardsContainer, localAddBtn);
          localAddBtn.addEventListener('click', () => {
            const card = document.createElement('div');
            card.className = 'basc3-index-card';
            card.style.border = '1px solid #bbb';
            card.style.borderRadius = '8px';
            card.style.padding = '18px';
            card.style.background = '#fafbfc';
            card.style.position = 'relative';
            card.innerHTML = localTeacherCardsContainer.querySelector('.basc3-index-card').innerHTML;
            const removeBtn = card.querySelector('.basc3-remove-index-btn');
            if (removeBtn) removeBtn.style.display = 'inline-flex';
            // Reset dropdown selection to default for new card
            const dd = card.querySelector('.basc3-index-dropdown');
            const sel = dd?.querySelector('.custom-dropdown-selected');
            const hidden = card.querySelector('.basc3-index-select');
            const other = card.querySelector('.basc3-index-other-input');
            if (sel) sel.childNodes[0].nodeValue = 'Select an Index ';
            if (hidden) hidden.value = '';
            if (other) { other.style.display = 'none'; other.value = ''; }
            localTeacherCardsContainer.appendChild(card);
            if (removeBtn) removeBtn.onclick = () => { card.remove(); };
            initBasc3Card(card);
          });
          const firstRemove = localTeacherCardsContainer.querySelector('.basc3-index-card .basc3-remove-index-btn');
          if (firstRemove) firstRemove.style.display = 'none';
        }
      }
      const teacherForms = Array.from(basc3Section.querySelectorAll('.basc3-form-card')).filter(c => c.querySelector('#basc3-teacher-index-cards-container'));
      const lastTeacher = teacherForms[teacherForms.length - 1];
      if (lastTeacher) lastTeacher.insertAdjacentElement('afterend', form);
      // Move +Teacher button to just after the last teacher form
      positionBasc3FormAddButton('teacher');
    });
  }
  // Initial placement for +Parent and +Teacher buttons
  positionBasc3FormAddButton('parent');
  positionBasc3FormAddButton('teacher');
  if (basc3TeacherAddBtn && basc3TeacherCardsContainer) {
    // Position initial +Index button inside its white card container
    positionBasc3IndexAddBtn(basc3TeacherCardsContainer, basc3TeacherAddBtn);
    basc3TeacherAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'basc3-index-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#fafbfc';
      card.style.position = 'relative';
      card.innerHTML = basc3TeacherCardsContainer.querySelector('.basc3-index-card').innerHTML;
      const removeBtn = card.querySelector('.basc3-remove-index-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      // Reset dropdown selection to default for new card
      const dd = card.querySelector('.basc3-index-dropdown');
      const sel = dd?.querySelector('.custom-dropdown-selected');
      const hidden = card.querySelector('.basc3-index-select');
      const other = card.querySelector('.basc3-index-other-input');
      if (sel) sel.childNodes[0].nodeValue = 'Select an Index ';
      if (hidden) hidden.value = '';
      if (other) { other.style.display = 'none'; other.value = ''; }
      basc3TeacherCardsContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initBasc3Card(card);
    });
    const firstRemove = basc3TeacherCardsContainer.querySelector('.basc3-index-card .basc3-remove-index-btn');
    if (firstRemove) firstRemove.style.display = 'none';
  }

  // Other Attention & Executive Functioning Assessments add/remove
  const otherAttentionAddBtn = container.querySelector('#other-attention-add-assessment-btn');
  const otherAttentionContainer = container.querySelector('#other-attention-assessments-container');
  if (otherAttentionAddBtn && otherAttentionContainer) {
    otherAttentionAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'other-attention-assessment-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#f9f6f4';
      card.style.position = 'relative';
      card.innerHTML = `
        <button type='button' class='other-attention-remove-btn' style='position: absolute; top: 12px; right: 12px; min-width: 120px; padding: 4px 18px;'>-Assessment</button>
        <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
          <div style="text-align: center; margin-bottom: 1rem;">
            <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Assessment Name:</label>
            <input type="text" class="other-attention-assessment-name" placeholder="enter assessment name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
          </div>
          <div style="text-align: center;">
            <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
            <input type="date" class="other-attention-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
          </div>
        </div>
        <div style="margin-top: 16px; padding-left: 40px;">
          <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Assessment Description</label>
          <div class="other-attention-desc-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
        <div class="other-attention-index-cards-container" style="margin-top: 16px;">
          <div class="other-attention-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
            <button type='button' class='other-attention-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
            <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
              <label style="font-weight: bold;">Index:</label>
              <input type="text" class="other-attention-index-input" placeholder="enter index" style="padding: 0.5rem; border: 1px solid #000; border-radius: 4px; min-width: 300px;" />
            </div>
            <div class="other-attention-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
              <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                  <input type="text" class="other-attention-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 70" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                  <input type="text" class="other-attention-conf-int" style="width: 140px; padding: 0.5rem;" placeholder="e.g., 65-75" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                  <input type="text" class="other-attention-percentile" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 95" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                  <input type="text" class="other-attention-qual-desc" style="width: 260px; padding: 0.5rem;" placeholder="enter qualitative description" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type='button' class='other-attention-add-index-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 90px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
        <div style="margin-top: 2rem; padding-left: 40px;">
          <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
          <div class="other-attention-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
      `;
      const removeBtn = card.querySelector('.other-attention-remove-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      otherAttentionContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      // init index add/remove for this new assessment card
      initOtherAttentionAssessmentCard(card);
    });
    const firstOtherRemove = otherAttentionContainer.querySelector('.other-attention-assessment-card .other-attention-remove-btn');
    if (firstOtherRemove) firstOtherRemove.style.display = 'none';
    // Initialize index add/remove for the first card
    initOtherAttentionAssessmentCard(otherAttentionContainer.querySelector('.other-attention-assessment-card'));
  }

  // Helper to init +Index/-Index for an Other Attention assessment card
  function initOtherAttentionAssessmentCard(assessmentCard) {
    if (!assessmentCard || assessmentCard._initialized) return;
    const indexesContainer = assessmentCard.querySelector('.other-attention-index-cards-container');
    const addIndexBtn = assessmentCard.querySelector('.other-attention-add-index-btn');
    if (indexesContainer && addIndexBtn) {
      addIndexBtn.addEventListener('click', () => {
        const card = document.createElement('div');
        card.className = 'other-attention-index-card';
        card.style.border = '1px solid #bbb';
        card.style.borderRadius = '8px';
        card.style.padding = '18px';
        card.style.background = '#fafbfc';
        card.style.position = 'relative';
        card.innerHTML = indexesContainer.querySelector('.other-attention-index-card').innerHTML;
        const removeBtn = card.querySelector('.other-attention-remove-index-btn');
        if (removeBtn) removeBtn.style.display = 'inline-flex';
        indexesContainer.appendChild(card);
        if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      });
      // Ensure first index remove is hidden
      const firstRemove = indexesContainer.querySelector('.other-attention-index-card .other-attention-remove-index-btn');
      if (firstRemove) firstRemove.style.display = 'none';
    }
    // Initialize Quill for this assessment's Description and Summary of Results
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
        const dq = assessmentCard.querySelector('.other-attention-desc-quill');
        if (dq && !dq._quill) {
          dq._quill = new Quill(dq, { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Describe this assessment...' });
          const dToolbar = dq.previousElementSibling && dq.previousElementSibling.classList.contains('ql-toolbar') ? dq.previousElementSibling : dq.parentElement.querySelector('.ql-toolbar');
          if (dToolbar) dToolbar.style.background = '#fff';
          const dEditor = dq.querySelector('.ql-editor');
          if (dEditor) dEditor.style.minWidth = '100%';
        }
        const q = assessmentCard.querySelector('.other-attention-summary-quill');
        if (q && !q._quill) {
          q._quill = new Quill(q, { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize results...' });
          const toolbarEl = q.previousElementSibling && q.previousElementSibling.classList.contains('ql-toolbar') ? q.previousElementSibling : q.parentElement.querySelector('.ql-toolbar');
          if (toolbarEl) toolbarEl.style.background = '#fff';
          const editorEl = q.querySelector('.ql-editor');
          if (editorEl) editorEl.style.minWidth = '100%';
        }
      }
    }, 0);
    assessmentCard._initialized = true;
  }
  // Other Behavioral & Emotional Functioning Assessments add/remove
  const otherBehaviorAddBtn = container.querySelector('#other-behavior-add-assessment-btn');
  const otherBehaviorContainer = container.querySelector('#other-behavior-assessments-container');
  function initOtherBehaviorAssessmentCard(assessmentCard) {
    if (!assessmentCard || assessmentCard._initialized) return;
    const indexesContainer = assessmentCard.querySelector('.other-behavior-index-cards-container');
    const addIndexBtn = assessmentCard.querySelector('.other-behavior-add-index-btn');
    if (indexesContainer && addIndexBtn) {
      addIndexBtn.addEventListener('click', () => {
        const card = document.createElement('div');
        card.className = 'other-behavior-index-card';
        card.style.border = '1px solid #bbb';
        card.style.borderRadius = '8px';
        card.style.padding = '18px';
        card.style.background = '#fafbfc';
        card.style.position = 'relative';
        card.innerHTML = indexesContainer.querySelector('.other-behavior-index-card').innerHTML;
        const removeBtn = card.querySelector('.other-behavior-remove-index-btn');
        if (removeBtn) removeBtn.style.display = 'inline-flex';
        indexesContainer.appendChild(card);
        if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      });
      const firstRemove = indexesContainer.querySelector('.other-behavior-index-card .other-behavior-remove-index-btn');
      if (firstRemove) firstRemove.style.display = 'none';
    }
    // Init Quill description and summary
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
        const dq = assessmentCard.querySelector('.other-behavior-desc-quill');
        if (dq && !dq._quill) {
          dq._quill = new Quill(dq, { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Describe this assessment...' });
          const dToolbar = dq.previousElementSibling && dq.previousElementSibling.classList.contains('ql-toolbar') ? dq.previousElementSibling : dq.parentElement.querySelector('.ql-toolbar');
          if (dToolbar) dToolbar.style.background = '#fff';
          const dEditor = dq.querySelector('.ql-editor');
          if (dEditor) dEditor.style.minWidth = '100%';
        }
        const q = assessmentCard.querySelector('.other-behavior-summary-quill');
        if (q && !q._quill) {
          q._quill = new Quill(q, { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize results...' });
          const toolbarEl = q.previousElementSibling && q.previousElementSibling.classList.contains('ql-toolbar') ? q.previousElementSibling : q.parentElement.querySelector('.ql-toolbar');
          if (toolbarEl) toolbarEl.style.background = '#fff';
          const editorEl = q.querySelector('.ql-editor');
          if (editorEl) editorEl.style.minWidth = '100%';
        }
      }
    }, 0);
    assessmentCard._initialized = true;
  }
  if (otherBehaviorAddBtn && otherBehaviorContainer) {
    otherBehaviorAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'other-behavior-assessment-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#f9f6f4';
      card.style.position = 'relative';
      card.innerHTML = `
        <button type='button' class='other-behavior-remove-btn' style='position: absolute; top: 12px; right: 12px; min-width: 120px; padding: 4px 18px;'>-Assessment</button>
        <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
          <div style="text-align: center; margin-bottom: 1rem;">
            <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Assessment Name:</label>
            <input type="text" class="other-behavior-assessment-name" placeholder="enter assessment name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
          </div>
          <div style="text-align: center;">
            <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
            <input type="date" class="other-behavior-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
          </div>
        </div>
        <div style="margin-top: 16px; padding-left: 40px;">
          <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Assessment Description</label>
          <div class="other-behavior-desc-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
        <div class="other-behavior-index-cards-container" style="margin-top: 16px;">
          <div class="other-behavior-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
            <button type='button' class='other-behavior-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
            <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
              <label style="font-weight: bold;">Index:</label>
              <input type="text" class="other-behavior-index-input" placeholder="enter index" style="padding: 0.5rem; border: 1px solid #000; border-radius: 4px; min-width: 300px;" />
            </div>
            <div class="other-behavior-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
              <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                  <input type="text" class="other-behavior-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 70" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                  <input type="text" class="other-behavior-conf-int" style="width: 140px; padding: 0.5rem;" placeholder="e.g., 65-75" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                  <input type="text" class="other-behavior-percentile" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 95" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                  <input type="text" class="other-behavior-qual-desc" style="width: 260px; padding: 0.5rem;" placeholder="enter qualitative description" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type='button' class='other-behavior-add-index-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 90px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
        <div style="margin-top: 2rem; padding-left: 40px;">
          <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
          <div class="other-behavior-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
      `;
      const removeBtn = card.querySelector('.other-behavior-remove-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      otherBehaviorContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initOtherBehaviorAssessmentCard(card);
    });
    const firstOtherRemove = otherBehaviorContainer.querySelector('.other-behavior-assessment-card .other-behavior-remove-btn');
    if (firstOtherRemove) firstOtherRemove.style.display = 'none';
    initOtherBehaviorAssessmentCard(otherBehaviorContainer.querySelector('.other-behavior-assessment-card'));
  }
  // Other Adaptive & Functional Skills Assessments add/remove
  const otherAdaptiveAddBtn = container.querySelector('#other-adaptive-add-assessment-btn');
  const otherAdaptiveContainer = container.querySelector('#other-adaptive-assessments-container');
  function initOtherAdaptiveAssessmentCard(assessmentCard) {
    if (!assessmentCard || assessmentCard._initialized) return;
    const indexesContainer = assessmentCard.querySelector('.other-adaptive-index-cards-container');
    const addIndexBtn = assessmentCard.querySelector('.other-adaptive-add-index-btn');
    if (indexesContainer && addIndexBtn) {
      addIndexBtn.addEventListener('click', () => {
        const card = document.createElement('div');
        card.className = 'other-adaptive-index-card';
        card.style.border = '1px solid #bbb';
        card.style.borderRadius = '8px';
        card.style.padding = '18px';
        card.style.background = '#fafbfc';
        card.style.position = 'relative';
        card.innerHTML = indexesContainer.querySelector('.other-adaptive-index-card').innerHTML;
        const removeBtn = card.querySelector('.other-adaptive-remove-index-btn');
        if (removeBtn) removeBtn.style.display = 'inline-flex';
        indexesContainer.appendChild(card);
        if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      });
      const firstRemove = indexesContainer.querySelector('.other-adaptive-index-card .other-adaptive-remove-index-btn');
      if (firstRemove) firstRemove.style.display = 'none';
    }
    // Init Quill description and summary
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
        const dq = assessmentCard.querySelector('.other-adaptive-desc-quill');
        if (dq && !dq._quill) {
          dq._quill = new Quill(dq, { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Describe this assessment...' });
          const dToolbar = dq.previousElementSibling && dq.previousElementSibling.classList.contains('ql-toolbar') ? dq.previousElementSibling : dq.parentElement.querySelector('.ql-toolbar');
          if (dToolbar) dToolbar.style.background = '#fff';
          const dEditor = dq.querySelector('.ql-editor');
          if (dEditor) dEditor.style.minWidth = '100%';
        }
        const q = assessmentCard.querySelector('.other-adaptive-summary-quill');
        if (q && !q._quill) {
          q._quill = new Quill(q, { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize results...' });
          const toolbarEl = q.previousElementSibling && q.previousElementSibling.classList.contains('ql-toolbar') ? q.previousElementSibling : q.parentElement.querySelector('.ql-toolbar');
          if (toolbarEl) toolbarEl.style.background = '#fff';
          const editorEl = q.querySelector('.ql-editor');
          if (editorEl) editorEl.style.minWidth = '100%';
        }
      }
    }, 0);
    assessmentCard._initialized = true;
  }
  if (otherAdaptiveAddBtn && otherAdaptiveContainer) {
    otherAdaptiveAddBtn.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className = 'other-adaptive-assessment-card';
      card.style.border = '1px solid #bbb';
      card.style.borderRadius = '8px';
      card.style.padding = '18px';
      card.style.background = '#f9f6f4';
      card.style.position = 'relative';
      card.innerHTML = `
        <button type='button' class='other-adaptive-remove-btn' style='position: absolute; top: 12px; right: 12px; min-width: 120px; padding: 4px 18px;'>-Assessment</button>
        <div style="text-align: center !important; margin: 0 -24px 10px -24px; width: calc(100% + 48px) !important;">
          <div style="text-align: center; margin-bottom: 1rem;">
            <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Assessment Name:</label>
            <input type="text" class="other-adaptive-assessment-name" placeholder="enter assessment name" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem; min-width: 260px;" />
          </div>
          <div style="text-align: center;">
            <label style="font-weight: bold; font-style: italic; margin-right: 0.5rem;">Date of Assessment (Optional)</label>
            <input type="date" class="other-adaptive-date-input" style="padding: 0.4rem 0.7rem; border: 1px solid #000; border-radius: 4px; font-size: 1rem;" />
          </div>
        </div>
        <div style="margin-top: 16px; padding-left: 40px;">
          <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Assessment Description</label>
          <div class="other-adaptive-desc-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
        <div class="other-adaptive-index-cards-container" style="margin-top: 16px;">
          <div class="other-adaptive-index-card" style="border: 1px solid #bbb; border-radius: 8px; padding: 18px; background: #fafbfc; position: relative;">
            <button type='button' class='other-adaptive-remove-index-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px; display:none;'>-Index</button>
            <div style="display: flex; align-items: center; gap: 1rem; padding-left: 40px;">
              <label style="font-weight: bold;">Index:</label>
              <input type="text" class="other-adaptive-index-input" placeholder="enter index" style="padding: 0.5rem; border: 1px solid #000; border-radius: 4px; min-width: 300px;" />
            </div>
            <div class="other-adaptive-scores-row" style="margin-top: 1.5rem; padding-left: 40px;">
              <div style="display: flex; margin-bottom: 0.5rem; white-space: nowrap; width: 100%; gap: 3rem;">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Score</label>
                  <input type="text" class="other-adaptive-score" style="width: 100px; padding: 0.5rem;" placeholder="e.g., 100" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Confidence Interval</label>
                  <input type="text" class="other-adaptive-conf-int" style="width: 140px; padding: 0.5rem;" placeholder="e.g., 95-105" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Percentile Rank</label>
                  <input type="text" class="other-adaptive-percentile" style="width: 120px; padding: 0.5rem;" placeholder="e.g., 50" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <label style="font-weight: bold; font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">Qualitative Description</label>
                  <input type="text" class="other-adaptive-qual-desc" style="width: 260px; padding: 0.5rem;" placeholder="enter qualitative description" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type='button' class='other-adaptive-add-index-btn' style='background-color: var(--color-accent); color: white; border: none; padding: 4px 12px; border-radius: var(--button-radius); cursor: pointer; transition: all var(--transition-duration) var(--transition-easing); font-size: 0.9rem; min-width: 90px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; margin-left: 40px;'>+ Index</button>
        <div style="margin-top: 2rem; padding-left: 40px;">
          <label style="font-weight: bold; font-style: italic; display: block; margin-bottom: 0.5rem;">Summary of Results</label>
          <div class="other-adaptive-summary-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
      `;
      const removeBtn = card.querySelector('.other-adaptive-remove-btn');
      if (removeBtn) removeBtn.style.display = 'inline-flex';
      otherAdaptiveContainer.appendChild(card);
      if (removeBtn) removeBtn.onclick = () => { card.remove(); };
      initOtherAdaptiveAssessmentCard(card);
    });
    const firstOtherRemove = otherAdaptiveContainer.querySelector('.other-adaptive-assessment-card .other-adaptive-remove-btn');
    if (firstOtherRemove) firstOtherRemove.style.display = 'none';
    initOtherAdaptiveAssessmentCard(otherAdaptiveContainer.querySelector('.other-adaptive-assessment-card'));
  }

  // Wire Connors custom dropdown interactions
  function initConnorsCard(cardEl) {
    if (!cardEl || cardEl._initialized) return;
    const dd = cardEl.querySelector('.connors-index-dropdown');
    const sel = dd?.querySelector('.custom-dropdown-selected');
    const opts = dd?.querySelector('.custom-dropdown-options');
    const hidden = cardEl.querySelector('.connors-index-select');
    const other = cardEl.querySelector('.connors-index-other-input');
    const qual = cardEl.querySelector('.connors-qual-desc');
    const qualOther = cardEl.querySelector('.connors-qual-desc-other');
    if (dd && sel && opts && hidden) {
      sel.addEventListener('click', () => {
        opts.style.display = opts.style.display === 'block' ? 'none' : 'block';
      });
      opts.querySelectorAll('.custom-dropdown-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const text = opt.textContent;
          const value = opt.getAttribute('data-value') || '';
          sel.childNodes[0].nodeValue = text + ' ';
          hidden.value = value;
          opts.style.display = 'none';
          if (other) {
            other.style.display = value === 'other' ? 'inline-block' : 'none';
            if (value !== 'other') other.value = '';
          }
        });
      });
      document.addEventListener('click', (e) => { if (!dd.contains(e.target)) { opts.style.display = 'none'; } });
    }
    if (qual && qualOther) {
      const applyQD = () => {
        const isOther = qual.value === 'Other';
        qualOther.style.display = isOther ? 'inline-block' : 'none';
        if (!isOther) qualOther.value = '';
      };
      qual.addEventListener('change', applyQD);
      applyQD();
    }
    cardEl._initialized = true;
  }

  // Initialize first Connors card dropdown
  initConnorsCard(container.querySelector('.connors-index-card'));
  // Initialize new cards on add
  if (connorsAddBtn && connorsCardsContainer) {
    connorsAddBtn.addEventListener('click', () => {
      const latest = connorsCardsContainer.lastElementChild;
      if (latest) initConnorsCard(latest);
    });
  }

  // Initialize Quill for IVA Summary
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
      const q = container.querySelector('#iva-summary-quill');
      if (q && !q._quill) {
        q._quill = new Quill('#iva-summary-quill', { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize IVA-2 results...' });
        // Ensure toolbar has white background and editor spans full width
        const wrapper = q.closest('.ql-container');
        const toolbarEl = q.previousElementSibling && q.previousElementSibling.classList.contains('ql-toolbar') ? q.previousElementSibling : q.parentElement.querySelector('.ql-toolbar');
        if (toolbarEl) toolbarEl.style.background = '#fff';
        const editorEl = q.querySelector('.ql-editor');
        if (editorEl) editorEl.style.minWidth = '100%';
      }
      const cq = container.querySelector('#connors-summary-quill');
      if (cq && !cq._quill) {
        cq._quill = new Quill('#connors-summary-quill', { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize Conners-3 results...' });
        const cToolbar = cq.previousElementSibling && cq.previousElementSibling.classList.contains('ql-toolbar') ? cq.previousElementSibling : cq.parentElement.querySelector('.ql-toolbar');
        if (cToolbar) cToolbar.style.background = '#fff';
        const cEditor = cq.querySelector('.ql-editor');
        if (cEditor) cEditor.style.minWidth = '100%';
      }
      const bCombined = container.querySelector('#basc3-summary-quill');
      if (bCombined && !bCombined._quill) {
        bCombined._quill = new Quill('#basc3-summary-quill', { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize BASC-3 results...' });
        const tb = bCombined.previousElementSibling && bCombined.previousElementSibling.classList.contains('ql-toolbar') ? bCombined.previousElementSibling : bCombined.parentElement.querySelector('.ql-toolbar');
        if (tb) tb.style.background = '#fff';
        const ed = bCombined.querySelector('.ql-editor');
        if (ed) ed.style.minWidth = '100%';
      }
      const yq = container.querySelector('#byi2-summary-quill');
      if (yq && !yq._quill) {
        yq._quill = new Quill('#byi2-summary-quill', { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize BYI-II results...' });
        const yToolbar = yq.previousElementSibling && yq.previousElementSibling.classList.contains('ql-toolbar') ? yq.previousElementSibling : yq.parentElement.querySelector('.ql-toolbar');
        if (yToolbar) yToolbar.style.background = '#fff';
        const yEditor = yq.querySelector('.ql-editor');
        if (yEditor) yEditor.style.minWidth = '100%';
      }
      const vq = container.querySelector('#vinabas-summary-quill');
      if (vq && !vq._quill) {
        vq._quill = new Quill('#vinabas-summary-quill', { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize ABAS-3 results...' });
        const vToolbar = vq.previousElementSibling && vq.previousElementSibling.classList.contains('ql-toolbar') ? vq.previousElementSibling : vq.parentElement.querySelector('.ql-toolbar');
        if (vToolbar) vToolbar.style.background = '#fff';
        const vEditor = vq.querySelector('.ql-editor');
        if (vEditor) vEditor.style.minWidth = '100%';
      }
      const adq = container.querySelector('#bascad-summary-quill');
      if (adq && !adq._quill) {
        adq._quill = new Quill('#bascad-summary-quill', { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Summarize BASC-3 Adaptive Skills results...' });
        const adToolbar = adq.previousElementSibling && adq.previousElementSibling.classList.contains('ql-toolbar') ? adq.previousElementSibling : adq.parentElement.querySelector('.ql-toolbar');
        if (adToolbar) adToolbar.style.background = '#fff';
        const adEditor = adq.querySelector('.ql-editor');
        if (adEditor) adEditor.style.minWidth = '100%';
      }
    }
  }, 0);
} 