# Sexist-Statement-Detection

Hate speech detectors are being used by social media companies to monitor and flag content which is abusive towards a particular group or section of society. While these detectors do significantly well to flag extremely hostile forms of abuse, they fail miserably at detecting subtler forms of hate speech. There are numerous outlets of subtle hate speech outside of social media, including workplace and places which do not offer the anonymity that is a characteristic of social media.

Our project is an attempt to improve classification performance on subtle forms of sexism, which is a common problem faced at workplace environments.


## Dataset description 
Primary Dataset was collected from [Sexist Workplace Statements: A dataset for sexist statements in the workplace](https://www.kaggle.com/dgrosz/sexist-workplace-statements). 
However due to small training set size, we also scrapped data from [The Everyday Sexism Project](https://arxiv.org/abs/1910.04602) and used the twitter API to get tweets which were labeled [benevolently sexist](https://www.aclweb.org/anthology/W17-2902/) as per the ambivalent sexism theory (Glick and Fiske, 1996). Additionally, we processed [misogynous YouTube comments dataset](https://arxiv.org/abs/2003.07428) to extract implicit categories of misogynous statements.

We further balanced the sexist and non-sexist data by augmenting the less frequent class (non-sexist) using NLPAug library

## Model 
We've experimented with following models 

- Baseline RNN model
- Bidirectional LSTM
- ELMo 
- DistilBert 

DistilBert and Bidirectional LSTM seems to perform well.

Final notebook - https://github.com/PadmajaVB/Sexist-Statement-Detection/blob/main/compiled_notebook.ipynb
