"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-screen-2xl">
        <div className="flex w-full flex-row justify-between gap-20">
          {/* left container */}
          <div className="flex w-full flex-col items-start justify-start p-6 lg:w-[50%] lg:p-8 lg:pl-20 lg:pr-0">
            <nav className="flex h-full w-full items-center justify-between">
              {/* logo */}
              <div className="">
                <h3 className="text-5xl/none font-black text-gray-800">GHS</h3>
                {/* <p className="text-[0.65rem] text-gray-500">Get health simple</p> */}
              </div>
              {/* logo */}

              <div className="flex items-center justify-between gap-5">
                <Link
                  className="text-sm/none font-medium text-gray-600 hover:text-gray-800 hover:underline"
                  href="/"
                >
                  About
                </Link>
                <Link
                  className="text-sm/none font-medium text-gray-600 hover:text-gray-800 hover:underline"
                  href="/"
                >
                  Contact us
                </Link>
              </div>
            </nav>

            <div className="mt-14 flex-1">
              <div className="">
                <h3 className="text-base font-medium text-blue-600">
                  Get health Simple
                </h3>

                <h1 className="mt-2 text-6xl font-semibold leading-[4.5rem] text-gray-500">
                  <span className="text-gray-800">Empower</span> solutions
                  Yourself with our{" "}
                  <span className="text-gray-800">health</span> solutions
                </h1>
              </div>

              <div className="-mt-10 flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-72 rotate-90 -scale-x-[1] text-blue-600"
                  viewBox="-5 -10 110 135"
                  fill="currentColor"
                >
                  <path d="M90.422 88.172c-15.664-.348-35.277-3.695-44.398-18.113a26.9 26.9 0 01-2.676-5.586 36.655 36.655 0 003.602-4.8c1.949-3.071 3.625-6.473 4.379-10.056.402-1.902.843-4.953-1.086-6.23-1.723-1.137-4.387-.418-6.035.539-3.047 1.765-4.512 5.465-5.125 8.765-.762 4.086-.391 8.356.914 12.301-.114.122-.211.25-.325.368-3.703 3.847-10.285 7.812-14.738 2.777-1.746-1.977-2.656-4.633-3.296-7.148-.852-3.344-1.223-6.801-1.422-10.238-.66-11.465.433-23.137 2.183-34.5 1.242 2.808 4.266 9.648 4.54 10.258.558 1.261 3.734.304 3.218-.864L24.423 12.68c-.27-.613-.543-1.222-.813-1.836-.547-1.234-2.543-.445-3.129.325-3.402 4.5-11.184 14.746-11.668 15.383-.48.636.414 1.101.926 1.14a2.43 2.43 0 002.113-.93c2.426-3.195 4.852-6.386 7.274-9.582-1.621 10.387-2.524 21.035-2.246 31.508.101 3.786.379 7.59 1.12 11.31.583 2.906 1.446 5.878 3.161 8.335 4.156 5.946 12.586 3.801 17.648.235.68-.48 1.324-1 1.953-1.543 6.387 15.078 24.086 20.59 39.051 22.12 3.082.317 6.172.473 9.27.54.586.012 1.828-.246 2.144-.813.344-.617-.293-.687-.805-.699zm-48.5-31.891c-.008-2.262.273-4.555.996-6.7.574-1.706 1.367-3.632 2.86-4.738 1.769-1.308 2.57.965 2.648 2.434.156 2.938-1.082 6.016-2.3 8.621a36.372 36.372 0 01-3.544 5.953 25.192 25.192 0 01-.66-5.57zM23.25 74.965c-.672.367-1.516.54-2.266.355-1.757-.43-3.324-1.433-4.566-2.734-2.207-2.316-3.57-5.383-4.523-8.398-.508-1.606-.942-3.262-1.18-4.934-.145-1.016 3.098-1.723 3.219-.863.082.582.203 1.16.328 1.734.582 2.668 1.433 5.309 2.699 7.735 1.414 2.71 3.531 5.308 6.629 6.062.758.188-.043.883-.34 1.043zM50.664 41.16c-.523-.25.816-.895.953-.945.61-.223 1.461-.461 2.078-.164.328.156.63.379.91.609 4.809 3.902 2.668 10.992.305 15.613-.293.574-1.324.8-1.883.895-.176.03-1.57.195-1.297-.344 1.114-2.176 2.067-4.489 2.426-6.922.457-3.098-.351-7.246-3.492-8.742zm9.188 48.195c-.641.402-1.551.566-2.274.324-2.148-.722-4.125-1.91-5.95-3.242-.886-.645-1.757-1.332-2.554-2.09-.52-.492.547-1.074.88-1.219.554-.242 1.616-.488 2.12-.007 2.285 2.175 5.09 4.054 8.086 5.058.75.254.035.961-.308 1.176z" />
                </svg>

                <div className="mt-5 max-w-xl">
                  <p className="text-base/7 text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Non odit placeat, repudiandae fugiat accusantium possimus
                    officiis fugit! Harum, nihil voluptate.
                  </p>

                  <div className="mt-10 flex items-center justify-start gap-5">
                    <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white">
                      Get Started
                    </button>
                    <button className="flex items-center justify-start gap-2 rounded-full px-5 py-3 text-sm font-medium text-gray-800">
                      Learn more{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-5">
              {/* card */}
              <div className="flex w-full items-center justify-between gap-5 rounded-xl border bg-gray-100 p-5">
                <div className="">
                  <div className="flex items-end justify-center gap-3">
                    <div className="h-14 w-6 rounded-t-md bg-blue-600"></div>
                    <div className="h-20 w-6 rounded-t-md bg-blue-600/20"></div>
                    <div className="h-6 w-6 rounded-t-md bg-blue-600"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex w-full items-start justify-start gap-2">
                    <div className="mt-px size-3 rounded-full bg-blue-600"></div>
                    <div className="">
                      <p className="text-semibold text-sm/none font-medium text-gray-800">
                        1048 +
                      </p>

                      <p className="mt-1 text-xs/none text-gray-500">
                        lorem ipsum dolor
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex w-full items-start justify-start gap-2">
                    <div className="ml-5">
                      <p className="text-semibold text-sm/none font-medium text-gray-800">
                        980 +
                      </p>

                      <p className="mt-1 text-xs/none text-gray-500">
                        lorem ipsum dolor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}

              {/* card */}
              <div className="w-full rounded-xl border bg-gray-100 p-5">
                <p className="text-center text-sm font-medium text-gray-700">
                  200k+ Our people join
                </p>
                <div className="mt-5 flex items-center justify-center -space-x-5">
                  <img
                    className="size-12 rounded-full border-2 border-white object-cover shadow-inner"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <img
                    className="size-12 rounded-full border-2 border-white object-cover shadow-inner"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <img
                    className="size-12 rounded-full border-2 border-white object-cover shadow-inner"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <img
                    className="size-12 rounded-full border-2 border-white object-cover shadow-inner"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <div className="flex size-12 items-center justify-center rounded-full border-2 border-dashed border-gray-700 bg-gray-200 text-blue-600">
                    +
                  </div>
                </div>
              </div>
              {/* card */}
            </div>
          </div>
          {/* left container */}

          {/* right container */}
          <div className="relative m-8 ml-0 mr-20 hidden w-[50%] items-center justify-center overflow-hidden rounded-[4rem] shadow-xl lg:flex">
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
            <img
              src="/hero_image_2.jpg"
              className="absolute inset-0 z-10 h-full w-full object-cover"
              alt=""
            />

            <div className="relative z-30 flex h-full w-full flex-col items-start justify-end p-10">
              <h3 className="text-2xl font-medium text-white">
                Health Consultation
              </h3>
              <h3 className="mt-5 text-sm/6 text-white/90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus totam iusto recusandae impedit voluptate rem cum
                mollitia, itaque architecto nesciunt esse ut. Blanditiis,
                dolores non unde recusandae ullam pariatur accusantium?
              </h3>
            </div>
          </div>
          {/* right container */}
        </div>
      </section>

      <section className="mt-10 w-full bg-[#102537] py-14">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center">
          <p className="text-base font-medium tracking-wider text-white/90">
            Trusted by the 1000+ modern teams and companies
          </p>

          <div className="mt-10 flex items-center justify-center">
            <svg
              className="h-20 w-60 scale-50 text-white/80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.677.162C15.92.162.714 15.368.714 34.126S15.92 68.089 34.677 68.089c18.76 0 33.965-15.205 33.965-33.963C68.642 15.37 53.437.164 34.677.164V.162zm15.576 48.985a2.116 2.116 0 01-2.912.702c-7.974-4.87-18.013-5.974-29.835-3.273a2.118 2.118 0 01-.943-4.129c12.938-2.956 24.036-1.683 32.988 3.788a2.117 2.117 0 01.702 2.912zM54.41 39.9a2.648 2.648 0 01-3.642.872c-9.13-5.611-23.046-7.236-33.844-3.959a2.652 2.652 0 01-3.305-1.764 2.652 2.652 0 011.766-3.302c12.335-3.743 27.67-1.93 38.153 4.513a2.647 2.647 0 01.872 3.64zm.357-9.63c-10.946-6.502-29.007-7.1-39.458-3.928a3.176 3.176 0 11-1.844-6.08c11.997-3.642 31.942-2.938 44.544 4.544a3.173 3.173 0 011.111 4.353 3.174 3.174 0 01-4.351 1.11h-.002zm38.351 1.245c-5.864-1.398-6.907-2.38-6.907-4.442 0-1.948 1.833-3.26 4.563-3.26 2.644 0 5.264.996 8.014 3.046a.377.377 0 00.288.07.378.378 0 00.255-.156l2.864-4.036a.386.386 0 00-.073-.522c-3.273-2.626-6.956-3.902-11.263-3.902-6.331 0-10.756 3.8-10.756 9.236 0 5.83 3.817 7.895 10.411 9.488 5.61 1.293 6.558 2.376 6.558 4.311 0 2.146-1.914 3.48-4.996 3.48-3.423 0-6.218-1.156-9.34-3.857a.398.398 0 00-.28-.093.38.38 0 00-.264.134l-3.212 3.82a.386.386 0 00.036.535c3.634 3.245 8.104 4.957 12.93 4.957 6.822 0 11.23-3.728 11.23-9.499.012-4.87-2.904-7.567-10.046-9.304l-.012-.006zm25.494-5.783c-2.956 0-5.382 1.165-7.385 3.552v-2.687a.383.383 0 00-.381-.385h-5.253a.383.383 0 00-.381.385v29.85c0 .212.171.386.381.386h5.253a.384.384 0 00.381-.385v-9.422c2.003 2.243 4.429 3.342 7.385 3.342 5.496 0 11.06-4.23 11.06-12.317.008-8.088-5.556-12.32-11.056-12.32l-.004.001zm4.952 12.32c0 4.115-2.534 6.991-6.168 6.991-3.59 0-6.299-3.005-6.299-6.992 0-3.986 2.709-6.99 6.299-6.99 3.573-.001 6.168 2.938 6.168 6.99zm20.364-12.32c-7.077 0-12.621 5.45-12.621 12.407 0 6.884 5.507 12.274 12.536 12.274 7.102 0 12.662-5.43 12.662-12.362 0-6.907-5.524-12.318-12.577-12.318zm0 19.352c-3.763 0-6.603-3.026-6.603-7.035 0-4.027 2.742-6.949 6.518-6.949 3.788 0 6.643 3.025 6.643 7.037 0 4.026-2.758 6.947-6.558 6.947zm27.689-18.872h-5.78v-5.907a.383.383 0 00-.381-.385h-5.252a.386.386 0 00-.385.385v5.907h-2.523a.383.383 0 00-.381.385v4.513c0 .212.17.385.381.385h2.523v11.678c0 4.717 2.348 7.11 6.984 7.11 1.881 0 3.443-.39 4.915-1.225a.375.375 0 00.195-.332v-4.3a.382.382 0 00-.183-.324.372.372 0 00-.373-.016c-1.01.507-1.987.742-3.082.742-1.683 0-2.438-.767-2.438-2.478V31.497h5.78a.383.383 0 00.381-.385V26.6a.372.372 0 00-.377-.385l-.004-.003zm20.132.023v-.725c0-2.135.82-3.087 2.653-3.087 1.095 0 1.975.218 2.96.546a.38.38 0 00.345-.053.38.38 0 00.158-.313V18.18a.38.38 0 00-.271-.369c-1.039-.31-2.369-.627-4.364-.627-4.847 0-7.414 2.731-7.414 7.895v1.111h-2.523a.386.386 0 00-.385.385v4.536c0 .212.174.385.385.385h2.523v18.01c0 .214.174.385.385.385h5.248c.215 0 .385-.17.385-.386V31.496h4.904l7.511 18.008c-.852 1.89-1.691 2.267-2.835 2.267-.925 0-1.902-.275-2.896-.823a.418.418 0 00-.304-.028.384.384 0 00-.227.207l-1.78 3.905a.382.382 0 00.166.5c1.857 1.005 3.532 1.435 5.605 1.435 3.877 0 6.023-1.809 7.909-6.668l9.109-23.538a.377.377 0 00-.041-.357.374.374 0 00-.312-.167h-5.467a.383.383 0 00-.365.258l-5.601 15.993-6.133-16.004a.381.381 0 00-.356-.247h-8.972v-.002zm-11.672-.023h-5.252a.387.387 0 00-.386.385v22.907c0 .215.175.386.386.386h5.252c.211 0 .385-.17.385-.386V26.6a.384.384 0 00-.385-.385v-.002zm-2.596-10.43a3.766 3.766 0 10-.004 7.531 3.766 3.766 0 00.004-7.532zm46 17.796a3.681 3.681 0 01-3.694-3.696 3.715 3.715 0 013.715-3.714 3.68 3.68 0 013.694 3.693 3.716 3.716 0 01-3.715 3.717zm.021-7.043c-1.894 0-3.326 1.505-3.326 3.347s1.423 3.326 3.305 3.326c1.894 0 3.326-1.503 3.326-3.347 0-1.841-1.424-3.326-3.305-3.326zm.819 3.706l1.046 1.463h-.884l-.941-1.342h-.807v1.343h-.738v-3.88h1.728c.904 0 1.496.462 1.496 1.238.004.636-.365 1.024-.896 1.178h-.004zm-.625-1.75h-.961v1.227h.961c.479 0 .767-.235.767-.614 0-.4-.288-.613-.767-.613z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="h-20 w-60 scale-50 text-white/80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.677.162C15.92.162.714 15.368.714 34.126S15.92 68.089 34.677 68.089c18.76 0 33.965-15.205 33.965-33.963C68.642 15.37 53.437.164 34.677.164V.162zm15.576 48.985a2.116 2.116 0 01-2.912.702c-7.974-4.87-18.013-5.974-29.835-3.273a2.118 2.118 0 01-.943-4.129c12.938-2.956 24.036-1.683 32.988 3.788a2.117 2.117 0 01.702 2.912zM54.41 39.9a2.648 2.648 0 01-3.642.872c-9.13-5.611-23.046-7.236-33.844-3.959a2.652 2.652 0 01-3.305-1.764 2.652 2.652 0 011.766-3.302c12.335-3.743 27.67-1.93 38.153 4.513a2.647 2.647 0 01.872 3.64zm.357-9.63c-10.946-6.502-29.007-7.1-39.458-3.928a3.176 3.176 0 11-1.844-6.08c11.997-3.642 31.942-2.938 44.544 4.544a3.173 3.173 0 011.111 4.353 3.174 3.174 0 01-4.351 1.11h-.002zm38.351 1.245c-5.864-1.398-6.907-2.38-6.907-4.442 0-1.948 1.833-3.26 4.563-3.26 2.644 0 5.264.996 8.014 3.046a.377.377 0 00.288.07.378.378 0 00.255-.156l2.864-4.036a.386.386 0 00-.073-.522c-3.273-2.626-6.956-3.902-11.263-3.902-6.331 0-10.756 3.8-10.756 9.236 0 5.83 3.817 7.895 10.411 9.488 5.61 1.293 6.558 2.376 6.558 4.311 0 2.146-1.914 3.48-4.996 3.48-3.423 0-6.218-1.156-9.34-3.857a.398.398 0 00-.28-.093.38.38 0 00-.264.134l-3.212 3.82a.386.386 0 00.036.535c3.634 3.245 8.104 4.957 12.93 4.957 6.822 0 11.23-3.728 11.23-9.499.012-4.87-2.904-7.567-10.046-9.304l-.012-.006zm25.494-5.783c-2.956 0-5.382 1.165-7.385 3.552v-2.687a.383.383 0 00-.381-.385h-5.253a.383.383 0 00-.381.385v29.85c0 .212.171.386.381.386h5.253a.384.384 0 00.381-.385v-9.422c2.003 2.243 4.429 3.342 7.385 3.342 5.496 0 11.06-4.23 11.06-12.317.008-8.088-5.556-12.32-11.056-12.32l-.004.001zm4.952 12.32c0 4.115-2.534 6.991-6.168 6.991-3.59 0-6.299-3.005-6.299-6.992 0-3.986 2.709-6.99 6.299-6.99 3.573-.001 6.168 2.938 6.168 6.99zm20.364-12.32c-7.077 0-12.621 5.45-12.621 12.407 0 6.884 5.507 12.274 12.536 12.274 7.102 0 12.662-5.43 12.662-12.362 0-6.907-5.524-12.318-12.577-12.318zm0 19.352c-3.763 0-6.603-3.026-6.603-7.035 0-4.027 2.742-6.949 6.518-6.949 3.788 0 6.643 3.025 6.643 7.037 0 4.026-2.758 6.947-6.558 6.947zm27.689-18.872h-5.78v-5.907a.383.383 0 00-.381-.385h-5.252a.386.386 0 00-.385.385v5.907h-2.523a.383.383 0 00-.381.385v4.513c0 .212.17.385.381.385h2.523v11.678c0 4.717 2.348 7.11 6.984 7.11 1.881 0 3.443-.39 4.915-1.225a.375.375 0 00.195-.332v-4.3a.382.382 0 00-.183-.324.372.372 0 00-.373-.016c-1.01.507-1.987.742-3.082.742-1.683 0-2.438-.767-2.438-2.478V31.497h5.78a.383.383 0 00.381-.385V26.6a.372.372 0 00-.377-.385l-.004-.003zm20.132.023v-.725c0-2.135.82-3.087 2.653-3.087 1.095 0 1.975.218 2.96.546a.38.38 0 00.345-.053.38.38 0 00.158-.313V18.18a.38.38 0 00-.271-.369c-1.039-.31-2.369-.627-4.364-.627-4.847 0-7.414 2.731-7.414 7.895v1.111h-2.523a.386.386 0 00-.385.385v4.536c0 .212.174.385.385.385h2.523v18.01c0 .214.174.385.385.385h5.248c.215 0 .385-.17.385-.386V31.496h4.904l7.511 18.008c-.852 1.89-1.691 2.267-2.835 2.267-.925 0-1.902-.275-2.896-.823a.418.418 0 00-.304-.028.384.384 0 00-.227.207l-1.78 3.905a.382.382 0 00.166.5c1.857 1.005 3.532 1.435 5.605 1.435 3.877 0 6.023-1.809 7.909-6.668l9.109-23.538a.377.377 0 00-.041-.357.374.374 0 00-.312-.167h-5.467a.383.383 0 00-.365.258l-5.601 15.993-6.133-16.004a.381.381 0 00-.356-.247h-8.972v-.002zm-11.672-.023h-5.252a.387.387 0 00-.386.385v22.907c0 .215.175.386.386.386h5.252c.211 0 .385-.17.385-.386V26.6a.384.384 0 00-.385-.385v-.002zm-2.596-10.43a3.766 3.766 0 10-.004 7.531 3.766 3.766 0 00.004-7.532zm46 17.796a3.681 3.681 0 01-3.694-3.696 3.715 3.715 0 013.715-3.714 3.68 3.68 0 013.694 3.693 3.716 3.716 0 01-3.715 3.717zm.021-7.043c-1.894 0-3.326 1.505-3.326 3.347s1.423 3.326 3.305 3.326c1.894 0 3.326-1.503 3.326-3.347 0-1.841-1.424-3.326-3.305-3.326zm.819 3.706l1.046 1.463h-.884l-.941-1.342h-.807v1.343h-.738v-3.88h1.728c.904 0 1.496.462 1.496 1.238.004.636-.365 1.024-.896 1.178h-.004zm-.625-1.75h-.961v1.227h.961c.479 0 .767-.235.767-.614 0-.4-.288-.613-.767-.613z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="h-20 w-60 scale-50 text-white/80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.677.162C15.92.162.714 15.368.714 34.126S15.92 68.089 34.677 68.089c18.76 0 33.965-15.205 33.965-33.963C68.642 15.37 53.437.164 34.677.164V.162zm15.576 48.985a2.116 2.116 0 01-2.912.702c-7.974-4.87-18.013-5.974-29.835-3.273a2.118 2.118 0 01-.943-4.129c12.938-2.956 24.036-1.683 32.988 3.788a2.117 2.117 0 01.702 2.912zM54.41 39.9a2.648 2.648 0 01-3.642.872c-9.13-5.611-23.046-7.236-33.844-3.959a2.652 2.652 0 01-3.305-1.764 2.652 2.652 0 011.766-3.302c12.335-3.743 27.67-1.93 38.153 4.513a2.647 2.647 0 01.872 3.64zm.357-9.63c-10.946-6.502-29.007-7.1-39.458-3.928a3.176 3.176 0 11-1.844-6.08c11.997-3.642 31.942-2.938 44.544 4.544a3.173 3.173 0 011.111 4.353 3.174 3.174 0 01-4.351 1.11h-.002zm38.351 1.245c-5.864-1.398-6.907-2.38-6.907-4.442 0-1.948 1.833-3.26 4.563-3.26 2.644 0 5.264.996 8.014 3.046a.377.377 0 00.288.07.378.378 0 00.255-.156l2.864-4.036a.386.386 0 00-.073-.522c-3.273-2.626-6.956-3.902-11.263-3.902-6.331 0-10.756 3.8-10.756 9.236 0 5.83 3.817 7.895 10.411 9.488 5.61 1.293 6.558 2.376 6.558 4.311 0 2.146-1.914 3.48-4.996 3.48-3.423 0-6.218-1.156-9.34-3.857a.398.398 0 00-.28-.093.38.38 0 00-.264.134l-3.212 3.82a.386.386 0 00.036.535c3.634 3.245 8.104 4.957 12.93 4.957 6.822 0 11.23-3.728 11.23-9.499.012-4.87-2.904-7.567-10.046-9.304l-.012-.006zm25.494-5.783c-2.956 0-5.382 1.165-7.385 3.552v-2.687a.383.383 0 00-.381-.385h-5.253a.383.383 0 00-.381.385v29.85c0 .212.171.386.381.386h5.253a.384.384 0 00.381-.385v-9.422c2.003 2.243 4.429 3.342 7.385 3.342 5.496 0 11.06-4.23 11.06-12.317.008-8.088-5.556-12.32-11.056-12.32l-.004.001zm4.952 12.32c0 4.115-2.534 6.991-6.168 6.991-3.59 0-6.299-3.005-6.299-6.992 0-3.986 2.709-6.99 6.299-6.99 3.573-.001 6.168 2.938 6.168 6.99zm20.364-12.32c-7.077 0-12.621 5.45-12.621 12.407 0 6.884 5.507 12.274 12.536 12.274 7.102 0 12.662-5.43 12.662-12.362 0-6.907-5.524-12.318-12.577-12.318zm0 19.352c-3.763 0-6.603-3.026-6.603-7.035 0-4.027 2.742-6.949 6.518-6.949 3.788 0 6.643 3.025 6.643 7.037 0 4.026-2.758 6.947-6.558 6.947zm27.689-18.872h-5.78v-5.907a.383.383 0 00-.381-.385h-5.252a.386.386 0 00-.385.385v5.907h-2.523a.383.383 0 00-.381.385v4.513c0 .212.17.385.381.385h2.523v11.678c0 4.717 2.348 7.11 6.984 7.11 1.881 0 3.443-.39 4.915-1.225a.375.375 0 00.195-.332v-4.3a.382.382 0 00-.183-.324.372.372 0 00-.373-.016c-1.01.507-1.987.742-3.082.742-1.683 0-2.438-.767-2.438-2.478V31.497h5.78a.383.383 0 00.381-.385V26.6a.372.372 0 00-.377-.385l-.004-.003zm20.132.023v-.725c0-2.135.82-3.087 2.653-3.087 1.095 0 1.975.218 2.96.546a.38.38 0 00.345-.053.38.38 0 00.158-.313V18.18a.38.38 0 00-.271-.369c-1.039-.31-2.369-.627-4.364-.627-4.847 0-7.414 2.731-7.414 7.895v1.111h-2.523a.386.386 0 00-.385.385v4.536c0 .212.174.385.385.385h2.523v18.01c0 .214.174.385.385.385h5.248c.215 0 .385-.17.385-.386V31.496h4.904l7.511 18.008c-.852 1.89-1.691 2.267-2.835 2.267-.925 0-1.902-.275-2.896-.823a.418.418 0 00-.304-.028.384.384 0 00-.227.207l-1.78 3.905a.382.382 0 00.166.5c1.857 1.005 3.532 1.435 5.605 1.435 3.877 0 6.023-1.809 7.909-6.668l9.109-23.538a.377.377 0 00-.041-.357.374.374 0 00-.312-.167h-5.467a.383.383 0 00-.365.258l-5.601 15.993-6.133-16.004a.381.381 0 00-.356-.247h-8.972v-.002zm-11.672-.023h-5.252a.387.387 0 00-.386.385v22.907c0 .215.175.386.386.386h5.252c.211 0 .385-.17.385-.386V26.6a.384.384 0 00-.385-.385v-.002zm-2.596-10.43a3.766 3.766 0 10-.004 7.531 3.766 3.766 0 00.004-7.532zm46 17.796a3.681 3.681 0 01-3.694-3.696 3.715 3.715 0 013.715-3.714 3.68 3.68 0 013.694 3.693 3.716 3.716 0 01-3.715 3.717zm.021-7.043c-1.894 0-3.326 1.505-3.326 3.347s1.423 3.326 3.305 3.326c1.894 0 3.326-1.503 3.326-3.347 0-1.841-1.424-3.326-3.305-3.326zm.819 3.706l1.046 1.463h-.884l-.941-1.342h-.807v1.343h-.738v-3.88h1.728c.904 0 1.496.462 1.496 1.238.004.636-.365 1.024-.896 1.178h-.004zm-.625-1.75h-.961v1.227h.961c.479 0 .767-.235.767-.614 0-.4-.288-.613-.767-.613z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="h-20 w-60 scale-50 text-white/80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.677.162C15.92.162.714 15.368.714 34.126S15.92 68.089 34.677 68.089c18.76 0 33.965-15.205 33.965-33.963C68.642 15.37 53.437.164 34.677.164V.162zm15.576 48.985a2.116 2.116 0 01-2.912.702c-7.974-4.87-18.013-5.974-29.835-3.273a2.118 2.118 0 01-.943-4.129c12.938-2.956 24.036-1.683 32.988 3.788a2.117 2.117 0 01.702 2.912zM54.41 39.9a2.648 2.648 0 01-3.642.872c-9.13-5.611-23.046-7.236-33.844-3.959a2.652 2.652 0 01-3.305-1.764 2.652 2.652 0 011.766-3.302c12.335-3.743 27.67-1.93 38.153 4.513a2.647 2.647 0 01.872 3.64zm.357-9.63c-10.946-6.502-29.007-7.1-39.458-3.928a3.176 3.176 0 11-1.844-6.08c11.997-3.642 31.942-2.938 44.544 4.544a3.173 3.173 0 011.111 4.353 3.174 3.174 0 01-4.351 1.11h-.002zm38.351 1.245c-5.864-1.398-6.907-2.38-6.907-4.442 0-1.948 1.833-3.26 4.563-3.26 2.644 0 5.264.996 8.014 3.046a.377.377 0 00.288.07.378.378 0 00.255-.156l2.864-4.036a.386.386 0 00-.073-.522c-3.273-2.626-6.956-3.902-11.263-3.902-6.331 0-10.756 3.8-10.756 9.236 0 5.83 3.817 7.895 10.411 9.488 5.61 1.293 6.558 2.376 6.558 4.311 0 2.146-1.914 3.48-4.996 3.48-3.423 0-6.218-1.156-9.34-3.857a.398.398 0 00-.28-.093.38.38 0 00-.264.134l-3.212 3.82a.386.386 0 00.036.535c3.634 3.245 8.104 4.957 12.93 4.957 6.822 0 11.23-3.728 11.23-9.499.012-4.87-2.904-7.567-10.046-9.304l-.012-.006zm25.494-5.783c-2.956 0-5.382 1.165-7.385 3.552v-2.687a.383.383 0 00-.381-.385h-5.253a.383.383 0 00-.381.385v29.85c0 .212.171.386.381.386h5.253a.384.384 0 00.381-.385v-9.422c2.003 2.243 4.429 3.342 7.385 3.342 5.496 0 11.06-4.23 11.06-12.317.008-8.088-5.556-12.32-11.056-12.32l-.004.001zm4.952 12.32c0 4.115-2.534 6.991-6.168 6.991-3.59 0-6.299-3.005-6.299-6.992 0-3.986 2.709-6.99 6.299-6.99 3.573-.001 6.168 2.938 6.168 6.99zm20.364-12.32c-7.077 0-12.621 5.45-12.621 12.407 0 6.884 5.507 12.274 12.536 12.274 7.102 0 12.662-5.43 12.662-12.362 0-6.907-5.524-12.318-12.577-12.318zm0 19.352c-3.763 0-6.603-3.026-6.603-7.035 0-4.027 2.742-6.949 6.518-6.949 3.788 0 6.643 3.025 6.643 7.037 0 4.026-2.758 6.947-6.558 6.947zm27.689-18.872h-5.78v-5.907a.383.383 0 00-.381-.385h-5.252a.386.386 0 00-.385.385v5.907h-2.523a.383.383 0 00-.381.385v4.513c0 .212.17.385.381.385h2.523v11.678c0 4.717 2.348 7.11 6.984 7.11 1.881 0 3.443-.39 4.915-1.225a.375.375 0 00.195-.332v-4.3a.382.382 0 00-.183-.324.372.372 0 00-.373-.016c-1.01.507-1.987.742-3.082.742-1.683 0-2.438-.767-2.438-2.478V31.497h5.78a.383.383 0 00.381-.385V26.6a.372.372 0 00-.377-.385l-.004-.003zm20.132.023v-.725c0-2.135.82-3.087 2.653-3.087 1.095 0 1.975.218 2.96.546a.38.38 0 00.345-.053.38.38 0 00.158-.313V18.18a.38.38 0 00-.271-.369c-1.039-.31-2.369-.627-4.364-.627-4.847 0-7.414 2.731-7.414 7.895v1.111h-2.523a.386.386 0 00-.385.385v4.536c0 .212.174.385.385.385h2.523v18.01c0 .214.174.385.385.385h5.248c.215 0 .385-.17.385-.386V31.496h4.904l7.511 18.008c-.852 1.89-1.691 2.267-2.835 2.267-.925 0-1.902-.275-2.896-.823a.418.418 0 00-.304-.028.384.384 0 00-.227.207l-1.78 3.905a.382.382 0 00.166.5c1.857 1.005 3.532 1.435 5.605 1.435 3.877 0 6.023-1.809 7.909-6.668l9.109-23.538a.377.377 0 00-.041-.357.374.374 0 00-.312-.167h-5.467a.383.383 0 00-.365.258l-5.601 15.993-6.133-16.004a.381.381 0 00-.356-.247h-8.972v-.002zm-11.672-.023h-5.252a.387.387 0 00-.386.385v22.907c0 .215.175.386.386.386h5.252c.211 0 .385-.17.385-.386V26.6a.384.384 0 00-.385-.385v-.002zm-2.596-10.43a3.766 3.766 0 10-.004 7.531 3.766 3.766 0 00.004-7.532zm46 17.796a3.681 3.681 0 01-3.694-3.696 3.715 3.715 0 013.715-3.714 3.68 3.68 0 013.694 3.693 3.716 3.716 0 01-3.715 3.717zm.021-7.043c-1.894 0-3.326 1.505-3.326 3.347s1.423 3.326 3.305 3.326c1.894 0 3.326-1.503 3.326-3.347 0-1.841-1.424-3.326-3.305-3.326zm.819 3.706l1.046 1.463h-.884l-.941-1.342h-.807v1.343h-.738v-3.88h1.728c.904 0 1.496.462 1.496 1.238.004.636-.365 1.024-.896 1.178h-.004zm-.625-1.75h-.961v1.227h.961c.479 0 .767-.235.767-.614 0-.4-.288-.613-.767-.613z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-20 py-20">
        <div className="flex w-full items-center justify-between gap-10">
          <h2 className="max-w-2xl text-5xl font-medium leading-[3.5rem] text-gray-800">
            86% of our members get better within 12 weeks
          </h2>

          <p className="max-w-lg text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam cum
            placeat modi voluptatibus debitis sed. Soluta ex esse corporis eius
            iusto magnam enim nihil odit eligendi, maxime veritatis commodi
            optio debitis suscipit repudiandae, facere quae.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-20 pb-20">
        <div className="relative w-full rounded-[3rem] bg-blue-700 p-20">
          <div className="pattern absolute inset-0 opacity-80"></div>

          <div className="relative">
            <h2 className="mx-auto max-w-lg text-center text-5xl font-semibold text-white">
              We serve in different areas for our patients
            </h2>

            <div className="mt-20 grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-3">
              <div className="flex h-full w-full flex-col p-5 py-10">
                <p className="text-sm font-medium uppercase text-white">
                  care for every situation
                </p>

                <h3 className="mt-1 text-3xl font-semibold text-white">
                  Sympathetic care for life
                </h3>

                <p className="mt-5 text-sm/6 text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores aliquam minus tenetur quasi itaque ex. Facere, quo,
                  id alias aliquid dolorem nisi corrupti temporibus illum
                  tenetur possimus.
                </p>

                <button className="mt-5 w-max rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-800">
                  Get Started
                </button>
              </div>

              <div className="flex h-full w-full flex-col rounded-3xl bg-white/5 p-5 py-10 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-16 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.01 13.109l-.495.095-1.923-1.923a5.437 5.437 0 117.69-7.689l1.922 1.923-.096.495-.001.009-.013.054a4.18 4.18 0 01-.07.244c-.07.22-.19.545-.385.948-.388.806-1.076 1.923-2.264 3.11-1.188 1.189-2.304 1.876-3.11 2.265-.403.194-.73.314-.948.383a4.123 4.123 0 01-.298.084zm3.52-8.64a.75.75 0 10-1.06 1.061l1.5 1.5a.75.75 0 101.06-1.06z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M20.408 8.718l-1.953-1.952-.003.008c-.09.28-.235.672-.462 1.143-.454.943-1.236 2.201-2.554 3.52-1.318 1.318-2.577 2.1-3.52 2.554a8.868 8.868 0 01-1.143.461l-.007.003 1.953 1.952a5.437 5.437 0 107.688-7.689"
                  />
                  <path
                    fill="currentColor"
                    d="M6.717 10.138c.234.409.526.794.875 1.144l5.127 5.126c.349.35.734.641 1.143.876a5.99 5.99 0 01-1.62 2.959 6 6 0 11-5.526-10.105"
                    opacity={0.5}
                  />
                </svg>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Medical check up
                </h3>

                <p className="mt-5 flex-1 text-sm/6 text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores aliquam minus tenetur quasi itaque ex. Facere, quo,
                  id
                </p>

                <button className="mt-5 flex w-max items-center justify-start gap-2 rounded-full bg-transparent text-sm font-medium text-white">
                  Learn more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex h-full w-full flex-col rounded-3xl bg-white p-5 py-10 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-16 text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.346 11.25A6.291 6.291 0 012 9.26C2 3.35 7.5.663 12 5.5 16.5.663 22 3.349 22 9.26a6.3 6.3 0 01-.346 1.99h-3.13c-.546 0-1.03-.002-1.471.195-.441.196-.765.557-1.13.963l-.075.084-1.029 1.143c-.076.085-.139.155-.194.214a17.683 17.683 0 01-.185-.221l-3.55-4.305c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 00-.773-.353 1.24 1.24 0 00-.81.258c-.16.116-.33.278-.49.43l-1.53 1.456c-.471.45-.57.526-.672.567-.103.042-.228.054-.879.054z"
                  />
                  <path
                    fill="currentColor"
                    d="M3.004 12.75c1.381 2.562 3.926 4.964 5.958 6.62C10.294 20.458 10.96 21 12 21c1.04 0 1.706-.543 3.038-1.63 2.032-1.656 4.577-4.058 5.958-6.62h-2.36c-.724 0-.861.015-.973.065-.112.05-.215.142-.7.68l-1.054 1.172a5.214 5.214 0 01-.486.496c-.185.155-.46.33-.833.321-.373-.008-.641-.194-.82-.357a5.244 5.244 0 01-.463-.515l-3.552-4.306-.171-.205c-.055.05-.118.11-.194.183l-1.577 1.501c-.356.34-.671.642-1.077.804-.406.163-.843.162-1.335.161z"
                  />
                </svg>

                <h3 className="mt-5 text-xl font-semibold text-gray-800">
                  Medical check up
                </h3>

                <p className="mt-5 flex-1 text-sm/6 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores aliquam minus tenetur quasi itaque ex. Facere, quo,
                  id
                </p>

                <button className="mt-5 flex w-max items-center justify-start gap-2 rounded-full bg-transparent text-sm font-medium text-gray-800">
                  Learn more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex h-full w-full flex-col rounded-3xl bg-white/5 p-5 py-10 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-16 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.187 15.049a4.085 4.085 0 000 5.758 4.042 4.042 0 005.734 0l3.746-3.762-1.772-.736a2.356 2.356 0 01-1.408-1.906 2.352 2.352 0 00-2.074-2.082h-1.51z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.363 2.233a.8.8 0 011.13.003l7.274 7.305a.8.8 0 01-1.134 1.129L13.36 3.364a.8.8 0 01.003-1.13"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M14.09 4.098L3.187 15.048a4.085 4.085 0 000 5.76 4.042 4.042 0 005.734 0L19.824 9.856z"
                    opacity={0.5}
                  />
                </svg>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Medical check up
                </h3>

                <p className="mt-5 flex-1 text-sm/6 text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores aliquam minus tenetur quasi itaque ex. Facere, quo,
                  id
                </p>

                <button className="mt-5 flex w-max items-center justify-start gap-2 rounded-full bg-transparent text-sm font-medium text-white">
                  Learn more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex h-full w-full flex-col rounded-3xl bg-white/5 p-5 py-10 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-16 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.187 15.049a4.085 4.085 0 000 5.758 4.042 4.042 0 005.734 0l3.746-3.762-1.772-.736a2.356 2.356 0 01-1.408-1.906 2.352 2.352 0 00-2.074-2.082h-1.51z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.363 2.233a.8.8 0 011.13.003l7.274 7.305a.8.8 0 01-1.134 1.129L13.36 3.364a.8.8 0 01.003-1.13"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M14.09 4.098L3.187 15.048a4.085 4.085 0 000 5.76 4.042 4.042 0 005.734 0L19.824 9.856z"
                    opacity={0.5}
                  />
                </svg>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Medical check up
                </h3>

                <p className="mt-5 flex-1 text-sm/6 text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores aliquam minus tenetur quasi itaque ex. Facere, quo,
                  id
                </p>

                <button className="mt-5 flex w-max items-center justify-start gap-2 rounded-full bg-transparent text-sm font-medium text-white">
                  Learn more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex h-full w-full flex-col rounded-3xl bg-white/5 p-5 py-10 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-16 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.187 15.049a4.085 4.085 0 000 5.758 4.042 4.042 0 005.734 0l3.746-3.762-1.772-.736a2.356 2.356 0 01-1.408-1.906 2.352 2.352 0 00-2.074-2.082h-1.51z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.363 2.233a.8.8 0 011.13.003l7.274 7.305a.8.8 0 01-1.134 1.129L13.36 3.364a.8.8 0 01.003-1.13"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M14.09 4.098L3.187 15.048a4.085 4.085 0 000 5.76 4.042 4.042 0 005.734 0L19.824 9.856z"
                    opacity={0.5}
                  />
                </svg>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Medical check up
                </h3>

                <p className="mt-5 flex-1 text-sm/6 text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores aliquam minus tenetur quasi itaque ex. Facere, quo,
                  id
                </p>

                <button className="mt-5 flex w-max items-center justify-start gap-2 rounded-full bg-transparent text-sm font-medium text-white">
                  Learn more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
