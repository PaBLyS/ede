<template>
    <div class="currencie">
        <div class="currencie-header">
            {{$route.params.id}}
        </div>
        <div class="currencie-row">
            <div class="currencie-row-field">
                <div class="currencie-row-field__title">{{$route.params.id}}</div>
                <c-input
                    v-model="first_currencie"
                    type="number"
                    placeholder="Enter currencie"
                />
            </div>
            <div class="currencie-row-field">
                <div class="currencie-row-field__title">USD</div>
                <c-input
                    v-model="second_currencie"
                    type="number"
                    placeholder="Result"
                    :disabled="true"
                />
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />
<style lang="scss">@import "style"</style>