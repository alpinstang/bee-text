const LeftChat = ({ message }) => {
  return (
    <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
      {message ? message : "Aw shit, something broke. 👀👀👀👀"}
    </div>
  );
};

export default LeftChat;
