export function createTransitionAgencyForm(container) {
  container.innerHTML = `
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="agencyOvrContent">
        <span class="toggle-icon">+</span> OVR
      </button>
      <div id="agencyOvrContent" class="section-content" style="display: none;">
        <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; gap: 8px; margin-left: 0;">
          <label style="font-weight: 600;">Select One</label>
          <div style="display:flex; flex-direction: column; gap: 8px; align-items: flex-start; width: 100%;">
            <div style="width: 100%;">
              <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
                <input type="checkbox" id="agency-ovr-yes"> Student Currently Participates with OVR
              </label>
              <div id="agency-ovr-yes-card" class="section-content" style="display:none; width: 100%; max-width: 1200px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin: 8px auto 0 auto; background: #fafbfc;"></div>
            </div>
            <div style="width: 100%;">
              <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
                <input type="checkbox" id="agency-ovr-no"> Student does not currently participate with OVR
              </label>
              <div id="agency-ovr-no-card" class="section-content" style="display:none; width: 100%; max-width: 1200px; border: 1px solid #bbb; border-radius: 8px; padding: 18px; margin: 8px auto 0 auto; background: #fafbfc;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapsible-section">
      <button type="button" class="section-toggle-btn" aria-expanded="false" aria-controls="agencyOtherContent">
        <span class="toggle-icon">+</span> Other Agencies
      </button>
      <div id="agencyOtherContent" class="section-content" style="display: none;">
        <div style="text-align: center; font-weight: 600; font-size: 1.15rem; margin-bottom: 26px;">Leave Blank if Not Applicable</div>
        <div id="agency-other-list" style="width: 100%;"></div>
        <div style="display:flex; justify-content: flex-start; margin-top: 18px;">
          <button type="button" id="agency-add-btn" class="progress-period-btn">+Agency</button>
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

  const yes = container.querySelector('#agency-ovr-yes');
  const no = container.querySelector('#agency-ovr-no');
  const yesCard = container.querySelector('#agency-ovr-yes-card');
  const noCard = container.querySelector('#agency-ovr-no-card');

  // Initialize YES card content
  if (yesCard) {
    yesCard.innerHTML = `
      <div class="goal-text-row" style="align-items: center;">
        <label>Parent Name:</label>
        <input type="text" id="agency-parent-name-yes" placeholder="Name" style="flex:1; min-width: 260px; max-width: 600px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 0.95rem;" />
      </div>
      <div style="height: 16px;"></div>
      <div class="goal-text-row" style="align-items: center;">
        <label>Agency Rep:</label>
        <input type="text" id="agency-ovr-rep" placeholder="Name" style="flex:1; min-width: 260px; max-width: 600px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 0.95rem;" />
      </div>
      <div style="height: 16px;"></div>
      <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; gap: 8px;">
        <label style="font-weight: 600;">Choose One:</label>
        <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
          <input type="checkbox" id="agency-ovr-invite-yes"> parent agreed to invite an OVR rep to the meeting
        </label>
        <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
          <input type="checkbox" id="agency-ovr-invite-no"> parent declined to invite OVR rep to the meeting
        </label>
      </div>
      <div style="height: 16px;"></div>
      <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; gap: 8px;">
        <label style="font-weight: 600;">Describe OVR Participation (Optional):</label>
        <div style="flex:1; width: 100%;">
          <div id="agency-ovr-participation-quill" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
      </div>
    `;
  }

  // Initialize NO card content
  if (noCard) {
    noCard.innerHTML = `
      <div class="goal-text-row" style="align-items: center;">
        <label>Parent Name:</label>
        <input type="text" id="agency-parent-name" placeholder="Name" style="flex:1; min-width: 260px; max-width: 600px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 0.95rem;" />
      </div>
      <div style="height: 18px;"></div>
      <div class="goal-text-row" style="align-items: center;">
        <label>Agency Rep:</label>
        <input type="text" id="agency-ovr-rep-no" placeholder="Name" style="flex:1; min-width: 260px; max-width: 600px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 0.95rem;" />
      </div>
      <div style="height: 18px;"></div>
      <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; gap: 8px;">
        <label style="font-weight: 600;">Choose One:</label>
        <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
          <input type="checkbox" id="agency-parent-invite-yes"> parent agreed to invite an OVR rep to the meeting
        </label>
        <label style="display:flex; align-items:center; gap:8px; cursor: pointer; font-weight: normal;">
          <input type="checkbox" id="agency-parent-invite-no"> parent declined to invite OVR rep to the meeting
        </label>
      </div>
    `;
  }

  const sync = function() {
    if (this === yes && yes.checked) no.checked = false;
    if (this === no && no.checked) yes.checked = false;
    if (yesCard) yesCard.style.display = yes && yes.checked ? 'block' : 'none';
    if (noCard) noCard.style.display = no && no.checked ? 'block' : 'none';
  };
  if (yes) yes.addEventListener('change', sync);
  if (no) no.addEventListener('change', sync);

  // Mutually exclusive selection for parent invite choices
  const inviteYes = container.querySelector('#agency-parent-invite-yes');
  const inviteNo = container.querySelector('#agency-parent-invite-no');
  const syncInvite = function() {
    if (this === inviteYes && inviteYes?.checked && inviteNo) inviteNo.checked = false;
    if (this === inviteNo && inviteNo?.checked && inviteYes) inviteYes.checked = false;
  };
  if (inviteYes) inviteYes.addEventListener('change', syncInvite);
  if (inviteNo) inviteNo.addEventListener('change', syncInvite);

  // Mutually exclusive selection for YES card invite choices
  const inviteYesOvr = container.querySelector('#agency-ovr-invite-yes');
  const inviteNoOvr = container.querySelector('#agency-ovr-invite-no');
  const syncInviteOvr = function() {
    if (this === inviteYesOvr && inviteYesOvr?.checked && inviteNoOvr) inviteNoOvr.checked = false;
    if (this === inviteNoOvr && inviteNoOvr?.checked && inviteYesOvr) inviteYesOvr.checked = false;
  };
  if (inviteYesOvr) inviteYesOvr.addEventListener('change', syncInviteOvr);
  if (inviteNoOvr) inviteNoOvr.addEventListener('change', syncInviteOvr);

  // Initialize Quill for Other Agencies Summary
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
      // Editors will be created per card below
      // OVR describe participation editor
      if (!window.agencyOvrParticipationQuill) {
        const el = document.getElementById('agency-ovr-participation-quill');
        if (el) {
          window.agencyOvrParticipationQuill = new Quill('#agency-ovr-participation-quill', { modules: { toolbar }, theme: 'snow', placeholder: 'Add participation details, services, coordination notes, etc.' });
        }
      }
    }
  }, 0);

  // Dynamic Other Agency cards
  const list = container.querySelector('#agency-other-list');
  const addBtn = container.querySelector('#agency-add-btn');

  const createAgencyCard = () => {
    const idx = list.querySelectorAll('.agency-card').length + 1;
    const card = document.createElement('div');
    card.className = 'agency-card';
    card.style.border = '1px solid #bbb';
    card.style.borderRadius = '8px';
    card.style.padding = '18px';
    card.style.background = '#fafbfc';
    card.style.width = '100%';
    card.style.marginBottom = '24px';

    const nameId = `agency-other-name-${idx}`;
    const quillId = `agency-other-summary-quill-${idx}`;

    card.innerHTML = `
      <div class="goal-text-row" style="align-items: center;">
        <label style="font-weight: 600; min-width: 130px;">Agency Name:</label>
        <input type="text" id="${nameId}" placeholder="Type agency name..." style="flex:1; min-width: 260px; max-width: 1000px; padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc; font-size: 0.95rem;" />
      </div>
      <div style="height: 14px;"></div>
      <div class="goal-text-row" style="flex-direction: column; align-items: flex-start; gap: 8px;">
        <label style="font-weight: 600;">Summary of Agency Involvement:</label>
        <div style="flex:1; width: 100%;">
          <div id="${quillId}" style="min-height: 140px; background: #fff; border-radius: 4px; border: 1px solid #ccc; width: 100%;"></div>
        </div>
      </div>
      <div style="display:flex; justify-content: flex-end; margin-top: 10px;">
        <button type="button" class="progress-period-btn agency-remove-btn" style="display:none;">-Agency</button>
      </div>
    `;

    list.appendChild(card);

    // Initialize quill for this card
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
        if (!card.__quill && document.getElementById(quillId)) {
          card.__quill = new Quill('#' + quillId, { modules: { toolbar }, theme: 'snow', placeholder: 'Add a brief summary of participation, services, contact notes, etc.' });
        }
      }
    }, 0);

    // Show remove button for 2nd+ cards
    const removeBtn = card.querySelector('.agency-remove-btn');
    const updateRemoveVisibility = () => {
      const count = list.querySelectorAll('.agency-card').length;
      list.querySelectorAll('.agency-card .agency-remove-btn').forEach((btn, i) => {
        btn.style.display = count > 1 && i > 0 ? 'inline-block' : 'none';
      });
    };
    removeBtn.addEventListener('click', () => {
      list.removeChild(card);
      updateRemoveVisibility();
    });
    updateRemoveVisibility();
  };

  // Ensure at least one card exists
  if (list && list.querySelectorAll('.agency-card').length === 0) {
    createAgencyCard();
  }
  if (addBtn) addBtn.addEventListener('click', createAgencyCard);
}


