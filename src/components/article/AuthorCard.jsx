import { Link } from "react-router-dom";
import staticImages from "../../utils/images";

const AuthorCard = () => {
  return (
    <>
      {/* author card */}
      <div className="rounded-lg p-4 bg-whitesmoke/50">
        <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
          <div className="relative mt-1 lg:h-[100px] lg:w-[100px] h-[72px] w-[72px] flex-shrink-0 mb-3 lg:mb-0">
            <Link href={`/author}`}>
              <img
                src={staticImages.member1}
                className="rounded-full object-cover w-full h-full"
                sizes="96px"
              />
            </Link>
          </div>
          <div>
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 font-lora">
                About David Paul
              </h3>
            </div>
            <div className="text text-sm text-np">
              पास्टर डेभिड पौल लिम्बु, प्रभुको सेवा गर्दै दुई दशक अघिदेखि,
              विनम्रतामा, एक परमेश्वरका लागि प्रेरित जीवनमा, अचल आत्मसमर्पण र
              विश्वासयोग्यताका साथ हाम्रो चर्चलाई अगाडि बढाउँदैछन्।
            </div>
            <div className="mt-3">
              <Link href={`/author/`} className="text-sm font-normal text-blue">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end of author card */}
    </>
  );
};

export default AuthorCard;
