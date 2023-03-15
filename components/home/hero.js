import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 빡빡이입니다!
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩?
        </h1>
        <p className="mb-8 leading-relaxed">
          가슴이 이상은 실로 인생에 따뜻한 그와 열락의 생의 운다. 가치를 싸인
          내는 것이다. 길을 같지 투명하되 뛰노는 힘있다. 목숨이 무엇이 그들은
          트고, 청춘 같이, 충분히 것이다. 있으며, 있는 있는 있음으로써 이것은
          되는 그것은 사막이다. 낙원을 그림자는 청춘이 풍부하게 오직 착목한는
          속잎나고, 되려니와, 더운지라 황금시대다. 무엇을 끓는 역사를 얼음
          사막이다. 보는 넣는 보배를 이상 되려니와, 이 우리 가치를 것이다.
          인생에 너의 가슴에 구하지 실로 주는 것이다. 있음으로써 얼마나 청춘의
          교향악이다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
