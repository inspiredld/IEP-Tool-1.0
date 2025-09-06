// Stakeholder Input (PLFP)
// Placeholder - match PLAA Inputs style

export function createStakeholderInputForm(container) {
  // Build Stakeholder Input form fields with 7 show/hide subsections
  container.innerHTML = `
    <div class="stakeholder-section">
      <div class="collapsible-section">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="stakeholderPart1Content">
          <span class="toggle-icon">+</span> Student and Support Staff Input
        </button>
        <div id="stakeholderPart1Content" class="section-content" style="display: none;">
          <div style="font-weight: bold; margin-bottom: 10px;">Select All that Apply</div>
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="studentInputContent">
              Student Input
            </label>
            <div id="studentInputContent" class="section-content" style="display: none;">
              <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px 18px 12px 18px; margin-top: 10px; background: #fafbfc;">
                <div style="display: flex; align-items: center; margin-bottom: 18px;">
                  <span style="font-weight: bold; margin-right: 12px;">Date of Input:</span>
                  <input type="date" class="student-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin-left: 8px;">
                </div>
                <div style="display: flex; align-items: flex-start; margin-bottom: 32px; gap: 16px;">
                  <span style="font-style: italic; min-width: 180px; margin-top: 8px; display: inline-block; line-height: 1.2;">Interests, Strengths,<br>and Needs</span>
                  <div style="flex: 1;">
                    <div id="student-interests-quill" style="min-height: 192px; background: #fff; border-radius: 4px; border: 1px solid #ccc;"></div>
                  </div>
                </div>
                <div style="display: flex; align-items: flex-start; margin-bottom: 32px; gap: 16px;">
                  <span style="font-style: italic; min-width: 180px; margin-top: 8px;">Post-Secondary Plans</span>
                  <div style="flex: 1;">
                    <div id="student-postsecondary-quill" style="min-height: 192px; background: #fff; border-radius: 4px; border: 1px solid #ccc;"></div>
                  </div>
                </div>
                <div style="display: flex; align-items: flex-start; margin-bottom: 32px; gap: 16px;">
                  <span style="font-style: italic; min-width: 180px; margin-top: 8px;">Concerns for this IEP</span>
                  <div style="flex: 1;">
                    <div id="student-concerns-quill" style="min-height: 192px; background: #fff; border-radius: 4px; border: 1px solid #ccc;"></div>
                  </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 16px;">
                  <span style="font-style: italic; min-width: 180px; margin-top: 8px;">Other Information</span>
                  <div style="flex: 1;">
                    <div id="student-other-quill" style="min-height: 192px; background: #fff; border-radius: 4px; border: 1px solid #ccc;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="nurseInputContent">
              Nurse Input
            </label>
            <div id="nurseInputContent" class="section-content" style="display: none;">
              <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px 18px 12px 18px; margin-top: 10px; background: #fafbfc;">
                <div style="display: flex; align-items: center; gap: 48px; margin-bottom: 12px; margin-top: 10px;">
                  <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                    Provided By:
                    <input type="text" class="nurse-input-provided-by" placeholder="add name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 160px;">
                  </label>
                  <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                    Date of Input:
                    <input type="date" class="nurse-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                  </label>
                </div>
                <div style="height: 24px;"></div>
                <div style="display: flex; align-items: flex-start; gap: 48px; margin-bottom: 12px; margin-top: 10px;">
                  <label style="display: flex; align-items: center; font-weight: bold; min-width: 180px; gap: 8px;">
                    Student Date of Birth:
                    <input type="date" class="nurse-input-dob" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                  </label>
                  <div style="display: flex; flex-direction: column; min-width: 220px;">
                    <label style="font-weight: bold;">Date of <i>Hearing</i> Screening:
                      <input type="date" class="nurse-input-hearing-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin-top: 4px;">
                    </label>
                    <label style="font-weight: normal; margin-top: 4px; display: flex; align-items: center; justify-content: flex-end;">
                      <span style='font-weight:bold; font-style:italic;'>Result</span>:
                      <select class="nurse-input-hearing-result" style="margin-left: 8px; padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                        <option value="">choose one</option>
                        <option value="passed">passed</option>
                        <option value="failed">failed</option>
                      </select>
                    </label>
                  </div>
                  <div style="display: flex; flex-direction: column; min-width: 220px;">
                    <label style="font-weight: bold;">Date of <i>Vision</i> Screening:
                      <input type="date" class="nurse-input-vision-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; margin-top: 4px;">
                    </label>
                    <label style="font-weight: normal; margin-top: 4px; display: flex; align-items: center; justify-content: flex-end;">
                      <span style='font-weight:bold; font-style:italic;'>Result</span>:
                      <select class="nurse-input-vision-result" style="margin-left: 8px; padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                        <option value="">choose one</option>
                        <option value="passed">passed</option>
                        <option value="failed">failed</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div style="height: 24px;"></div>
                <div style="display: flex; align-items: center; gap: 12px; margin-top: 0; margin-bottom: 0;">
                  <label style="font-weight: bold;">Does the student have educationally relevant <i>diagnoses</i>, <i>illnesses</i>, <i>surgeries</i>, or <i>allergies</i>?</label>
                  <select class="nurse-input-diagnosis-dropdown" style="margin-left: 12px; padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                    <option value="">Choose One</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <textarea class="nurse-input-diagnosis-desc" placeholder="please list" style="display: none; margin-left: 12px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 480px; width: 100%; max-width: 900px; resize: none; overflow: hidden; min-height: 40px;"></textarea>
                </div>
                <div style="height: 24px;"></div>
                <div style="display: flex; align-items: flex-start; gap: 12px; margin-top: 0; margin-bottom: 0;">
                  <label style="font-weight: bold; min-width: 340px;">Does the student have any documented <i>medication</i>?</label>
                  <select class="nurse-input-medication-dropdown" style="margin-left: 12px; padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                    <option value="">Choose One</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <textarea class="nurse-input-medication-desc" placeholder="please list" style="display: none; margin-left: 12px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 480px; width: 100%; max-width: 900px; resize: none; overflow: hidden; min-height: 40px;"></textarea>
                </div>
                <div style="height: 24px;"></div>
                <div style="display: flex; align-items: flex-start; gap: 12px; margin-top: 0; margin-bottom: 0;">
                  <label style="font-weight: bold; min-width: 340px;">Is there any other information to include?</label>
                  <select class="nurse-input-otherinfo-dropdown" style="margin-left: 12px; padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                    <option value="">Choose One</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <textarea class="nurse-input-otherinfo-desc" placeholder="add description" style="display: none; margin-left: 12px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 480px; width: 100%; max-width: 900px; resize: none; overflow: hidden; min-height: 40px;"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="guidanceInputContent">
              Guidance Counselor Input
            </label>
            <div id="guidanceInputContent" class="section-content" style="display: none;">
              <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px 18px 32px 18px; margin-top: 10px; background: #fafbfc;">
                <div style="display: flex; align-items: center; gap: 48px; margin-bottom: 12px; margin-top: 10px;">
                  <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                    Guidance Counselor Name:
                    <input type="text" class="guidance-input-name" placeholder="add name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 160px;">
                  </label>
                  <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                    Date of Input:
                    <input type="date" class="guidance-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;">
                  </label>
                </div>
                <div style="height: 24px;"></div>
                <div style="display: flex; align-items: flex-start; gap: 12px; margin-top: 0; margin-bottom: 0;">
                  <label style="font-weight: bold; min-width: 140px; margin-top: 8px;">Counselor Input:</label>
                  <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                    <div id="guidance-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="caseManagerInputContent">
              Case Manager Input
            </label>
            <div id="caseManagerInputContent" class="section-content" style="display: none;">
              <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px 18px 18px 18px; margin-top: 10px; background: #fafbfc;">
                <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 8px; margin-top: 0;">Current Programming</div>
                <div style="height: 16px;"></div>
                <div style="margin-left: 80px;">
                  <div style="display: flex; align-items: center; gap: 48px; margin-bottom: 12px; margin-top: 10px;">
                    <label style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
                      Case Manager Name:
                      <input type="text" class="case-manager-input-name" placeholder="add name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 160px;">
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; font-weight: bold; margin-left: 32px;">
                      Support Level:
                      <select class="case-manager-support-level" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px;">
                        <option value="">Choose One</option>
                        <option value="Itinerant">Itinerant</option>
                        <option value="Supplemental">Supplemental</option>
                        <option value="Full-Time">Full-Time</option>
                      </select>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; font-weight: bold; margin-left: 32px;">
                      Support Type:
                      <select class="case-manager-support-type" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                        <option value="">Choose One</option>
                        <option value="Learning Support">Learning Support</option>
                        <option value="Emotional Support">Emotional Support</option>
                        <option value="Autism Support">Autism Support</option>
                        <option value="Life Skills">Life Skills</option>
                        <option value="Other">Other</option>
                      </select>
                      <input type="text" class="case-manager-support-type-desc" placeholder="Describe Support Type" style="display: none; margin-left: 12px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 220px;">
                    </label>
                  </div>
                  <div style="height: 24px;"></div>
                  <div style="display: flex; align-items: flex-start; gap: 48px; margin-bottom: 12px; margin-top: 0;">
                    <label style="font-weight: bold; min-width: 220px;">General Education Classes:
                      <textarea class="case-manager-gened-classes" placeholder="list classes" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 320px; width: 100%; max-width: 600px; resize: none; overflow: hidden; min-height: 40px; margin-top: 8px;"></textarea>
                    </label>
                    <label style="font-weight: bold; min-width: 320px;">Special Education (Support Time/Classes/Related Services):
                      <textarea class="case-manager-sped-classes" placeholder="list classes/supports" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 320px; width: 100%; max-width: 600px; resize: none; overflow: hidden; min-height: 40px; margin-top: 8px;"></textarea>
                    </label>
                  </div>
                  <!-- Blank row/space -->
                  <div style="height: 24px;"></div>
                  <!-- Additional Programming Information (Optional) -->
                  <div style="margin-top: 0; margin-bottom: 12px;">
                    <label style="font-weight: bold; min-width: 220px; font-size: 1em; display: block; margin-bottom: 8px;">Additional Programming Information (Optional)</label>
                    <div style="min-width: 600px; max-width: 1200px; width: 100%;">
                      <div id="case-manager-additional-programming-quill-toolbar"></div>
                      <div id="case-manager-additional-programming-quill" style="min-height: 80px; background: #fff; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;"></div>
                    </div>
                  </div>
                </div>
                <!-- Two blank rows -->
                <div style="height: 24px;"></div>
                <div style="height: 24px;"></div>
                <!-- Current Performance subtitle -->
                <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 8px; margin-top: 0;">Current Performance</div>
                <!-- Blank row/space -->
                <div style="height: 24px;"></div>
                <!-- Indented section: Strengths/Needs through Additional Performance Information -->
                <div style="margin-left: 80px;">
                  <div style="display: flex; gap: 48px; margin-bottom: 0;">
                    <div style="flex: 1;">
                      <span style="font-weight: bold; font-size: 1em;">Academic/Adaptive/Social/Functional <span style='font-style: italic;'>Strengths</span>:</span>
                    </div>
                    <div style="flex: 1;">
                      <span style="font-weight: bold; font-size: 1em;">Academic/Adaptive/Social/Functional <span style='font-style: italic;'>Needs</span>:</span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 48px; margin-bottom: 12px;">
                    <div style="flex: 1;">
                      <input type="text" class="case-manager-strengths" placeholder="list strengths" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 320px; width: 100%; max-width: 600px;">
                    </div>
                    <div style="flex: 1;">
                      <input type="text" class="case-manager-needs" placeholder="list needs" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 320px; width: 100%; max-width: 600px;">
                    </div>
                  </div>
                  <!-- Blank row/space -->
                  <div style="height: 24px;"></div>
                  <!-- Additional Performance Information (Optional) -->
                  <div style="margin-top: 0; margin-bottom: 12px;">
                    <label style="font-weight: bold; min-width: 220px; font-size: 1em; display: block; margin-bottom: 8px;">Additional Performance Information (Optional)</label>
                    <div style="min-width: 600px; max-width: 1200px; width: 100%;">
                      <div id="case-manager-additional-performance-quill" style="min-height: 80px; background: #fff; border-radius: 4px; border: 1px solid #ccc; font-size: 1em;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapsible-section">
        <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="stakeholderPart2Content">
          <span class="toggle-icon">+</span> Teacher, Service Provider & Other Stakeholder Input
        </button>
        <div id="stakeholderPart2Content" class="section-content" style="display: none;">
          <div style="font-weight: bold; margin-bottom: 10px;">Select All that Apply</div>
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="genEdInputContent">
              General Education Teacher Input
            </label>
            <div id="genEdInputContent" class="section-content" style="display: none;">
              <div id="gened-teacher-inputs-container">
                <div class="gened-teacher-input-block">
                  <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
                    <div style="display: flex; align-items: center; gap: 48px; margin-bottom: 12px; margin-top: 10px;">
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 120px;">
                        Title:
                        <select class="gened-teacher-input-title" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 110px; margin-right: 24px;">
                          <option value="">choose one</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 160px;">
                        First Name:
                        <input type="text" class="gened-teacher-input-first" placeholder="first name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px; margin-right: 24px;">
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 160px;">
                        Last Name:
                        <input type="text" class="gened-teacher-input-last" placeholder="last name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px; margin-right: 24px;">
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 180px;">
                        Subject Area:
                        <input type="text" class="gened-teacher-input-subject" placeholder="add subject" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 120px; margin-right: 24px;">
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 180px;">
                        Date of Input:
                        <input type="date" class="gened-teacher-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 120px; margin-right: 24px;">
                      </label>
                    </div>
                    <div style="height: 24px;"></div>
                    <div style="display: flex; align-items: flex-start; gap: 16px;">
                      <label style="font-weight: bold; min-width: 140px; margin-top: 8px;">Teacher Input:</label>
                      <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                        <div class="gened-teacher-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" id="add-gened-teacher-btn" class="sdi-btn" style="margin-top: 18px;">+Teacher</button>
            </div>
          </div>
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="specEdInputContent">
              Special Education Teacher Input
            </label>
            <div id="specEdInputContent" class="section-content" style="display: none;">
              <div id="speced-teacher-inputs-container">
                <div class="speced-teacher-input-block">
                  <div style="border: 1px solid #bbb; border-radius: 8px; padding: 18px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
                    <div style="display: flex; align-items: center; gap: 64px; margin-bottom: 12px; margin-top: 10px; flex-wrap: nowrap;">
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 160px;">
                        <span>Title:</span>
                        <select class="speced-teacher-input-title" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px;">
                          <option value="">choose one</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                        <span>First Name:</span>
                        <input type="text" class="speced-teacher-input-first" placeholder="first name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                        <span>Last Name:</span>
                        <input type="text" class="speced-teacher-input-last" placeholder="last name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 220px;">
                        <span>Subject Area:</span>
                        <input type="text" class="speced-teacher-input-subject" placeholder="add subject" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 200px;">
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 120px; margin-right: 24px;">
                        Co-Teacher?
                        <input type="checkbox" class="speced-teacher-co-teacher" style="margin-left: 8px;">
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                        <span>Date of Input:</span>
                        <input type="date" class="speced-teacher-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                      </label>
                    </div>
                    <div style="height: 24px;"></div>
                    <div style="display: flex; align-items: flex-start; gap: 16px;">
                      <label style="font-weight: bold; min-width: 140px; margin-top: 8px;">Teacher Input:</label>
                      <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                        <div class="speced-teacher-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" id="add-speced-teacher-btn" class="sdi-btn" style="margin-top: 18px;">+Teacher</button>
            </div>
          </div>
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="relatedServiceInputContent">
              Related Service Provider Input
            </label>
            <div id="relatedServiceInputContent" class="section-content" style="display: none;">
              <div id="provider-inputs-container">
                <div class="provider-input-block">
                  <div style="border: 1px solid #bbb; border-radius: 8px; padding: 64px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
                    <div style="display: flex; align-items: center; gap: 64px; margin-bottom: 12px; margin-top: 10px; flex-wrap: nowrap;">
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 280px;">
                        Service Provided:
                        <select class="provider-input-service" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px; margin-right: 24px;">
                          <option value="">Choose One</option>
                          <option value="SLP">SLP</option>
                          <option value="OT">OT</option>
                          <option value="PT">PT</option>
                          <option value="AS">AS</option>
                          <option value="ES">ES</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 180px;">
                        Title:
                        <select class="provider-input-title" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 120px; margin-right: 24px;">
                          <option value="">choose one</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 200px;">
                        First Name:
                        <input type="text" class="provider-input-first" placeholder="first name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px; margin-right: 24px;">
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 200px;">
                        Last Name:
                        <input type="text" class="provider-input-last" placeholder="last name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px; margin-right: 24px;">
                      </label>
                      <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 200px;">
                        Date of Input:
                        <input type="date" class="provider-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px; margin-right: 24px;">
                      </label>
                    </div>
                    <div class="provider-service-desc-row" style="display:none; margin-top: 6px;">
                      <input type="text" class="provider-input-service-desc" placeholder="describe" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; width: 240px; max-width: 240px;">
                    </div>
                    <div style="height: 24px;"></div>
                    <div style="display: flex; align-items: flex-start; gap: 16px;">
                      <label style="font-weight: bold; min-width: 140px; margin-top: 8px;">Provider Input:</label>
                      <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                        <div class="provider-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" id="add-provider-btn" class="sdi-btn" style="margin-top: 18px;">+Provider</button>
            </div>
          </div>
          <!-- New checkbox toggle for Other Stakeholder Input -->
          <div class="collapsible-section">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" class="stakeholder-toggle" data-target="otherStakeholderContent">
              Other Stakeholder Input
            </label>
            <div id="otherStakeholderContent" class="section-content" style="display: none;">
              <div id="other-stakeholder-inputs-container">
                <div class="other-stakeholder-input-block">
                  <div style="border: 1px solid #bbb; border-radius: 8px; padding: 64px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
                    <button type='button' class='remove-other-stakeholder-btn remove-sdi-btn' style='position: absolute; top: 12px; right: 12px; min-width: 110px; padding: 4px 18px; display:none;'>-Stakeholder</button>
                    <div style="display: flex; align-items: center; gap: 96px; margin-bottom: 12px; margin-top: 10px; flex-wrap: wrap;">
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 160px;">
                        <span>Title:</span>
                        <select class="other-stakeholder-input-title" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px;">
                          <option value="">choose one</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                        <span>First Name:</span>
                        <input type="text" class="other-stakeholder-input-first" placeholder="first name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                        <span>Last Name:</span>
                        <input type="text" class="other-stakeholder-input-last" placeholder="last name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 220px;">
                        <span>Service Provided:</span>
                        <input type="text" class="other-stakeholder-input-service" placeholder="service" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 200px;">
                      </label>
                      <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                        <span>Date of Input:</span>
                        <input type="date" class="other-stakeholder-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
                      </label>
                    </div>
                    <div style="height: 24px;"></div>
                    <div style="display: flex; align-items: flex-start; gap: 16px;">
                      <label style="font-weight: bold; min-width: 160px; margin-top: 8px;">Stakeholder Input:</label>
                      <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                        <div class="other-stakeholder-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" id="add-other-stakeholder-btn" class="sdi-btn" style="margin-top: 18px;">+Stakeholder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  // Add collapsible logic (copied from PLAA)
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
  // Add checkbox show/hide logic for internal sections
  const stakeholderToggles = container.querySelectorAll('.stakeholder-toggle');
  stakeholderToggles.forEach(cb => {
    cb.addEventListener('change', function() {
      const target = container.querySelector('#' + cb.getAttribute('data-target'));
      if (target) target.style.display = cb.checked ? 'block' : 'none';
    });
  });
  // Add Quill rich text editors for the four student input fields
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
      new Quill('#student-interests-quill', {
        modules: { toolbar: toolbarOptions },
        theme: 'snow',
        placeholder: 'Add description if applicable, otherwise leave blank'
      });
      new Quill('#student-postsecondary-quill', {
        modules: { toolbar: toolbarOptions },
        theme: 'snow',
        placeholder: 'Add description if applicable, otherwise leave blank'
      });
      new Quill('#student-concerns-quill', {
        modules: { toolbar: toolbarOptions },
        theme: 'snow',
        placeholder: 'Add description if applicable, otherwise leave blank'
      });
      new Quill('#student-other-quill', {
        modules: { toolbar: toolbarOptions },
        theme: 'snow',
        placeholder: 'Add description if applicable, otherwise leave blank'
      });
    }
  }, 0);
  // Initialize Quill and add/remove logic for Other Stakeholder blocks
  setTimeout(() => {
    function initOtherQuill(block) {
      const q = block.querySelector('.other-stakeholder-input-quill');
      if (q && !q._quill && window.Quill) {
        const toolbarOptions = [
          [{ font: [] }, { size: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link'],
          ['clean']
        ];
        const quill = new Quill(q, { modules: { toolbar: toolbarOptions }, theme: 'snow', placeholder: 'Add stakeholder input here...' });
        q._quill = quill;
      }
    }
    const otherContainer = document.getElementById('other-stakeholder-inputs-container');
    const addOtherBtn = document.getElementById('add-other-stakeholder-btn');
    if (otherContainer) {
      initOtherQuill(otherContainer.querySelector('.other-stakeholder-input-block'));
    }
    if (addOtherBtn && otherContainer) {
      addOtherBtn.onclick = () => {
        const block = document.createElement('div');
        block.className = 'other-stakeholder-input-block';
        block.innerHTML = `
          <div style="border: 1px solid #bbb; border-radius: 8px; padding: 64px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
            <button type='button' class='remove-other-stakeholder-btn remove-sdi-btn' style='position: absolute; top: 12px; right: 12px; min-width: 110px; padding: 4px 18px;'>-Stakeholder</button>
            <div style="display: flex; align-items: center; gap: 96px; margin-bottom: 12px; margin-top: 10px; flex-wrap: wrap;">
              <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 160px;">
                <span>Title:</span>
                <select class="other-stakeholder-input-title" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px;">
                  <option value="">choose one</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                </select>
              </label>
              <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                <span>First Name:</span>
                <input type="text" class="other-stakeholder-input-first" placeholder="first name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
              </label>
              <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                <span>Last Name:</span>
                <input type="text" class="other-stakeholder-input-last" placeholder="last name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
              </label>
              <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 220px;">
                <span>Service Provided:</span>
                <input type="text" class="other-stakeholder-input-service" placeholder="service" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 200px;">
              </label>
              <label style="font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;">
                <span>Date of Input:</span>
                <input type="date" class="other-stakeholder-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;">
              </label>
            </div>
            <div style="height: 24px;"></div>
            <div style="display: flex; align-items: flex-start; gap: 16px;">
              <label style="font-weight: bold; min-width: 160px; margin-top: 8px;">Stakeholder Input:</label>
              <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
                <div class="other-stakeholder-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
              </div>
            </div>
          </div>
        `;
        otherContainer.appendChild(block);
        initOtherQuill(block);
        const removeBtn = block.querySelector('.remove-other-stakeholder-btn');
        if (removeBtn) removeBtn.onclick = () => block.remove();
      };
    }
  }, 0);
  // Show/hide logic for nurse diagnosis description
  setTimeout(() => {
    const diagnosisDropdown = container.querySelector('.nurse-input-diagnosis-dropdown');
    const diagnosisDesc = container.querySelector('.nurse-input-diagnosis-desc');
    if (diagnosisDropdown && diagnosisDesc) {
      diagnosisDropdown.addEventListener('change', function() {
        if (diagnosisDropdown.value === 'yes') {
          diagnosisDesc.style.display = 'inline-block';
        } else {
          diagnosisDesc.style.display = 'none';
          diagnosisDesc.value = '';
        }
      });
    }
  }, 0);
  // Auto-expand nurse diagnosis description box
  setTimeout(() => {
    const diagnosisDesc = container.querySelector('.nurse-input-diagnosis-desc');
    if (diagnosisDesc) {
      diagnosisDesc.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight + 2) + 'px';
      });
      // Initial height
      diagnosisDesc.style.height = diagnosisDesc.scrollHeight + 'px';
    }
  }, 0);
  // Auto-expand nurse medication description box
  setTimeout(() => {
    const medicationDropdown = container.querySelector('.nurse-input-medication-dropdown');
    const medicationDesc = container.querySelector('.nurse-input-medication-desc');
    if (medicationDropdown && medicationDesc) {
      medicationDropdown.addEventListener('change', function() {
        if (medicationDropdown.value === 'yes') {
          medicationDesc.style.display = 'inline-block';
        } else {
          medicationDesc.style.display = 'none';
          medicationDesc.value = '';
        }
      });
      medicationDesc.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight + 2) + 'px';
      });
      medicationDesc.style.height = medicationDesc.scrollHeight + 'px';
    }
  }, 0);
  // Auto-expand nurse other info description box
  setTimeout(() => {
    const otherInfoDropdown = container.querySelector('.nurse-input-otherinfo-dropdown');
    const otherInfoDesc = container.querySelector('.nurse-input-otherinfo-desc');
    if (otherInfoDropdown && otherInfoDesc) {
      otherInfoDropdown.addEventListener('change', function() {
        if (otherInfoDropdown.value === 'yes') {
          otherInfoDesc.style.display = 'inline-block';
        } else {
          otherInfoDesc.style.display = 'none';
          otherInfoDesc.value = '';
        }
      });
      otherInfoDesc.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight + 2) + 'px';
      });
      otherInfoDesc.style.height = otherInfoDesc.scrollHeight + 'px';
    }
  }, 0);
  // Add Quill rich text editor for guidance counselor input
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
      if (!window.guidanceQuill) {
        // Create a toolbar container inside the box
        const quillBox = document.getElementById('guidance-input-quill');
        if (quillBox && !quillBox.querySelector('.ql-toolbar')) {
          const toolbarDiv = document.createElement('div');
          toolbarDiv.id = 'guidance-input-quill-toolbar';
          quillBox.parentNode.insertBefore(toolbarDiv, quillBox);
          quillBox.parentNode.appendChild(quillBox);
        }
        window.guidanceQuill = new Quill('#guidance-input-quill', {
          modules: { toolbar: toolbarOptions },
          theme: 'snow',
          placeholder: 'Add description if applicable, otherwise leave blank'
        });
      }
    }
  }, 0);
  // Show/hide logic for case manager support type description
  setTimeout(() => {
    const supportTypeDropdown = container.querySelector('.case-manager-support-type');
    const supportTypeDesc = container.querySelector('.case-manager-support-type-desc');
    if (supportTypeDropdown && supportTypeDesc) {
      supportTypeDropdown.addEventListener('change', function() {
        if (supportTypeDropdown.value === 'Other') {
          supportTypeDesc.style.display = 'inline-block';
        } else {
          supportTypeDesc.style.display = 'none';
          supportTypeDesc.value = '';
        }
      });
    }
  }, 0);
  // Auto-expand case manager class textareas
  setTimeout(() => {
    const genedTextarea = container.querySelector('.case-manager-gened-classes');
    const spedTextarea = container.querySelector('.case-manager-sped-classes');
    [genedTextarea, spedTextarea].forEach(textarea => {
      if (textarea) {
        textarea.addEventListener('input', function() {
          this.style.height = 'auto';
          this.style.height = (this.scrollHeight + 2) + 'px';
        });
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    });
  }, 0);
  // Add Quill rich text editor for additional programming information
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
      if (!window.additionalProgrammingQuill) {
        window.additionalProgrammingQuill = new Quill('#case-manager-additional-programming-quill', {
          modules: { toolbar: toolbarOptions },
          theme: 'snow',
          placeholder: 'Add description if applicable, otherwise leave blank'
        });
      }
      // Additional Performance Information RTE
      if (!window.additionalPerformanceQuill) {
        window.additionalPerformanceQuill = new Quill('#case-manager-additional-performance-quill', {
          modules: { toolbar: toolbarOptions },
          theme: 'snow',
          placeholder: 'Add description if applicable, otherwise leave blank'
        });
      }
    }
  }, 0);
  // Removed stray single-element Quill init for General Ed teacher input to avoid invalid container errors
}

// Add JS logic after Quill initializations:
setTimeout(() => {
  const container = document.getElementById('gened-teacher-inputs-container');
  const addBtn = document.getElementById('add-gened-teacher-btn');
  let teacherCount = 1;
  function initQuillForBlock(block) {
    const quillDiv = block.querySelector('.gened-teacher-input-quill');
    if (quillDiv && !quillDiv._quill && window.Quill) {
      const toolbarOptions = [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean']
      ];
      const quill = new Quill(quillDiv, {
        modules: { toolbar: toolbarOptions },
        theme: 'snow',
        placeholder: 'Add teacher input here...'
      });
      quillDiv._quill = quill;
    }
  }
  // Initialize Quill for the first block
  initQuillForBlock(container.querySelector('.gened-teacher-input-block'));
  addBtn.onclick = function() {
    teacherCount++;
    const block = document.createElement('div');
    block.className = 'gened-teacher-input-block';
    block.innerHTML = `
      <div style="border: 1px solid #bbb; border-radius: 8px; padding: 64px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
        <button type='button' class='remove-gened-teacher-btn remove-sdi-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px;'>-Teacher</button>
        <div style="display: flex; align-items: center; gap: 48px; margin-bottom: 12px; margin-top: 10px;">
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 120px;">
            Title:
            <select class="gened-teacher-input-title" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 110px; margin-right: 24px;">
              <option value="">choose one</option>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
            </select>
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 160px;">
            First Name:
            <input type="text" class="gened-teacher-input-first" placeholder="first name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px; margin-right: 24px;">
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 160px;">
            Last Name:
            <input type="text" class="gened-teacher-input-last" placeholder="last name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px; margin-right: 24px;">
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 180px;">
            Subject Area:
            <input type="text" class="gened-teacher-input-subject" placeholder="add subject" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 120px; margin-right: 24px;">
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 180px;">
            Date of Input:
            <input type="date" class="gened-teacher-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 120px; margin-right: 24px;">
          </label>
        </div>
        <div style="height: 24px;"></div>
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <label style="font-weight: bold; min-width: 140px; margin-top: 8px;">Teacher Input:</label>
          <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
            <div class="gened-teacher-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(block);
    initQuillForBlock(block);
    block.querySelector('.remove-gened-teacher-btn').onclick = function() {
      block.remove();
    };
  };
}, 0);

