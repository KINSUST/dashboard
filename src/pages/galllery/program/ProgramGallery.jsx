import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProgramsPhoto } from "../../../features/gallery/galleryApiSlice";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Loading from "../../../components/loading/Loading";
import { Helmet } from "react-helmet-async";

const ProgramGallery = () => {
  const dispatch = useDispatch();

  const { programs, loading } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(allProgramsPhoto());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Program Gallery | KIN Dashboard</title>
      </Helmet>
      <section className="w-full p-4 bg-[#121a2d]">
        <h1 className=" pb-4 text-center font-bold text-xl text-[#38bdf8]">
          All Programs images
        </h1>
        <hr className="h-[1px] bg-zinc-800 w-full border-none" />
        <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-4">
          {programs?.map((image, index) => (
            <div key={index} className="relative">
              <figure className="cursor-pointer">
                <PhotoProvider>
                  <PhotoView
                    src={`${
                      import.meta.env.VITE_SERVER_URL +
                      "/public/images/programs/"
                    }/${image}`}
                  >
                    <img
                      src={`${
                        import.meta.env.VITE_SERVER_URL +
                        "/public/images/programs/"
                      }/${image}`}
                      alt=""
                      className="rounded-md w-full  h-[250px]  border-4 border-zinc-800 object-cover"
                    />
                  </PhotoView>
                </PhotoProvider>
              </figure>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProgramGallery;