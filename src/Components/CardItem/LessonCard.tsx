import CardImage from "../../Assets/Card/Rectangle 178.svg";
import Level from "../Level/Level";

interface LessonCardProps {
  id: number;
  name: string;
  description: string;
  images?: string;
  buttonContent?: string;
  state?: string;
  price?: number;
  border?: boolean;
  type?: boolean;
  percent?: number;
  clickDetail?: (id: number) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({
  id,
  name,
  description,
  buttonContent,
  price,
  state,
  border = false,
  type = true,
  percent,
  images,
  clickDetail
}) => {
  let classState = "absolute top-[110px] right-0 rounded-bl-full rounded-tl-full px-6 py-2 sm:top-[70px] sm:px-3 sm:py-1 md:top-[58px] md:px-3 md:py-1 lg:top-[77px] lg:px-4 lg:py-2 xl:top-[110px] xl:px-5 xl:py-2 2xl:top-[110px] 2xl:px-6 2xl:py-2 ";
  switch (state) {
    case "Pass":
      classState += "bg-[#00A751]";
      break;
    case "Fail":
      classState += "bg-[#FF774C]";
      break;
    case "Cần làm":
      classState += "bg-[#FFC700]";
      break;
    default:
      break;
  }

  return (
    <>
      <div
        className={`bg-white rounded-3xl border w-full max-h-[268px] relative ${
          border && "border-[#FFC700] border-[4px]"
        }`}
      >
        <button
          onClick={() => {
            alert("haha");
          }}
          className="p-1 bg-white absolute top-3 right-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd" // Sửa lại fill-rule thành fillRule
              d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z"
            />
          </svg>
        </button>
        <div className={classState}>
          <span className="font-semibold text-white text-[14px]">{state}</span>
        </div>
        <img
          src={images ? images : CardImage}
          alt="Placeholder Image"
          className="w-full max-h-[130px] object-cover rounded-t-3xl"
        />
        {percent && (
          <div className="absolute top-0 left-0 w-full">
            <Level percent={percent}></Level>
          </div>
        )}

        <div className="p-[20px]">
          <div className="max-h-full mb-3">
            <div className="font-bold text-base mb-2">{name}</div>
            <p className="text-gray-700 text-xs">{description}</p>
          </div>
          <div className="flex justify-between">
            <div>
              {price && (
                <span className="text-[#FB9400] text-[20px] font-bold">
                  $&nbsp;{price}
                </span>
              )}
            </div>
            <div className="flex justify-between gap-2 sm:flex-col md:flex-col xl:flex-row 2xl:flex-row">
              {price && clickDetail && (
                <>
                  <button
                    onClick={() => clickDetail(id)}
                    className="px-2 py-1 text-[10px] rounded-[30px] bg-[#ECEBE9] space-x-4 flex items-center text-black"
                  >
                    Xem chi tiết
                  </button>
                  <button className="px-2 py-1 text-[10px] rounded-[30px] bg-[#FB9400] space-x-4 flex items-center text-white">
                    {type === true ? (
                      "Đăng ký "
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                        className="text-black"
                      >
                        <path
                          fill="currentColor"
                          d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                        />
                      </svg>
                    )}
                  </button>
                </>
              )}
              {buttonContent && clickDetail && (
                <button
                  onClick={() => clickDetail(id)}
                  className="px-6 py-1 text-[10px] rounded-[30px] bg-[#FB9400] space-x-4 flex items-center text-white"
                >
                  {buttonContent}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
