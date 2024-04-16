<template>
    <div class="h-fit w-full overflow-hidden">
        <TheHeader>
            <template #image>
                <NuxtImg provider="cloudinary"
                         loading="lazy"
                         format="webp"
                         alt="image"
                         sizes="sm:100vw md:50vw lg:1500px"
                         :modifiers="{ effect: 'colorize:60', color: 'black' }"
                         src="v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg"
                         class="w-full h-full object-cover object-center" />
            </template>
        </TheHeader>

        <!-- introduction  -->

        <UiComp header="About Us"
                small-text="Refreshing and delicious"
                paragraph="We are a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa. Dansom has since developed a network of thematic and regional experts based in Somalia and Kenya, with a unique level of access to hard-to-reach areas and a strong focus on security and socio-political and economic development in Eastern Africa.">
            <!-- button slot  -->
            <template #button>
                <div class="py-6">
                    <button class="px-10 bg-primary py-3 w-fit">
                        <nuxt-link to=""
                                   class="text-xl text-black font-Josefinsans">
                            About Us
                        </nuxt-link>
                    </button>
                </div>
            </template>

            <!-- Image slot -->
            <template #image>
                <div class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1713240714/smiling-young-african-girl-wearing-traditional-clothing-classroom-with-students_996993-23087_ygimi3.jpg"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
                <div class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12 md:hidden"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1713240777/countryside-women-out-field-posing_23-2148761775_wo8svm.jpg"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>
            <template #image2>
                <div class="w-full px-2 flex gap-2"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:10', color: 'black' }"
                             sizes="sm:100px md:50vw lg:600px"
                             provider="cloudinary"
                             src="v1713240887/countryside-worker-pushing-wheelbarrow-with-peanuts_23-2148761782_qigkes.jpg"
                             class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black" />
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:20', color: 'black' }"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             src="v1713240956/medium-shot-people-selling-bananas_23-2150830598_epjgud.jpg"
                             class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black" />
                </div>
            </template>
        </UiComp>

        <!-- food philosophy -->

        <UiComp small-text="quality & balance"
                header="Our Vision"
                paragraph="Our vision is To support the development of the horn of Africa by increasing understanding and knowledge through innovative approaches in socio-political engagement and strategic field-based research.">
            <template #button>
                <div class="py-6">
                    <button class="px-10 bg-primary py-3 w-fit">
                        <nuxt-link to=""
                                   class="text-xl text-black font-Josefinsans">
                            About Us
                        </nuxt-link>
                    </button>
                </div>
            </template>

            <template #image>
                <div class="pt-8 h-[80vh] md:hidden"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1713241445/young-black-men-discussing-some-business-plans-be-executed-farmland_216356-75_gll7g5.jpg"
                             class="w-full h-full object-cover rounded-md" />
                </div>

                <div class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1713241445/young-black-men-discussing-some-business-plans-be-executed-farmland_216356-75_gll7g5.jpg"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>

            <template #image2>
                <div class="w-full px-2 flex gap-2"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:10', color: 'black' }"
                             sizes="sm:100px md:50vw lg:600px"
                             provider="cloudinary"
                             src="v1713240843/countryside-women-browsing-phone-together_23-2148761794_udpxoc.jpg"
                             class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black" />
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:10', color: 'black' }"
                             sizes="sm:100vw md:50vw lg:800px"
                             provider="cloudinary"
                             src="v1713241586/young-boy-holding-bunch-vegetables-field_662214-181069_urmsm3.jpg"
                             class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black" />
                </div>
            </template>
        </UiComp>

        <OurTeam />

    </div>
</template>

<script setup>
useHead({
    title: "About Us | Dansom Research & Consultancy",
    meta: [
        {
            name: "keywords",
            content:
                "Dansom Research & Consultancy, Dansom Research & Consultancy Nairobi, Dansom Research & Consultancy Kenya, Dansom Research & Consultancy Banda Street, Dansom Research & Consultancy Menu, Dansom Research & Consultancy Contact, Dansom Research & Consultancy Location, Dansom Research & Consultancy About Us, Dansom Research & Consultancy Food, Dansom Research & Consultancy Cuisine, Dansom Research & Consultancy Dining, Dansom Research & Consultancy Ambiance, Dansom Research & Consultancy Menu, Dansom Research & Consultancy Food Philosophy, Dansom Research & Consultancy Come and Visit Us Today",
        },
        //   description
        {
            name: "description",
            content:
                "Dansom Research & Consultancy is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
        },
        {
            name: "robots",
            content: "index, follow",
        },
        {
            name: "googlebot",
            content: "index, follow",
        },
        {
            name: "author",
            content: "Dansom Research & Consultancy",
        },
        {
            name: "page-topic",
            content: "Dansom Research & Consultancy",
        },
        {
            name: "page-type",
            content: "Restaurant",
        },
        {
            name: "audience",
            content: "all",
        },
        {
            name: "distribution",
            content: "global",
        },
        {
            name: "rating",
            content: "general",
        },
        {
            name: "revisit-after",
            content: "7 days",
        },
        {
            name: "language",
            content: "en-us",
        },
        // og meta
        {
            name: "og:title",
            content: "About Us | Dansom Research & Consultancy",
        },
        {
            name: "og:url",
            content: "https://zaman-restaurant.vercel.app/aboutus",
        },
        {
            name: "og:description",
            content:
                "Dansom Research & Consultancy is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
        },
        {
            name: "og:image",
            content:
                "https://res.cloudinary.com/dq6hflqwx/image/upload/v1629277449/2O0A8677_x3a9xc.webp",
        },
        {
            name: "og:site_name",
            content: "Dansom Research & Consultancy",
        },
        {
            name: "og:type",
            content: "website",
        },
        {
            name: "og:locale",
            content: "en_US",
        },
    ],
})
</script>

<style lang="scss"
       scoped></style>
