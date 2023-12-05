<script>
export default {
  name: 'App',
  data() {
    return {
      steps: [
        {
          id: '1',
          hideInput: true,
          message: 'Привет! Что я могу для Вас сделать?',
          trigger: '2',
        },
        {
          id: '2',
          hideInput: true,
          options: [
            { id: '1', label: 'Заказать пиццу', trigger: '3' },
            { id: '2', label: 'Установить будильник', trigger: '4' },
            { id: '3', label: 'Вывести погоду', trigger: '5' },
          ],
        },
        {
          id: '3',
          message: 'Хорошо, я закажу пиццу. Что еще могу сделать?',
          trigger: '2',
        },
        {
          id: '4',
          message: 'Хорошо, я установлю будильник. Что еще могу сделать?',
          trigger: '2',
        },
        {
          id: '5',
          message: 'Хорошо, я выведу погоду. Что еще могу сделать?',
          trigger: '2',
        },
      ],
    };
  },
};
</script>

<template>
  <vue-chatbot :steps="steps">
    <template v-slot:header>
      <div>Hi, Chatbot Here</div>
    </template>
  </vue-chatbot>
</template>

<style scoped></style>
