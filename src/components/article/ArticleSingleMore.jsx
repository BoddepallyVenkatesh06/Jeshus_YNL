const ArticleSingleMore = () => {
  return (
    <div>
      <div className="sticky top-0 left-0 overflow-hidden bg-whitesmoke rounded-lg">
        <h2 className="text-lg font-medium px-4 py-3 blue-gradient text-white">
          More articles to read
        </h2>
        <div className="space-y-3 px-4 py-6 border-[1px] border-gray/10">
          <a
            className="group flex items-center gap-x-2 border-[1px] border-gray/10 rounded-lg p-2 hover:bg-white bg-blue/5"
            href="#"
          >
            <div className="grow px-2">
              <span className="font-medium text-base">
                अस्ट्रेलियाविरुद्ध टी-२० सिरिज खेल्ने भारतीय टिमको घोषणा
              </span>
            </div>

            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="Image Description"
              />
            </div>
          </a>
          <a
            className="group flex items-center gap-x-2 border-[1px] border-gray/10 rounded-lg p-2 hover:bg-white bg-blue/5"
            href="#"
          >
            <div className="grow px-2">
              <span className="font-medium text-base">
                इजरेल–हमास युद्धविराम सम्झौता नजिक
              </span>
            </div>

            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="Image Description"
              />
            </div>
          </a>
          <a
            className="group flex items-center gap-x-2 border-[1px] border-gray/10 rounded-lg p-2 hover:bg-white bg-blue/5"
            href="#"
          >
            <div className="grow px-2">
              <span className="font-medium text-base">
                अध्यक्षसहित राष्ट्रियसभाका एक तिहाइ बिदा हुँदै, निर्वाचन माघमा
              </span>
            </div>

            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="Image Description"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleSingleMore;
