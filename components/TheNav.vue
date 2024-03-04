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
  <div class="w-full px-4 py-5 bg-transparent">
    <NavigationMenu class="w-96">
      <NavigationMenuList>
        <!-- menu item -->
        <ul class="flex w-[90vw] items-center justify-between">
          <li class="basis-0 ">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <Icon name="bytesize:menu"
                      class="text-[40px] text-quinary" />

              </NavigationMenuLink>
            </NavigationMenuItem>
          </li>

          <li class="">
            <!-- logo -->
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <img src="/dansom-logo.png"
                     alt="logo"
                     class="h-12" />
              </NavigationMenuLink>
            </NavigationMenuItem>

          </li>
        </ul>


      </NavigationMenuList>

    </NavigationMenu>
  </div>



</template>