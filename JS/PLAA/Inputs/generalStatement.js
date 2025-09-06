export function createGeneralStatementForm(container) {
  container.innerHTML = `
    <form class="general-statement-form">
      <div class="grid-form-row">
        <div class="grid-field">
          <label for="firstName"><strong>First Name:</strong></label>
          <input type="text" id="firstName" name="firstName" class="short row1-wide" />
        </div>
        <div class="grid-field">
          <label for="school"><strong>School:</strong></label>
          <input type="text" id="school" name="school" class="short row1-wide" />
        </div>
      </div>
      <div class="grid-form-row">
        <div class="grid-field">
          <label for="grade"><strong>Current Grade:</strong></label>
          <select id="grade" name="grade" class="short">
            <option value="">Choose One</option>
            <option>Kindergarten</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
            <option>9th</option>
            <option>10th</option>
            <option>11th</option>
            <option>12th</option>
          </select>
        </div>
        <div class="grid-field">
          <label for="gradYear"><strong>Graduation Year:</strong></label>
          <select id="gradYear" name="gradYear" class="short">
            <option value="">Choose One</option>
          </select>
        </div>
      </div>
      <div class="grid-form-row" id="pronouns-row">
        <div class="grid-field">
          <label for="pronouns"><strong>Pronouns:</strong></label>
          <select id="pronouns" name="pronouns" class="short">
            <option value="">Choose One</option>
            <option>She/her/her</option>
            <option>He/him/his</option>
            <option>They/them/their</option>
            <option>Custom</option>
          </select>
        </div>
        <div class="grid-field" id="custom-pronouns-fields" style="display:none; gap:0.5rem;">
          <input type="text" id="pronoun-subject" class="short custom-pronoun-box" placeholder="Subject (e.g. they)" />
          <input type="text" id="pronoun-object" class="short custom-pronoun-box" placeholder="Object (e.g. them)" />
          <input type="text" id="pronoun-possessive" class="short custom-pronoun-box" placeholder="Possessive (e.g. their)" />
        </div>
      </div>
      <div class="grid-form-row">
        <div class="grid-field gap-sm">
          <label for="primaryDisability" class="disability-label"><strong>Primary Disability:</strong></label>
          <select id="primaryDisability" name="primaryDisability" class="short">
            <option value="">Choose One</option>
            <option>SLD</option>
            <option>SLP</option>
            <option>OHI</option>
            <option>Autism</option>
            <option>IDD</option>
            <option>Emotional Disturbance</option>
            <option>Developmental Delay</option>
            <option>Multiple Disabilities</option>
            <option>Hearing Impairment</option>
            <option>Visual Impairment</option>
            <option>Traumatic Brain Injury</option>
            <option>Deaf-Blindness</option>
          </select>
          <input type="text" id="primaryDisabilitySpecify" class="short" placeholder="Optional: Specify" />
        </div>
      </div>
      <div class="grid-form-row">
        <div class="grid-field gap-xs gap-sm">
          <label class="secondary-disability-toggle disability-label">
            <input type="checkbox" id="addSecondaryDisability" name="addSecondaryDisability" />
            <span><strong>Add a Secondary Disability?</strong></span>
          </label>
          <select id="secondaryDisability" name="secondaryDisability" class="short">
            <option value="">Choose One</option>
            <option>SLD</option>
            <option>SLP</option>
            <option>OHI</option>
            <option>Autism</option>
            <option>IDD</option>
            <option>Emotional Disturbance</option>
            <option>Developmental Delay</option>
            <option>Multiple Disabilities</option>
            <option>Hearing Impairment</option>
            <option>Visual Impairment</option>
            <option>Traumatic Brain Injury</option>
            <option>Deaf-Blindness</option>
          </select>
          <input type="text" id="secondaryDisabilitySpecify" class="short" placeholder="Optional: Specify" />
        </div>
      </div>
      <div class="grid-form-row"></div>
      <div class="grid-form-row">
        <div class="grid-field">
          <label for="additionalInfoRTE"><strong>Additional Information:</strong></label>
        </div>
      </div>
      <div class="grid-form-row rte-row-bg">
        <div class="grid-field rte-full-width" style="grid-column: 1 / -1;">
          <div id="additionalInfoRTE" style="height: 200px;"></div>
        </div>
      </div>
    </form>
  `;

  // Populate graduation years 2025-2045
  const gradYearSelect = container.querySelector('#gradYear');
  for (let year = 2025; year <= 2045; year++) {
    const opt = document.createElement('option');
    opt.value = year;
    opt.textContent = year;
    gradYearSelect.appendChild(opt);
  }

  // Pronouns custom fields show/hide logic
  const pronounsSelect = container.querySelector('#pronouns');
  const customFields = container.querySelector('#custom-pronouns-fields');
  pronounsSelect.addEventListener('change', () => {
    if (pronounsSelect.value === 'Custom') {
      customFields.style.display = 'flex';
    } else {
      customFields.style.display = 'none';
    }
  });

  // Secondary Disability show/hide logic (JS-based for inline fields)
  const addSecondaryCheckbox = container.querySelector('#addSecondaryDisability');
  const secondaryDisability = container.querySelector('#secondaryDisability');
  const secondaryDisabilitySpecify = container.querySelector('#secondaryDisabilitySpecify');
  addSecondaryCheckbox.addEventListener('change', () => {
    if (addSecondaryCheckbox.checked) {
      secondaryDisability.style.display = 'inline-block';
      secondaryDisabilitySpecify.style.display = 'inline-block';
    } else {
      secondaryDisability.style.display = 'none';
      secondaryDisabilitySpecify.style.display = 'none';
    }
  });

  // Initialize Quill for Additional Information
  setTimeout(() => {
    var quill = new Quill('#additionalInfoRTE', {
      theme: 'snow',
      placeholder: 'Add additional information here...',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline'],
          [{ 'align': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['clean']
        ]
      }
    });
    window.additionalInfoEditor = quill;
  }, 0);
}