<script setup
        lang="ts">
        import {
          NavigationMenu,
          NavigationMenuContent,
          NavigationMenuIndicator,
          NavigationMenuItem,
          NavigationMenuLink,
          NavigationMenuList,
          NavigationMenuTrigger,
          NavigationMenuViewport,
        } from '@/components/ui/navigation-menu'
</script>

<template>
  <div class="w-full px-5 py-5 bg-transparent">
    <NavigationMenu class="w-96">
      <NavigationMenuList>
        <!-- menu item -->
        <ul class="flex w-[90vw] items-center justify-between">
          <li class="">
            <NavigationMenuItem>

              <Icon name="quill:hamburger"
                    class="text-[40px] text-white" />


            </NavigationMenuItem>
          </li>

          <li class="">
            <!-- logo -->
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <img src="/dansom-logo.png"
                     alt="logo"
                     class="h-10" />
              </NavigationMenuLink>
            </NavigationMenuItem>

          </li>
        </ul>


      </NavigationMenuList>

    </NavigationMenu>
  </div>



</template>