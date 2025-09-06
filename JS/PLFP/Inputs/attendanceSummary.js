// Attendance Summary Input (PLFP)
// Match PLAA Inputs style

const SCHOOL_YEARS = [
  '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025',
  '2025-2026', '2026-2027', '2027-2028', '2028-2029', '2029-2030'
];

function createAttendanceRow(yearIdx = 0) {
  return `
    <tr class="attendance-row">
      <td style="padding: 0 18px;">
        <select class="attendance-year" style="padding:6px 10px; border-radius:4px; border:1px solid #ccc; font-size:1em; width:140px;">
          <option value="" disabled selected>Choose One</option>
          ${SCHOOL_YEARS.map((year, idx) => `<option value="${year}"${yearIdx === -1 ? '' : idx === yearIdx ? ' selected' : ''}>${year}</option>`).join('')}
        </select>
      </td>
      <td style="padding: 0 18px;">
        <input type="text" class="attendance-total" placeholder="Total # Absences" style="width:130px; padding:6px 8px; border-radius:4px; border:1px solid #ccc;">
      </td>
      <td style="padding: 0 18px;">
        <input type="text" class="attendance-excused" placeholder="# Excused" style="width:120px; padding:6px 8px; border-radius:4px; border:1px solid #ccc;">
      </td>
      <td style="padding: 0 18px;">
        <input type="text" class="attendance-unexcused" placeholder="# Unexcused" style="width:130px; padding:6px 8px; border-radius:4px; border:1px solid #ccc;">
      </td>
      <td style="padding: 0 18px;">
        <input type="text" class="attendance-tardies" placeholder="# Tardies" style="width:110px; padding:6px 8px; border-radius:4px; border:1px solid #ccc;">
      </td>
      <td style="padding: 0 18px;">
        <input type="text" class="attendance-dismissals" placeholder="# Early Dismissals" style="width:150px; padding:6px 8px; border-radius:4px; border:1px solid #ccc;">
      </td>
    </tr>
  `;
}

