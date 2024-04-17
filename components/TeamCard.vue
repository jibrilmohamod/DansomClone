<template>
  <div
    class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
  >
    <div class="h-300 rounded overflow-hidden shadow-md bg-white">
      <!-- <div class="absolute -mt-20 w-full flex justify-center">
        <div class="h-32 w-32">
          <img
            src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
            alt=""
            class="rounded-full object-cover h-full w-full shadow-md"
          />
        </div>
      </div> -->
      <div class="px-6 mt-16">
        <div class="font-bold text-3xl text-center pb-1 font-Zilla">
          {{ name }}
        </div>
        <p class="text-gray-800 text-sm text-center">{{ role }}</p>
        <p class="text-center text-gray-600 text-base pt-3 font-normal">
          {{ about }}
        </p>
        <Accordion type="multiple" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Read More</AccordionTrigger>
            <AccordionContent>
              <div v-html="aboutBig"></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div class="w-full flex justify-center pt-5 pb-5">
          <a href="javascript:void(0)" class="mx-5">
            <div>
              <Icon name="facebook" />
            </div>
          </a>
          <a href="javascript:void(0)" class="mx-5">
            <div>
              <Icon name="twitter" />
            </div>
          </a>
          <a href="javascript:void(0)" class="mx-5">
            <div>
              <Icon name="linkedin" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

defineProps({
  name: {
    type: String,
    required: true,
    default: "Abdifatah Hamud",
  },
  role: {
    type: String,
    required: true,
    default: "Chief Executive Officer",
  },
  about: {
    type: String,
    required: true,
    default:
      "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
  },
  aboutBig: {
    type: String,
    required: true,
    default:
      "<p>Abdifatah Hamud is the CEO of the company. He is responsible for the overall success of the business. He is responsible for making top-level managerial decisions, creating a company-wide strategy, and ensuring that the company's goals are met. He is also responsible for making sure that the company is profitable",
  },
});
</script>

<style></style>
