export function generateAgencyInvolvementReport(returnOnly = false) {
  const firstName = document.getElementById('firstName')?.value?.trim() || '[Name]';

  const yesOVR = !!document.getElementById('agency-ovr-yes')?.checked;
  const noOVR = !!document.getElementById('agency-ovr-no')?.checked;

  // If neither option selected and no other agency data, skip output
  if (!yesOVR && !noOVR) {
    return returnOnly ? '' : '';
  }

  let html = '<h1>Agency Involvement</h1>';
  html += '<p><br></p>';
  html += '<h2>OVR</h2>';

  if (yesOVR) {
    const parentName = (document.getElementById('agency-parent-name-yes')?.value || '').trim() || '[Parent Name]';
    const repName = (document.getElementById('agency-ovr-rep')?.value || '').trim() || '[Agency Rep]';
    const inviteYes = !!document.getElementById('agency-ovr-invite-yes')?.checked;
    const inviteNo = !!document.getElementById('agency-ovr-invite-no')?.checked;

    if (inviteYes) {
      html += `<p>${firstName} currently participates with OVR. ${repName} will be invited to the IEP with parent permission.</p>`;
    } else if (inviteNo) {
      html += `<p>${firstName} currently participates with OVR. ${parentName} declined to invite ${repName} to the IEP meeting.</p>`;
    } else {
      // Fallback if invite choice not selected
      html += `<p>${firstName} currently participates with OVR.</p>`;
    }
  }

  if (noOVR) {
    const parentName = (document.getElementById('agency-parent-name')?.value || '').trim() || '[Parent Name]';
    const repName = (document.getElementById('agency-ovr-rep-no')?.value || '').trim() || '[Agency Rep]';
    const inviteYes = !!document.getElementById('agency-parent-invite-yes')?.checked;
    const inviteNo = !!document.getElementById('agency-parent-invite-no')?.checked;

    if (inviteYes) {
      html += `<p>${firstName} does not currently participate with OVR. ${repName} will be invited to the IEP with parent permission.</p>`;
    } else if (inviteNo) {
      html += `<p>${firstName} does not currently participate with OVR. ${parentName} declined to invite ${repName} to the IEP meeting.</p>`;
    } else {
      // Fallback if invite choice not selected
      html += `<p>${firstName} does not currently participate with OVR.</p>`;
    }
  }

  // Other Agencies (dynamic cards)
  const agencyCards = Array.from(document.querySelectorAll('#agency-other-list .agency-card'));
  agencyCards.forEach((card) => {
    const nameInput = card.querySelector('input[type="text"]');
    const agencyName = (nameInput?.value || '').trim();
    const summaryHtmlRaw = card.querySelector('.ql-editor')?.innerHTML?.trim();
    const hasSummary = summaryHtmlRaw && summaryHtmlRaw !== '<p><br></p>';
    if (agencyName || hasSummary) {
      html += '<p><br></p><p><br></p>';
      html += `<h2>${agencyName || 'Other Agency'}</h2>`;
      if (hasSummary) html += summaryHtmlRaw;
    }
  });

  if (returnOnly) return html;
  const out = document.getElementById('transition-editor');
  if (out) out.innerHTML += html;
  return html;
}


