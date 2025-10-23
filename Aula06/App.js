import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Switch,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
  });

  const [aceitaTermos, setAceitaTermos] = useState(false);
  const [receberNews, setReceberNews] = useState(true);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!aceitaTermos) {
      newErrors.termos = 'Você deve aceitar os termos de uso';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Cadastro Realizado!',
        `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nCidade: ${formData.cidade || 'N/A'}\nReceber Newsletter: ${receberNews ? 'Sim' : 'Não'}`,
        [{ text: 'OK' }]
      );
      resetForm();
    } else {
      Alert.alert('Erro', 'Por favor, corrija os erros no formulário');
    }
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      telefone: '',
      endereco: '',
      cidade: '',
      estado: '',
      cep: '',
    });
    setAceitaTermos(false);
    setReceberNews(true);
    setErrors({});
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Formulário de Cadastro</Text>
        <Text style={styles.subtitle}>Preencha seus dados abaixo</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome Completo *</Text>
          <TextInput
            style={[styles.input, errors.nome && styles.inputError]}
            placeholder="Digite seu nome completo"
            value={formData.nome}
            onChangeText={(text) => handleInputChange('nome', text)}
          />
          {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="seu@email.com"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha *</Text>
          <TextInput
            style={[styles.input, errors.senha && styles.inputError]}
            placeholder="Mínimo 6 caracteres"
            value={formData.senha}
            onChangeText={(text) => handleInputChange('senha', text)}
            secureTextEntry
            autoCapitalize="none"
          />
          {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar Senha *</Text>
          <TextInput
            style={[styles.input, errors.confirmarSenha && styles.inputError]}
            placeholder="Digite a senha novamente"
            value={formData.confirmarSenha}
            onChangeText={(text) => handleInputChange('confirmarSenha', text)}
            secureTextEntry
            autoCapitalize="none"
          />
          {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone *</Text>
          <TextInput
            style={[styles.input, errors.telefone && styles.inputError]}
            placeholder="(00) 00000-0000"
            value={formData.telefone}
            onChangeText={(text) => handleInputChange('telefone', text)}
            keyboardType="phone-pad"
          />
          {errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={styles.input}
            placeholder="Rua, número, complemento"
            value={formData.endereco}
            onChangeText={(text) => handleInputChange('endereco', text)}
            multiline
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Sua cidade"
              value={formData.cidade}
              onChangeText={(text) => handleInputChange('cidade', text)}
            />
          </View>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>Estado</Text>
            <TextInput
              style={styles.input}
              placeholder="UF"
              value={formData.estado}
              onChangeText={(text) => handleInputChange('estado', text.toUpperCase())}
              maxLength={2}
              autoCapitalize="characters"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.input}
            placeholder="00000-000"
            value={formData.cep}
            onChangeText={(text) => handleInputChange('cep', text)}
            keyboardType="numeric"
            maxLength={9}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Aceito os termos de uso *</Text>
          <Switch
            value={aceitaTermos}
            onValueChange={setAceitaTermos}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={aceitaTermos ? '#007AFF' : '#f4f3f4'}
          />
        </View>
        {errors.termos && <Text style={styles.errorText}>{errors.termos}</Text>}

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Receber newsletter</Text>
          <Switch
            value={receberNews}
            onValueChange={setReceberNews}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={receberNews ? '#007AFF' : '#f4f3f4'}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
          <Text style={styles.resetButtonText}>Limpar Formulário</Text>
        </TouchableOpacity>

        <Text style={styles.requiredNote}>* Campos obrigatórios</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  inputError: {
    borderColor: '#ff3b30',
    borderWidth: 2,
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 14,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#007AFF',
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  requiredNote: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 30,
  },
});
