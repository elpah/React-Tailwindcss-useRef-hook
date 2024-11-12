**Understanding useRef**
***Preview***


<img width="1265" alt="Screenshot 2024-01-24 at 12 39 15 PM" src="https://github.com/elpah/employee-portal/assets/81959047/346191e5-c7fd-47b1-a95e-27708e9f7e30">

<img width="1103" alt="Screenshot 2024-01-24 at 12 39 23 PM" src="https://github.com/elpah/employee-portal/assets/81959047/c2251eb0-570d-4300-93c2-1f1206e7c0aa">

<img width="1069" alt="Screenshot 2024-01-24 at 12 39 32 PM" src="https://github.com/elpah/employee-portal/assets/81959047/7f0291b9-8680-4be5-9c0a-67d20bb97d2f">

<img width="1031" alt="Screenshot 2024-01-24 at 12 39 45 PM" src="https://github.com/elpah/employee-portal/assets/81959047/4e46c456-5c60-469f-a61e-0486762456fc">


- A simple project demonstrating how the useRef hook works
- Instead of using useState to track every letter change in an input field, we can use the useRef hook
- This example leverages the useRef hook for to manage the state efficiently. 
- The playerName ref is created, which provides a reference to the input element.
- By accessing playerName.current.value, the input value is retrieved.
- We then set it to the state (enteredPlayerName) only when needed, minimizing unnecessary state updates.
- This approach optimizes performance, especially in scenarios where constant re-rendering is not required for every keystroke.
  
**How to Run the Project**
1. Open a new terminal
    ```console
    git clone git@github.com:elpah/useRefHookExample.git
    cd useRefHookExample

2. install dependencies
   ```console
   npm i

3. start proejct by running
   ```console
   npm run dev

    
