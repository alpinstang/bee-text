const RightChat = ({ message }) => {
  return (
    <div className="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
      {message ? message : "Aw shit, something broke. 👀👀👀👀"}
    </div>
  );
};

export default RightChat;
