**Understanding useRef**
***Preview***

<img  alt="Screenshot 2024-01-22 at 11 03 05 PM" src="https://github.com/elpah/useRefHookExample/assets/81959047/e8d847f8-1db8-43b9-9850-73aeca4efc63">


<img  alt="Screenshot 2024-01-22 at 11 03 14 PM" src="https://github.com/elpah/useRefHookExample/assets/81959047/ea47aa39-4aa4-4c60-bfb7-84a4db2b680c">


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

    
