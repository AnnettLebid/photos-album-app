import { ref, onMounted } from "vue";
import axios, { AxiosResponse } from "axios";

export function useApi(url: string) {
  const data = ref([]);
  const loading = ref<boolean>(true);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<[]> = await axios.get(url);
      data.value = response.data;
      console.log(data.value);
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });

  return {
    data,
    loading,
    error,
  };
}