setTimeout(() => {
  const container = document.getElementById('speced-teacher-inputs-container');
  const addBtn = document.getElementById('add-speced-teacher-btn');
  function initQuillForBlock(block) {
    const quillDiv = block.querySelector('.speced-teacher-input-quill');
    if (quillDiv && !quillDiv._quill && window.Quill) {
      const toolbarOptions = [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean']
      ];
      const quill = new Quill(quillDiv, {
        modules: { toolbar: toolbarOptions },
        theme: 'snow',
        placeholder: 'Add teacher input here...'
      });
      quillDiv._quill = quill;
    }
  }
  // Initialize Quill for the first block
  initQuillForBlock(container.querySelector('.speced-teacher-input-block'));
  addBtn.onclick = function() {
    const block = document.createElement('div');
    block.className = 'speced-teacher-input-block';
    block.innerHTML = `
      <div style="border: 1px solid #bbb; border-radius: 8px; padding: 48px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
        <button type='button' class='remove-speced-teacher-btn remove-sdi-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px;'>-Teacher</button>
        <div style=\"display: flex; align-items: center; gap: 64px; margin-bottom: 12px; margin-top: 10px; flex-wrap: wrap;\">
          <label style=\"font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 160px;\">
            <span>Title:</span>
            <select class=\"speced-teacher-input-title\" style=\"padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px;\">
              <option value=\"\">choose one</option>
              <option value=\"Dr.\">Dr.</option>
              <option value=\"Mr.\">Mr.</option>
              <option value=\"Ms.\">Ms.</option>
            </select>
          </label>
          <label style=\"font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;\">
            <span>First Name:</span>
            <input type=\"text\" class=\"speced-teacher-input-first\" placeholder=\"first name\" style=\"padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;\">
          </label>
          <label style=\"font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;\">
            <span>Last Name:</span>
            <input type=\"text\" class=\"speced-teacher-input-last\" placeholder=\"last name\" style=\"padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;\">
          </label>
          <label style=\"font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 220px;\">
            <span>Subject Area:</span>
            <input type=\"text\" class=\"speced-teacher-input-subject\" placeholder=\"add subject\" style=\"padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 200px;\">
          </label>
          <label style=\"font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 120px; margin-right: 24px;\">
            Co-Teacher?
            <input type=\"checkbox\" class=\"speced-teacher-co-teacher\" style=\"margin-left: 8px;\">
          </label>
          <label style=\"font-weight: bold; display: flex; flex-direction: column; gap: 6px; min-width: 200px;\">
            <span>Date of Input:</span>
            <input type=\"date\" class=\"speced-teacher-input-date\" style=\"padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px;\">
          </label>
        </div>
        <div style="height: 24px;"></div>
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <label style="font-weight: bold; min-width: 140px; margin-top: 8px;">Teacher Input:</label>
          <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
            <div class="speced-teacher-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(block);
    initQuillForBlock(block);
    block.querySelector('.remove-speced-teacher-btn').onclick = function() {
      block.remove();
    };
  };
}, 0);

setTimeout(() => {
  const container = document.getElementById('provider-inputs-container');
  const addBtn = document.getElementById('add-provider-btn');
  function initQuillForBlock(block) {
    const quillDiv = block.querySelector('.provider-input-quill');
    if (quillDiv && !quillDiv._quill && window.Quill) {
      const toolbarOptions = [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean']
      ];
      const quill = new Quill(quillDiv, {
        modules: { toolbar: toolbarOptions },
        theme: 'snow',
        placeholder: 'Add provider input here...'
      });
      quillDiv._quill = quill;
    }
    // Show/hide logic for 'Other' service description
    const serviceDropdown = block.querySelector('.provider-input-service');
    const serviceDesc = block.querySelector('.provider-input-service-desc');
    if (serviceDropdown) {
      const descInline = block.querySelector('label .provider-input-service-desc');
      const descRow = block.querySelector('.provider-service-desc-row');
      serviceDropdown.addEventListener('change', function() {
        const isOther = serviceDropdown.value === 'Other';
        if (descInline) descInline.style.display = 'none';
        if (descRow) descRow.style.display = isOther ? 'block' : 'none';
        if (!isOther && descRow) {
          const input = descRow.querySelector('.provider-input-service-desc');
          if (input) input.value = '';
        }
      });
    }
  }
  // Initialize Quill and dropdown for the first block
  initQuillForBlock(container.querySelector('.provider-input-block'));
  addBtn.onclick = function() {
    const block = document.createElement('div');
    block.className = 'provider-input-block';
    block.innerHTML = `
      <div style="border: 1px solid #bbb; border-radius: 8px; padding: 64px 18px 32px 18px; margin-top: 10px; background: #fafbfc; position: relative;">
        <button type='button' class='remove-provider-btn remove-sdi-btn' style='position: absolute; top: 12px; right: 12px; min-width: 90px; padding: 4px 18px;'>-Provider</button>
        <div style="display: flex; align-items: center; gap: 64px; margin-bottom: 12px; margin-top: 10px; flex-wrap: nowrap;">
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 280px;">
            Service Provided:
            <select class="provider-input-service" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 140px; margin-right: 24px;">
              <option value="">Choose One</option>
              <option value="SLP">SLP</option>
              <option value="OT">OT</option>
              <option value="PT">PT</option>
              <option value="AS">AS</option>
              <option value="ES">ES</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 180px;">
            Title:
            <select class="provider-input-title" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 120px; margin-right: 24px;">
              <option value="">choose one</option>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
            </select>
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 200px;">
            First Name:
            <input type="text" class="provider-input-first" placeholder="first name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px; margin-right: 24px;">
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 200px;">
            Last Name:
            <input type="text" class="provider-input-last" placeholder="last name" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px; margin-right: 24px;">
          </label>
          <label style="font-weight: bold; display: flex; align-items: center; gap: 8px; min-width: 200px;">
            Date of Input:
            <input type="date" class="provider-input-date" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; min-width: 180px; margin-right: 24px;">
          </label>
        </div>
        <div class="provider-service-desc-row" style="display:none; margin-top: 6px;">
          <input type="text" class="provider-input-service-desc" placeholder="describe" style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 1em; width: 240px; max-width: 240px;">
        </div>
        <div style="height: 24px;"></div>
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <label style="font-weight: bold; min-width: 140px; margin-top: 8px;">Provider Input:</label>
          <div style="flex: 1; min-width: 600px; max-width: 1400px; width: 100%;">
            <div class="provider-input-quill" style="min-height: 96px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(block);
    initQuillForBlock(block);
    block.querySelector('.remove-provider-btn').onclick = function() {
      block.remove();
    };
  };
}, 0); 