import { useEffect, useRef, useState } from "react";
import { Box, Fab, Typography, Paper, TextField, IconButton, Avatar } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import { sendMessage } from "@/services/chatService";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [, setIsLoadingBot] = useState(false);
  const messagesEndRef = useRef(null); 

  const toggleChat = () => {
    setOpen(!open);
  };

  const handleSend = async () => {
    if (inputValue.trim() !== "") {
      const userMessage = { text: inputValue, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      const userInput = inputValue;
      setInputValue("");

      setIsLoadingBot(true);
      const typingPlaceholder = { text: "...", sender: "bot-typing" };
      setMessages((prev) => [...prev, typingPlaceholder]);

      try {
        const response = await sendMessage(userInput);
        if (response && response.data) {
          const botReply = { text: response.data, sender: "bot" };
          setMessages((prev) => [
            ...prev.filter((msg) => msg.sender !== "bot-typing"), 
            botReply,
          ]);
        } else {
          const botReply = { text: "No reply from bot.", sender: "bot" };
          setMessages((prev) => [
            ...prev.filter((msg) => msg.sender !== "bot-typing"),
            botReply,
          ]);
        }
      // eslint-disable-next-line no-unused-vars, unused-imports/no-unused-vars
      } catch (error) {
        const botReply = { text: "Error contacting bot.", sender: "bot" };
        setMessages((prev) => [
          ...prev.filter((msg) => msg.sender !== "bot-typing"),
          botReply,
        ]);
      } finally {
        setIsLoadingBot(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages], open);

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChat}
        sx={{
          position: "fixed",
          bottom: 50,
          right: 90,
          zIndex: 1000000,
        }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </Fab>

      {open && (
        <Paper
          elevation={4}
          sx={{
            position: "fixed",
            bottom: 80,
            right: 120,
            width: 320,
            height: 400,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              borderBottom: "1px solid #ccc",
              background: "linear-gradient(45deg, #FF66FF 30%, #21CBF3 90%)",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 1,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <Avatar sx={{ bgcolor: "white", color: "primary.main", width: 32, height: 32 }}>
              <PersonIcon />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              ChatBot
            </Typography>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {messages.length === 0 ? (
              <Typography variant="body1" color="text.secondary">
                No messages yet.
              </Typography>
            ) : (
              messages.map((msg, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {(msg.sender === "bot" || msg.sender === "bot-typing") && (
                    <Avatar sx={{ width: 30, height: 30, bgcolor: "grey.500" }}>
                      <PersonIcon />
                    </Avatar>
                  )}
                  <Box
                    sx={{
                      bgcolor: msg.sender === "user" ? "primary.main" : "grey.300",
                      color: msg.sender === "user" ? "white" : "black",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      maxWidth: "70%",
                      wordBreak: "break-word",
                    }}
                  >
                    {msg.sender === "bot-typing" ? (
                      <LoadingDots />
                    ) : (
                      <Typography variant="body2">{msg.text}</Typography>
                    )}
                  </Box>
                </Box>
              ))
            )}
            <div ref={messagesEndRef} /> {/* 👈 Scroll target */}
          </Box>

          {/* Input */}
          <Box
            sx={{
              display: "flex",
              p: 1,
              borderTop: "1px solid #ccc",
            }}
          >
            <TextField
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="standard"
              placeholder="Type a message..."
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: { px: 1 },
              }}
            />
            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
}

// Component dấu chấm nhảy
function LoadingDots() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 6,
            height: 6,
            bgcolor: "text.primary",
            borderRadius: "50%",
            animation: "bounce 1.4s infinite ease-in-out",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
}
