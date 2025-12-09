function aiBrain(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Namaste Phul Babu ji! 😊 Main aapka AI hoon.";
  }

  if (message.includes("kaise ho")) {
    return "Main bilkul mast hoon, aap kaise ho?";
  }

  if (message.includes("name")) {
    return "Mera naam Smart-AI v1.0 hai!";
  }

  if (message.includes("time")) {
    return `Abhi time hai: ${new Date().toLocaleTimeString()}`;
  }

  if (message.includes("date")) {
    return `Aaj ki date hai: ${new Date().toLocaleDateString()}`;
  }

  // Maths solve
  try {
    if (message.includes("solve")) {
      const expr = message.replace("solve", "").trim();
      const ans = eval(expr);
      return `Answer: ${ans}`;
    }
  } catch (err) {}

  return "Phul Babu ji, aapka question thoda mushkil hai 😅 par main seekh raha hoon!";
}

export default aiBrain;