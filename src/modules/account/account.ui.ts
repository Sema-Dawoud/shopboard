import { getRequiredElement } from '../../shared/ui/get-required-element.js';

const registerForm = getRequiredElement<HTMLFormElement>('.register-form');
const accountStatus =
  getRequiredElement<HTMLParagraphElement>('#account-status');

export function initAccountUI(): void {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    accountStatus.textContent =
      'Your details are valid. Account creation will be available when account services are connected.';
  });
}