export function createAttendanceSummaryForm(container) {
  container.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
      <label for="attendance-date-reviewed" style="font-weight:bold; margin-bottom:0;">Date Reviewed</label>
      <input type="date" id="attendance-date-reviewed" name="attendance-date-reviewed" style="padding:6px 10px; border-radius:4px; border:1px solid #ccc; font-size:1em;">
    </div>
    <div style="height: 18px;"></div>
    <div id="attendance-table-section" style="margin-left: 64px;">
      <table style="border-collapse: collapse; width: auto; margin-bottom: 0;">
        <thead>
          <tr>
            <th style="font-weight:bold; text-align:center; width:160px; padding: 0 18px;">School Year</th>
            <th style="font-weight:bold; text-align:center; width:160px; padding: 0 18px;">Total # Absences</th>
            <th style="font-weight:bold; text-align:center; width:180px; padding: 0 18px;"># Excused Absences</th>
            <th style="font-weight:bold; text-align:center; width:190px; padding: 0 18px;"># Unexcused Absences</th>
            <th style="font-weight:bold; text-align:center; width:130px; padding: 0 18px;"># Tardies</th>
            <th style="font-weight:bold; text-align:center; width:160px; padding: 0 18px;"># Early Dismissals</th>
          </tr>
        </thead>
        <tbody id="attendance-rows"></tbody>
      </table>
      <div style="display:flex; gap:10px; margin-top:10px;">
        <button type="button" id="add-attendance-year" style="padding:4px 12px; border-radius:4px; background:#ffb47b; color:#1e2a38; font-weight:bold; border:none; cursor:pointer;">+ Year</button>
        <button type="button" id="remove-attendance-year" style="padding:4px 12px; border-radius:4px; background:#ffe3c7; color:#b84c00; font-weight:bold; border:none; cursor:pointer; display:none;">- Year</button>
      </div>
    </div>
    <div style="height: 28px;"></div>
    <div id="attendance-description-section" style="margin-left: 64px; margin-top: 36px;">
      <label style="font-weight:bold; display:block; margin-bottom:8px;">Attendance Description</label>
      <div style="display: flex; flex-direction: column; gap: 14px; align-items: flex-start;">
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" name="attendance-desc-main" value="meets" id="attendance-desc-meets">
          <span><b><i>Meets</i></b> Attendance Requirements</span>
        </label>
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" name="attendance-desc-main" value="approaching" id="attendance-desc-approaching">
          <span><b><i>Approaching</i></b> Attendance Threshold</span>
        </label>
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" name="attendance-desc-main" value="exceeds" id="attendance-desc-exceeds">
          <span><b><i>Exceeds</i></b> Attendance Threshold</span>
        </label>
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" name="attendance-desc-other" value="other" id="attendance-desc-other">
          <span><b><i>Other</i></b></span>
        </label>
      </div>
      <div id="attendance-desc-other-box" style="display:none; margin-top:8px; margin-left:32px;">
        <textarea id="attendance-desc-other-input" placeholder="Add description..." style="padding:6px 10px; border-radius:4px; border:1px solid #ccc; width: 640px; height: 96px; min-height: 96px; resize: vertical; overflow-y: auto;"></textarea>
      </div>
    </div>
  `;

  const rowsContainer = container.querySelector('#attendance-rows');
  const addBtn = container.querySelector('#add-attendance-year');
  const removeBtn = container.querySelector('#remove-attendance-year');

  let yearRows = [-1]; // store indices for each row (default: 1 row, -1 means 'Choose One')

  function renderRows() {
    // Preserve current values
    const currentValues = Array.from(rowsContainer.querySelectorAll('.attendance-row')).map(row => ({
      year: row.querySelector('.attendance-year')?.value || '',
      total: row.querySelector('.attendance-total')?.value || '',
      excused: row.querySelector('.attendance-excused')?.value || '',
      unexcused: row.querySelector('.attendance-unexcused')?.value || '',
      tardies: row.querySelector('.attendance-tardies')?.value || '',
      dismissals: row.querySelector('.attendance-dismissals')?.value || ''
    }));
    rowsContainer.innerHTML = yearRows.map((yearIdx, i) => createAttendanceRow(yearIdx)).join('');
    removeBtn.style.display = yearRows.length > 1 ? '' : 'none';
    // Restore values
    Array.from(rowsContainer.querySelectorAll('.attendance-row')).forEach((row, i) => {
      const vals = currentValues[i] || {};
      if (vals.year) row.querySelector('.attendance-year').value = vals.year;
      if (vals.total) row.querySelector('.attendance-total').value = vals.total;
      if (vals.excused) row.querySelector('.attendance-excused').value = vals.excused;
      if (vals.unexcused) row.querySelector('.attendance-unexcused').value = vals.unexcused;
      if (vals.tardies) row.querySelector('.attendance-tardies').value = vals.tardies;
      if (vals.dismissals) row.querySelector('.attendance-dismissals').value = vals.dismissals;
    });
  }

  addBtn.onclick = () => {
    // Default to next available year, or 0 if all used
    yearRows.push(-1);
    renderRows();
  };
  removeBtn.onclick = () => {
    if (yearRows.length > 1) {
      yearRows.pop();
      renderRows();
    }
  };

  renderRows();

  // Show/hide the 'Other' description box
  const otherCheckbox = container.querySelector('#attendance-desc-other');
  const otherBox = container.querySelector('#attendance-desc-other-box');
  const otherInput = container.querySelector('#attendance-desc-other-input');
  if (otherCheckbox && otherBox && otherInput) {
    function updateOtherBox() {
      console.log('[DEBUG] Other checkbox changed:', otherCheckbox.checked);
      if (otherCheckbox.checked) {
        otherBox.style.display = 'block';
        otherInput.focus();
      } else {
        otherBox.style.display = 'none';
        otherInput.value = '';
      }
    }
    otherCheckbox.addEventListener('change', updateOtherBox);
    // Set initial state on load
    updateOtherBox();
  }

  // Auto-expand textarea when needed (not every keystroke, but on input and blur)
  if (otherInput && otherInput.tagName === 'TEXTAREA') {
    function autoExpand() {
      otherInput.style.height = '96px'; // reset to base height
      if (otherInput.scrollHeight > 96) {
        otherInput.style.height = otherInput.scrollHeight + 'px';
      }
    }
    otherInput.addEventListener('input', autoExpand);
    otherInput.addEventListener('blur', autoExpand);
    // Initial expansion if pre-filled
    autoExpand();
  }

  // Only one of the main checkboxes can be checked at a time
  const mainCheckboxes = container.querySelectorAll('input[name="attendance-desc-main"]');
  mainCheckboxes.forEach(cb => {
    cb.addEventListener('change', function() {
      if (this.checked) {
        mainCheckboxes.forEach(other => {
          if (other !== this) other.checked = false;
        });
      }
    });
  });
} 