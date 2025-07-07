import { useRef } from 'react';

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

    const userEntry = { role: "user", text: userMessage };
    const botPlaceholder = { role: "model", text: "Thinking..." };

    // Build new chat state
    const fullNewHistory = [...chatHistory, userEntry, botPlaceholder];

    // Set updated chat state
    setChatHistory(fullNewHistory);
    console.log("Chat history updated:", fullNewHistory);

    // Call bot response with up-to-date history (excluding placeholder)
    generateBotResponse([...chatHistory, userEntry]);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  )
}

export default ChatForm;
