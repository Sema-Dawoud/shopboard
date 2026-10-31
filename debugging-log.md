# Debugging Log

## Bug 1: ESLint localStorage Error

**What I saw:**
ESLint showed: 'localStorage' is not defined.

**Type:**
Configuration error (not runtime, logic, or state).

**How I found it:**
I ran npm run lint in the terminal.

**Cause:**
localStorage was missing from the globals in eslint.config.js.

**Fix:**
Added localStorage: 'readonly' to the globals configuration.

**Did I use AI?**
Yes. I used AI to understand the error and find the fix.
